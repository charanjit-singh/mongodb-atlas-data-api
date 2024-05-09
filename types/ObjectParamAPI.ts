import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AggregateRequestBody } from '../models/AggregateRequestBody';
import { AggregateResponseBody } from '../models/AggregateResponseBody';
import { DeleteMany200Response } from '../models/DeleteMany200Response';
import { DeleteMany200Response1 } from '../models/DeleteMany200Response1';
import { DeleteOne200Response } from '../models/DeleteOne200Response';
import { DeleteOne200Response1 } from '../models/DeleteOne200Response1';
import { DeleteRequestBody } from '../models/DeleteRequestBody';
import { DeleteResponseBody } from '../models/DeleteResponseBody';
import { ErrorMissingAuthenticationParameter } from '../models/ErrorMissingAuthenticationParameter';
import { ErrorNoAuthenticationSpecified } from '../models/ErrorNoAuthenticationSpecified';
import { ErrorUserNotFound } from '../models/ErrorUserNotFound';
import { Filter } from '../models/Filter';
import { FindManyRequestBody } from '../models/FindManyRequestBody';
import { FindManyResponseBody } from '../models/FindManyResponseBody';
import { FindOneRequestBody } from '../models/FindOneRequestBody';
import { FindOneResponseBody } from '../models/FindOneResponseBody';
import { InsertMany200Response } from '../models/InsertMany200Response';
import { InsertMany200Response1 } from '../models/InsertMany200Response1';
import { InsertManyRequestBody } from '../models/InsertManyRequestBody';
import { InsertManyResponseBody } from '../models/InsertManyResponseBody';
import { InsertOne200Response } from '../models/InsertOne200Response';
import { InsertOne200Response1 } from '../models/InsertOne200Response1';
import { InsertOneRequestBody } from '../models/InsertOneRequestBody';
import { InsertOneResponseBody } from '../models/InsertOneResponseBody';
import { Limit } from '../models/Limit';
import { ModelError } from '../models/ModelError';
import { Namespace } from '../models/Namespace';
import { Projection } from '../models/Projection';
import { Skip } from '../models/Skip';
import { Sort } from '../models/Sort';
import { UpdateMany200Response } from '../models/UpdateMany200Response';
import { UpdateMany200Response1 } from '../models/UpdateMany200Response1';
import { UpdateOne200Response } from '../models/UpdateOne200Response';
import { UpdateOne200Response1 } from '../models/UpdateOne200Response1';
import { UpdateRequestBody } from '../models/UpdateRequestBody';
import { UpdateResponseBody } from '../models/UpdateResponseBody';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAggregateRequest {
    /**
     * 
     * @type AggregateRequestBody
     * @memberof DefaultApiaggregate
     */
    aggregateRequestBody?: AggregateRequestBody
}

export interface DefaultApiDeleteManyRequest {
    /**
     * 
     * @type DeleteRequestBody
     * @memberof DefaultApideleteMany
     */
    deleteRequestBody?: DeleteRequestBody
}

export interface DefaultApiDeleteOneRequest {
    /**
     * 
     * @type DeleteRequestBody
     * @memberof DefaultApideleteOne
     */
    deleteRequestBody?: DeleteRequestBody
}

export interface DefaultApiFindRequest {
    /**
     * 
     * @type FindManyRequestBody
     * @memberof DefaultApifind
     */
    findManyRequestBody?: FindManyRequestBody
}

export interface DefaultApiFindOneRequest {
    /**
     * 
     * @type FindOneRequestBody
     * @memberof DefaultApifindOne
     */
    findOneRequestBody?: FindOneRequestBody
}

export interface DefaultApiInsertManyRequest {
    /**
     * 
     * @type InsertManyRequestBody
     * @memberof DefaultApiinsertMany
     */
    insertManyRequestBody?: InsertManyRequestBody
}

export interface DefaultApiInsertOneRequest {
    /**
     * 
     * @type InsertOneRequestBody
     * @memberof DefaultApiinsertOne
     */
    insertOneRequestBody?: InsertOneRequestBody
}

export interface DefaultApiUpdateManyRequest {
    /**
     * 
     * @type UpdateRequestBody
     * @memberof DefaultApiupdateMany
     */
    updateRequestBody?: UpdateRequestBody
}

export interface DefaultApiUpdateOneRequest {
    /**
     * 
     * @type UpdateRequestBody
     * @memberof DefaultApiupdateOne
     */
    updateRequestBody?: UpdateRequestBody
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param param the request object
     */
    public aggregateWithHttpInfo(param: DefaultApiAggregateRequest = {}, options?: Configuration): Promise<HttpInfo<AggregateResponseBody>> {
        return this.api.aggregateWithHttpInfo(param.aggregateRequestBody,  options).toPromise();
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param param the request object
     */
    public aggregate(param: DefaultApiAggregateRequest = {}, options?: Configuration): Promise<AggregateResponseBody> {
        return this.api.aggregate(param.aggregateRequestBody,  options).toPromise();
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param param the request object
     */
    public deleteManyWithHttpInfo(param: DefaultApiDeleteManyRequest = {}, options?: Configuration): Promise<HttpInfo<DeleteMany200Response>> {
        return this.api.deleteManyWithHttpInfo(param.deleteRequestBody,  options).toPromise();
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param param the request object
     */
    public deleteMany(param: DefaultApiDeleteManyRequest = {}, options?: Configuration): Promise<DeleteMany200Response> {
        return this.api.deleteMany(param.deleteRequestBody,  options).toPromise();
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param param the request object
     */
    public deleteOneWithHttpInfo(param: DefaultApiDeleteOneRequest = {}, options?: Configuration): Promise<HttpInfo<DeleteOne200Response>> {
        return this.api.deleteOneWithHttpInfo(param.deleteRequestBody,  options).toPromise();
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param param the request object
     */
    public deleteOne(param: DefaultApiDeleteOneRequest = {}, options?: Configuration): Promise<DeleteOne200Response> {
        return this.api.deleteOne(param.deleteRequestBody,  options).toPromise();
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param param the request object
     */
    public findWithHttpInfo(param: DefaultApiFindRequest = {}, options?: Configuration): Promise<HttpInfo<FindManyResponseBody>> {
        return this.api.findWithHttpInfo(param.findManyRequestBody,  options).toPromise();
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param param the request object
     */
    public find(param: DefaultApiFindRequest = {}, options?: Configuration): Promise<FindManyResponseBody> {
        return this.api.find(param.findManyRequestBody,  options).toPromise();
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param param the request object
     */
    public findOneWithHttpInfo(param: DefaultApiFindOneRequest = {}, options?: Configuration): Promise<HttpInfo<FindOneResponseBody>> {
        return this.api.findOneWithHttpInfo(param.findOneRequestBody,  options).toPromise();
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param param the request object
     */
    public findOne(param: DefaultApiFindOneRequest = {}, options?: Configuration): Promise<FindOneResponseBody> {
        return this.api.findOne(param.findOneRequestBody,  options).toPromise();
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param param the request object
     */
    public insertManyWithHttpInfo(param: DefaultApiInsertManyRequest = {}, options?: Configuration): Promise<HttpInfo<InsertMany200Response>> {
        return this.api.insertManyWithHttpInfo(param.insertManyRequestBody,  options).toPromise();
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param param the request object
     */
    public insertMany(param: DefaultApiInsertManyRequest = {}, options?: Configuration): Promise<InsertMany200Response> {
        return this.api.insertMany(param.insertManyRequestBody,  options).toPromise();
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param param the request object
     */
    public insertOneWithHttpInfo(param: DefaultApiInsertOneRequest = {}, options?: Configuration): Promise<HttpInfo<InsertOne200Response>> {
        return this.api.insertOneWithHttpInfo(param.insertOneRequestBody,  options).toPromise();
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param param the request object
     */
    public insertOne(param: DefaultApiInsertOneRequest = {}, options?: Configuration): Promise<InsertOne200Response> {
        return this.api.insertOne(param.insertOneRequestBody,  options).toPromise();
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param param the request object
     */
    public updateManyWithHttpInfo(param: DefaultApiUpdateManyRequest = {}, options?: Configuration): Promise<HttpInfo<UpdateMany200Response>> {
        return this.api.updateManyWithHttpInfo(param.updateRequestBody,  options).toPromise();
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param param the request object
     */
    public updateMany(param: DefaultApiUpdateManyRequest = {}, options?: Configuration): Promise<UpdateMany200Response> {
        return this.api.updateMany(param.updateRequestBody,  options).toPromise();
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param param the request object
     */
    public updateOneWithHttpInfo(param: DefaultApiUpdateOneRequest = {}, options?: Configuration): Promise<HttpInfo<UpdateOne200Response>> {
        return this.api.updateOneWithHttpInfo(param.updateRequestBody,  options).toPromise();
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param param the request object
     */
    public updateOne(param: DefaultApiUpdateOneRequest = {}, options?: Configuration): Promise<UpdateOne200Response> {
        return this.api.updateOne(param.updateRequestBody,  options).toPromise();
    }

}
