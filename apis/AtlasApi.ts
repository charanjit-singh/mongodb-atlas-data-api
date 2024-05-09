/* tslint:disable */
/* eslint-disable */
/**
 * MongoDB Atlas Data API
 * A fully-managed API to read, write, and aggregate data in MongoDB Atlas. The Data API is powered by serverless Atlas Functions and secured with user authentication and role-based permissions. To learn more about the Data API, see [Atlas Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/).  ## Set Up the Data API  Before you can use the Data API, you must enable and configure it in an Atlas App Services App. The configuration controls how the App\'s users authenticate, authorize requests, and interact with the API.  To learn how to start using the Data API in your App, see [Set up the Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/#set-up-the-data-api).  ## Authenticate Requests  Your Data API configuration in App Services controls how users authenticate their API requests. In most cases, you will use Application authentication, which lets users log in with one of the App\'s authentication providers. Users can either provide their login credentials directly in every request or provide a reusable access token for an authenticated session.  To learn more, see [Authenticate Data API Requests](https://www.mongodb.com/docs/atlas/app-services/data-api/authenticate/).
 *
 * The version of the OpenAPI document: v1
 *
 */

import * as runtime from "../runtime";
import type {
  AggregateRequestBody,
  AggregateResponseBody,
  DeleteMany200Response,
  DeleteMany200Response1,
  DeleteOne200Response,
  DeleteOne200Response1,
  DeleteRequestBody,
  ErrorMissingAuthenticationParameter,
  ErrorNoAuthenticationSpecified,
  ErrorUserNotFound,
  FindManyRequestBody,
  FindManyResponseBody,
  FindOneRequestBody,
  FindOneResponseBody,
  InsertMany200Response,
  InsertMany200Response1,
  InsertManyRequestBody,
  InsertOne200Response,
  InsertOne200Response1,
  InsertOneRequestBody,
  UpdateMany200Response,
  UpdateMany200Response1,
  UpdateOne200Response,
  UpdateOne200Response1,
  UpdateRequestBody,
} from "../models/index";
import {
  AggregateRequestBodyFromJSON,
  AggregateRequestBodyToJSON,
  AggregateResponseBodyFromJSON,
  AggregateResponseBodyToJSON,
  DeleteMany200ResponseFromJSON,
  DeleteMany200ResponseToJSON,
  DeleteMany200Response1FromJSON,
  DeleteMany200Response1ToJSON,
  DeleteOne200ResponseFromJSON,
  DeleteOne200ResponseToJSON,
  DeleteOne200Response1FromJSON,
  DeleteOne200Response1ToJSON,
  DeleteRequestBodyFromJSON,
  DeleteRequestBodyToJSON,
  ErrorMissingAuthenticationParameterFromJSON,
  ErrorMissingAuthenticationParameterToJSON,
  ErrorNoAuthenticationSpecifiedFromJSON,
  ErrorNoAuthenticationSpecifiedToJSON,
  ErrorUserNotFoundFromJSON,
  ErrorUserNotFoundToJSON,
  FindManyRequestBodyFromJSON,
  FindManyRequestBodyToJSON,
  FindManyResponseBodyFromJSON,
  FindManyResponseBodyToJSON,
  FindOneRequestBodyFromJSON,
  FindOneRequestBodyToJSON,
  FindOneResponseBodyFromJSON,
  FindOneResponseBodyToJSON,
  InsertMany200ResponseFromJSON,
  InsertMany200ResponseToJSON,
  InsertMany200Response1FromJSON,
  InsertMany200Response1ToJSON,
  InsertManyRequestBodyFromJSON,
  InsertManyRequestBodyToJSON,
  InsertOne200ResponseFromJSON,
  InsertOne200ResponseToJSON,
  InsertOne200Response1FromJSON,
  InsertOne200Response1ToJSON,
  InsertOneRequestBodyFromJSON,
  InsertOneRequestBodyToJSON,
  UpdateMany200ResponseFromJSON,
  UpdateMany200ResponseToJSON,
  UpdateMany200Response1FromJSON,
  UpdateMany200Response1ToJSON,
  UpdateOne200ResponseFromJSON,
  UpdateOne200ResponseToJSON,
  UpdateOne200Response1FromJSON,
  UpdateOne200Response1ToJSON,
  UpdateRequestBodyFromJSON,
  UpdateRequestBodyToJSON,
} from "../models/index";

export interface AggregateRequest {
  aggregateRequestBody?: AggregateRequestBody;
}

export interface DeleteManyRequest {
  deleteRequestBody?: DeleteRequestBody;
}

export interface DeleteOneRequest {
  deleteRequestBody?: DeleteRequestBody;
}

export interface FindRequest {
  findManyRequestBody?: FindManyRequestBody;
}

export interface FindOneRequest {
  findOneRequestBody?: FindOneRequestBody;
}

export interface InsertManyRequest {
  insertManyRequestBody?: InsertManyRequestBody;
}

export interface InsertOneRequest {
  insertOneRequestBody?: InsertOneRequestBody;
}

export interface UpdateManyRequest {
  updateRequestBody?: UpdateRequestBody;
}

export interface UpdateOneRequest {
  updateRequestBody?: UpdateRequestBody;
}

/**
 *
 */
export class AtlasApi extends runtime.BaseAPI {
  /**
   * Run an aggregation pipeline.
   * Aggregate Documents
   */
  constructor(configurationParameters: runtime.ConfigurationParameters = {}) {
    const configuration = new runtime.Configuration(configurationParameters);
    super(configuration);
  }
  async aggregateRaw(
    requestParameters: AggregateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AggregateResponseBody>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/aggregate`,
        method: "POST",

        query: queryParameters,
        body: AggregateRequestBodyToJSON(
          requestParameters["aggregateRequestBody"]
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AggregateResponseBodyFromJSON(jsonValue)
    );
  }

  /**
   * Run an aggregation pipeline.
   * Aggregate Documents
   */
  async aggregate(
    requestParameters: AggregateRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AggregateResponseBody> {
    const response = await this.aggregateRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Delete multiple documents that match a query.
   * Delete Documents
   */
  async deleteManyRaw(
    requestParameters: DeleteManyRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<DeleteMany200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/deleteMany`,
        method: "POST",

        query: queryParameters,
        body: DeleteRequestBodyToJSON(requestParameters["deleteRequestBody"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteMany200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete multiple documents that match a query.
   * Delete Documents
   */
  async deleteMany(
    requestParameters: DeleteManyRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<DeleteMany200Response> {
    const response = await this.deleteManyRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Delete a single document that matches a query.
   * Delete One Document
   */
  async deleteOneRaw(
    requestParameters: DeleteOneRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<DeleteOne200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/deleteOne`,
        method: "POST",
        query: queryParameters,
        body: DeleteRequestBodyToJSON(requestParameters["deleteRequestBody"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DeleteOne200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Delete a single document that matches a query.
   * Delete One Document
   */
  async deleteOne(
    requestParameters: DeleteOneRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<DeleteOne200Response> {
    const response = await this.deleteOneRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Find multiple documents that match a query.
   * Find Documents
   */
  async findRaw(
    requestParameters: FindRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FindManyResponseBody>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/find`,
        method: "POST",

        query: queryParameters,
        body: FindManyRequestBodyToJSON(
          requestParameters["findManyRequestBody"]
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FindManyResponseBodyFromJSON(jsonValue)
    );
  }

  /**
   * Find multiple documents that match a query.
   * Find Documents
   */
  async find(
    requestParameters: FindRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FindManyResponseBody> {
    const response = await this.findRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Find a single document that matches a query.
   * Find One Document
   */
  async findOneRaw(
    requestParameters: FindOneRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FindOneResponseBody>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/findOne`,
        method: "POST",

        query: queryParameters,
        body: FindOneRequestBodyToJSON(requestParameters["findOneRequestBody"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      FindOneResponseBodyFromJSON(jsonValue)
    );
  }

  /**
   * Find a single document that matches a query.
   * Find One Document
   */
  async findOne(
    requestParameters: FindOneRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FindOneResponseBody> {
    const response = await this.findOneRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Insert multiple documents into a collection.
   * Insert Documents
   */
  async insertManyRaw(
    requestParameters: InsertManyRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<InsertMany200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/insertMany`,
        method: "POST",

        query: queryParameters,
        body: InsertManyRequestBodyToJSON(
          requestParameters["insertManyRequestBody"]
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InsertMany200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Insert multiple documents into a collection.
   * Insert Documents
   */
  async insertMany(
    requestParameters: InsertManyRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<InsertMany200Response> {
    const response = await this.insertManyRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Insert a single document into a collection.
   * Insert One Document
   */
  async insertOneRaw(
    requestParameters: InsertOneRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<InsertOne200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/insertOne`,
        method: "POST",

        query: queryParameters,
        body: InsertOneRequestBodyToJSON(
          requestParameters["insertOneRequestBody"]
        ),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InsertOne200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Insert a single document into a collection.
   * Insert One Document
   */
  async insertOne(
    requestParameters: InsertOneRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<InsertOne200Response> {
    const response = await this.insertOneRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Update multiple documents in a collection.
   * Update Documents
   */
  async updateManyRaw(
    requestParameters: UpdateManyRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UpdateMany200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/updateMany`,
        method: "POST",

        query: queryParameters,
        body: UpdateRequestBodyToJSON(requestParameters["updateRequestBody"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateMany200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update multiple documents in a collection.
   * Update Documents
   */
  async updateMany(
    requestParameters: UpdateManyRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UpdateMany200Response> {
    const response = await this.updateManyRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Update a single document in a collection.
   * Update One Document
   */
  async updateOneRaw(
    requestParameters: UpdateOneRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UpdateOne200Response>> {
    const queryParameters: any = {};

    const response = await this.request(
      {
        path: `/action/updateOne`,
        method: "POST",
        query: queryParameters,
        body: UpdateRequestBodyToJSON(requestParameters["updateRequestBody"]),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpdateOne200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * Update a single document in a collection.
   * Update One Document
   */
  async updateOne(
    requestParameters: UpdateOneRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UpdateOne200Response> {
    const response = await this.updateOneRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
