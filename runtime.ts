/* tslint:disable */
/* eslint-disable */
/**
 * MongoDB Atlas Data API
 * A fully-managed API to read, write, and aggregate data in MongoDB Atlas. The Data API is powered by serverless Atlas Functions and secured with user authentication and role-based permissions. To learn more about the Data API, see [Atlas Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/).  ## Set Up the Data API  Before you can use the Data API, you must enable and configure it in an Atlas App Services App. The configuration controls how the App\'s users authenticate, authorize requests, and interact with the API.  To learn how to start using the Data API in your App, see [Set up the Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/#set-up-the-data-api).  ## Authenticate Requests  Your Data API configuration in App Services controls how users authenticate their API requests. In most cases, you will use Application authentication, which lets users log in with one of the App\'s authentication providers. Users can either provide their login credentials directly in every request or provide a reusable access token for an authenticated session.  To learn more, see [Authenticate Data API Requests](https://www.mongodb.com/docs/atlas/app-services/data-api/authenticate/).
 *
 * The version of the OpenAPI document: v1
 */

export interface ApiKeyAuth {
  type: "apiKey";
  apiKey: string;
}

export interface AccessTokenAuth {
  type: "accessToken";
  accessToken: string;
}

export interface EmailPasswordAuth {
  type: "emailPassword";
  email: string;
  password: string;
}

export interface CustomJWTAuth {
  type: "customJWT";
  jwtTokenString: string;
}

export type Auth =
  | ApiKeyAuth
  | AccessTokenAuth
  | EmailPasswordAuth
  | CustomJWTAuth;

const isApiKeyAuth = (auth: Auth): auth is ApiKeyAuth => {
  return auth.type === "apiKey";
};

const isAccessTokenAuth = (auth: Auth): auth is AccessTokenAuth => {
  return auth.type === "accessToken";
};

const isEmailPasswordAuth = (auth: Auth): auth is EmailPasswordAuth => {
  return auth.type === "emailPassword";
};

const isCustomJWTAuth = (auth: Auth): auth is CustomJWTAuth => {
  return auth.type === "customJWT";
};

export class RequiredError extends Error {
  override name: "RequiredError" = "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

export interface ConfigurationParameters {
  basePath?: string; // override base path
  // Mongodb specific parameters
  dataSource?: string; // parameter for dataSource
  database?: string; // parameter for database
  collection?: string; // parameter for collection

  fetchApi?: FetchAPI; // override for fetch implementation
  middleware?: Middleware[]; // middleware to apply before/after fetch requests
  queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
  username?: string; // parameter for basic security
  password?: string; // parameter for basic security
  auth?: Auth; // parameter for custom security
  headers?: HTTPHeaders; //header params we want to use on every request
  credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
  constructor(
    private configuration: ConfigurationParameters = {
      dataSource: "mongodb-atlas",
    }
  ) {
    if (!configuration.dataSource) {
      configuration.dataSource = "mongodb-atlas";
    }
    this.configuration = configuration;
  }

  get basePath(): string {
    if (this.configuration.basePath) {
      return this.configuration.basePath;
    }
    throw new RequiredError("basePath");
  }

  get fetchApi(): FetchAPI | undefined {
    return this.configuration.fetchApi;
  }

  get middleware(): Middleware[] {
    return this.configuration.middleware || [];
  }

  get queryParamsStringify(): (params: HTTPQuery) => string {
    return this.configuration.queryParamsStringify || querystring;
  }

  get auth(): Auth {
    if (this.configuration.auth) {
      return this.configuration.auth;
    }
    throw new RequiredError("auth");
  }

  get headers(): HTTPHeaders | undefined {
    const headers = Object.assign({}, this.configuration.headers);
    // Check if auth is set and if it is, check if it has headers
    if (this.configuration.auth) {
      if (isApiKeyAuth(this.configuration.auth)) {
        headers["apiKey"] = `${this.configuration.auth.apiKey}`;
      }
      if (isAccessTokenAuth(this.configuration.auth)) {
        headers[
          "Authorization"
        ] = `Bearer ${this.configuration.auth.accessToken}`;
      }
      if (isEmailPasswordAuth(this.configuration.auth)) {
        headers["email"] = `${this.configuration.auth.email}`;
        headers["password"] = `${this.configuration.auth.password}`;
      }
      if (isCustomJWTAuth(this.configuration.auth)) {
        headers["jwtTokenString"] = `${this.configuration.auth.jwtTokenString}`;
      }
    }
    return headers;
  }

  get credentials(): RequestCredentials | undefined {
    return this.configuration.credentials;
  }

  get dataSource(): string | undefined {
    return this.configuration.dataSource;
  }

  get database(): string | undefined {
    return this.configuration.database;
  }

  get collection(): string | undefined {
    return this.configuration.collection;
  }
}

export const DefaultConfig = new Configuration({});

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {
  private static readonly jsonRegex = new RegExp(
    "^(:?application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$",
    "i"
  );
  private middleware: Middleware[];

  constructor(protected configuration = DefaultConfig) {
    this.middleware = configuration.middleware;
  }

  withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
    const next = this.clone<T>();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }

  withPreMiddleware<T extends BaseAPI>(
    this: T,
    ...preMiddlewares: Array<Middleware["pre"]>
  ) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware<T>(...middlewares);
  }

  withPostMiddleware<T extends BaseAPI>(
    this: T,
    ...postMiddlewares: Array<Middleware["post"]>
  ) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware<T>(...middlewares);
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  protected isJsonMime(mime: string | null | undefined): boolean {
    if (!mime) {
      return false;
    }
    return BaseAPI.jsonRegex.test(mime);
  }

  protected async request(
    context: RequestOpts,
    initOverrides?: RequestInit | InitOverrideFunction
  ): Promise<Response> {
    const { url, init } = await this.createFetchParams(context, initOverrides);
    const response = await this.fetchApi(url, init);
    if (response && response.status >= 200 && response.status < 300) {
      return response;
    }
    // Check if content type is text/plain
    if (response.headers.get("Content-Type")?.includes("text/plain")) {
      const message = await response.text();
      throw new ResponseError(
        response,
        message || "Response returned an error"
      );
    }
    throw new ResponseError(response, "Response returned an error code");
  }

  private async createFetchParams(
    context: RequestOpts,
    initOverrides?: RequestInit | InitOverrideFunction
  ) {
    let url = this.configuration.basePath + context.path;
    if (
      context.query !== undefined &&
      Object.keys(context.query).length !== 0
    ) {
      // only add the querystring to the URL if there are query parameters.
      // this is done to avoid urls ending with a "?" character which buggy webservers
      // do not handle correctly sometimes.
      url += "?" + this.configuration.queryParamsStringify(context.query);
    }

    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      this.configuration.headers,
      context.headers
    );
    Object.keys(headers).forEach((key) =>
      headers[key] === undefined ? delete headers[key] : {}
    );

    const initOverrideFn =
      typeof initOverrides === "function"
        ? initOverrides
        : async () => initOverrides;

    const initParams = {
      method: context.method,
      headers,
      body: context.body,
      credentials: this.configuration.credentials,
    };

    const overriddenInit: RequestInit = {
      ...initParams,
      ...(await initOverrideFn({
        init: initParams,
        context,
      })),
    };

    let body: any;
    if (this.isJsonMime(headers["Content-Type"])) {
      // Add dataSource, database, collection to the body if they are present in the configuration but
      // not in the body
      // if not even in the configuration, then throw an error
      const overriddenInitBody: any = overriddenInit.body || {};
      if (!overriddenInitBody.dataSource) {
        if (this.configuration.dataSource) {
          overriddenInitBody.dataSource = this.configuration.dataSource;
        } else {
          throw new RequiredError("dataSource");
        }
      }
      if (!overriddenInitBody.database) {
        if (this.configuration.database) {
          overriddenInitBody.database = this.configuration.database;
        } else {
          throw new RequiredError("database");
        }
      }
      if (!overriddenInitBody.collection) {
        if (this.configuration.collection) {
          overriddenInitBody.collection = this.configuration.collection;
        } else {
          throw new RequiredError("collection");
        }
      }

      body = JSON.stringify(overriddenInitBody);
    } else {
      body = overriddenInit.body;
    }

    const init: RequestInit = {
      ...overriddenInit,
      body,
    };

    return { url, init };
  }

  private fetchApi = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init };
    for (const middleware of this.middleware) {
      if (middleware.pre) {
        fetchParams =
          (await middleware.pre({
            fetch: this.fetchApi,
            ...fetchParams,
          })) || fetchParams;
      }
    }
    let response: Response | undefined = undefined;
    try {
      response = await (this.configuration.fetchApi || fetch)(
        fetchParams.url,
        fetchParams.init
      );
    } catch (e) {
      for (const middleware of this.middleware) {
        if (middleware.onError) {
          response =
            (await middleware.onError({
              fetch: this.fetchApi,
              url: fetchParams.url,
              init: fetchParams.init,
              error: e,
              response: response ? response.clone() : undefined,
            })) || response;
        }
      }
      if (response === undefined) {
        if (e instanceof Error) {
          throw new FetchError(
            e,
            "The request failed and the interceptors did not return an alternative response"
          );
        } else {
          throw e;
        }
      }
    }
    for (const middleware of this.middleware) {
      if (middleware.post) {
        response =
          (await middleware.post({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            response: response.clone(),
          })) || response;
      }
    }
    return response;
  };

  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  private clone<T extends BaseAPI>(this: T): T {
    const constructor = this.constructor as any;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
}

function isBlob(value: any): value is Blob {
  return typeof Blob !== "undefined" && value instanceof Blob;
}

function isFormData(value: any): value is FormData {
  return typeof FormData !== "undefined" && value instanceof FormData;
}

export class ResponseError extends Error {
  override name: "ResponseError" = "ResponseError";
  constructor(public response: Response, msg?: string) {
    super(msg);
  }
}

export class FetchError extends Error {
  override name: "FetchError" = "FetchError";
  constructor(public cause: Error, msg?: string) {
    super(msg);
  }
}

export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

export type FetchAPI = WindowOrWorkerGlobalScope["fetch"];

export type Json = any;
export type HTTPMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS"
  | "HEAD";
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | Array<string | number | null | boolean>
    | Set<string | number | null | boolean>
    | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = {
  headers?: HTTPHeaders;
  method: HTTPMethod;
  credentials?: RequestCredentials;
  body?: HTTPBody;
};
export type ModelPropertyNaming =
  | "camelCase"
  | "snake_case"
  | "PascalCase"
  | "original";

export type InitOverrideFunction = (requestContext: {
  init: HTTPRequestInit;
  context: RequestOpts;
}) => Promise<RequestInit>;

export interface FetchParams {
  url: string;
  init: RequestInit;
}

export interface RequestOpts {
  path: string;
  method: HTTPMethod;
  headers?: HTTPHeaders;
  query?: HTTPQuery;
  body?: HTTPBody;
}

export function querystring(params: HTTPQuery, prefix: string = ""): string {
  return Object.keys(params)
    .map((key) => querystringSingleKey(key, params[key], prefix))
    .filter((part) => part.length > 0)
    .join("&");
}

function querystringSingleKey(
  key: string,
  value:
    | string
    | number
    | null
    | undefined
    | boolean
    | Array<string | number | null | boolean>
    | Set<string | number | null | boolean>
    | HTTPQuery,
  keyPrefix: string = ""
): string {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value
      .map((singleValue) => encodeURIComponent(String(singleValue)))
      .join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(
      value.toISOString()
    )}`;
  }
  if (value instanceof Object) {
    return querystring(value as HTTPQuery, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
  for (const consume of consumes) {
    if ("multipart/form-data" === consume.contentType) {
      return true;
    }
  }
  return false;
}

export interface Consume {
  contentType: string;
}

export interface RequestContext {
  fetch: FetchAPI;
  url: string;
  init: RequestInit;
}

export interface ResponseContext {
  fetch: FetchAPI;
  url: string;
  init: RequestInit;
  response: Response;
}

export interface ErrorContext {
  fetch: FetchAPI;
  url: string;
  init: RequestInit;
  error: unknown;
  response?: Response;
}

export interface Middleware {
  pre?(context: RequestContext): Promise<FetchParams | void>;
  post?(context: ResponseContext): Promise<Response | void>;
  onError?(context: ErrorContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
  raw: Response;
  value(): Promise<T>;
}

export interface ResponseTransformer<T> {
  (json: any): T;
}

export class JSONApiResponse<T> {
  constructor(
    public raw: Response,
    private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue
  ) {}

  async value(): Promise<T> {
    return this.transformer(await this.raw.json());
  }
}

export class VoidApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<void> {
    return undefined;
  }
}

export class BlobApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<Blob> {
    return await this.raw.blob();
  }
}

export class TextApiResponse {
  constructor(public raw: Response) {}

  async value(): Promise<string> {
    return await this.raw.text();
  }
}
