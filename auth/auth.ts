import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class AccessTokenAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "AccessToken";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class EmailAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "Email";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("email", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class PasswordAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "Password";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("password", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class ApiKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "ApiKey";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("apiKey", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class CustomJwtAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "CustomJwt";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("jwtTokenString", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "AccessToken"?: SecurityAuthentication,
    "Email"?: SecurityAuthentication,
    "Password"?: SecurityAuthentication,
    "ApiKey"?: SecurityAuthentication,
    "CustomJwt"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "AccessToken"?: ApiKeyConfiguration,
    "Email"?: ApiKeyConfiguration,
    "Password"?: ApiKeyConfiguration,
    "ApiKey"?: ApiKeyConfiguration,
    "CustomJwt"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["AccessToken"]) {
        authMethods["AccessToken"] = new AccessTokenAuthentication(
            config["AccessToken"]
        );
    }

    if (config["Email"]) {
        authMethods["Email"] = new EmailAuthentication(
            config["Email"]
        );
    }

    if (config["Password"]) {
        authMethods["Password"] = new PasswordAuthentication(
            config["Password"]
        );
    }

    if (config["ApiKey"]) {
        authMethods["ApiKey"] = new ApiKeyAuthentication(
            config["ApiKey"]
        );
    }

    if (config["CustomJwt"]) {
        authMethods["CustomJwt"] = new CustomJwtAuthentication(
            config["CustomJwt"]
        );
    }

    return authMethods;
}