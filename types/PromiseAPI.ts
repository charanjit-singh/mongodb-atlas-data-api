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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param aggregateRequestBody 
     */
    public aggregateWithHttpInfo(aggregateRequestBody?: AggregateRequestBody, _options?: Configuration): Promise<HttpInfo<AggregateResponseBody>> {
        const result = this.api.aggregateWithHttpInfo(aggregateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param aggregateRequestBody 
     */
    public aggregate(aggregateRequestBody?: AggregateRequestBody, _options?: Configuration): Promise<AggregateResponseBody> {
        const result = this.api.aggregate(aggregateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param deleteRequestBody 
     */
    public deleteManyWithHttpInfo(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Promise<HttpInfo<DeleteMany200Response>> {
        const result = this.api.deleteManyWithHttpInfo(deleteRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param deleteRequestBody 
     */
    public deleteMany(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Promise<DeleteMany200Response> {
        const result = this.api.deleteMany(deleteRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param deleteRequestBody 
     */
    public deleteOneWithHttpInfo(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Promise<HttpInfo<DeleteOne200Response>> {
        const result = this.api.deleteOneWithHttpInfo(deleteRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param deleteRequestBody 
     */
    public deleteOne(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Promise<DeleteOne200Response> {
        const result = this.api.deleteOne(deleteRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param findManyRequestBody 
     */
    public findWithHttpInfo(findManyRequestBody?: FindManyRequestBody, _options?: Configuration): Promise<HttpInfo<FindManyResponseBody>> {
        const result = this.api.findWithHttpInfo(findManyRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param findManyRequestBody 
     */
    public find(findManyRequestBody?: FindManyRequestBody, _options?: Configuration): Promise<FindManyResponseBody> {
        const result = this.api.find(findManyRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param findOneRequestBody 
     */
    public findOneWithHttpInfo(findOneRequestBody?: FindOneRequestBody, _options?: Configuration): Promise<HttpInfo<FindOneResponseBody>> {
        const result = this.api.findOneWithHttpInfo(findOneRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param findOneRequestBody 
     */
    public findOne(findOneRequestBody?: FindOneRequestBody, _options?: Configuration): Promise<FindOneResponseBody> {
        const result = this.api.findOne(findOneRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param insertManyRequestBody 
     */
    public insertManyWithHttpInfo(insertManyRequestBody?: InsertManyRequestBody, _options?: Configuration): Promise<HttpInfo<InsertMany200Response>> {
        const result = this.api.insertManyWithHttpInfo(insertManyRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param insertManyRequestBody 
     */
    public insertMany(insertManyRequestBody?: InsertManyRequestBody, _options?: Configuration): Promise<InsertMany200Response> {
        const result = this.api.insertMany(insertManyRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param insertOneRequestBody 
     */
    public insertOneWithHttpInfo(insertOneRequestBody?: InsertOneRequestBody, _options?: Configuration): Promise<HttpInfo<InsertOne200Response>> {
        const result = this.api.insertOneWithHttpInfo(insertOneRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param insertOneRequestBody 
     */
    public insertOne(insertOneRequestBody?: InsertOneRequestBody, _options?: Configuration): Promise<InsertOne200Response> {
        const result = this.api.insertOne(insertOneRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param updateRequestBody 
     */
    public updateManyWithHttpInfo(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Promise<HttpInfo<UpdateMany200Response>> {
        const result = this.api.updateManyWithHttpInfo(updateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param updateRequestBody 
     */
    public updateMany(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Promise<UpdateMany200Response> {
        const result = this.api.updateMany(updateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param updateRequestBody 
     */
    public updateOneWithHttpInfo(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Promise<HttpInfo<UpdateOne200Response>> {
        const result = this.api.updateOneWithHttpInfo(updateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param updateRequestBody 
     */
    public updateOne(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Promise<UpdateOne200Response> {
        const result = this.api.updateOne(updateRequestBody, _options);
        return result.toPromise();
    }


}



