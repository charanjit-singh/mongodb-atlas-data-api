import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param aggregateRequestBody 
     */
    public aggregateWithHttpInfo(aggregateRequestBody?: AggregateRequestBody, _options?: Configuration): Observable<HttpInfo<AggregateResponseBody>> {
        const requestContextPromise = this.requestFactory.aggregate(aggregateRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aggregateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run an aggregation pipeline.
     * Aggregate Documents
     * @param aggregateRequestBody 
     */
    public aggregate(aggregateRequestBody?: AggregateRequestBody, _options?: Configuration): Observable<AggregateResponseBody> {
        return this.aggregateWithHttpInfo(aggregateRequestBody, _options).pipe(map((apiResponse: HttpInfo<AggregateResponseBody>) => apiResponse.data));
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param deleteRequestBody 
     */
    public deleteManyWithHttpInfo(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Observable<HttpInfo<DeleteMany200Response>> {
        const requestContextPromise = this.requestFactory.deleteMany(deleteRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteManyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete multiple documents that match a query.
     * Delete Documents
     * @param deleteRequestBody 
     */
    public deleteMany(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Observable<DeleteMany200Response> {
        return this.deleteManyWithHttpInfo(deleteRequestBody, _options).pipe(map((apiResponse: HttpInfo<DeleteMany200Response>) => apiResponse.data));
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param deleteRequestBody 
     */
    public deleteOneWithHttpInfo(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Observable<HttpInfo<DeleteOne200Response>> {
        const requestContextPromise = this.requestFactory.deleteOne(deleteRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single document that matches a query.
     * Delete One Document
     * @param deleteRequestBody 
     */
    public deleteOne(deleteRequestBody?: DeleteRequestBody, _options?: Configuration): Observable<DeleteOne200Response> {
        return this.deleteOneWithHttpInfo(deleteRequestBody, _options).pipe(map((apiResponse: HttpInfo<DeleteOne200Response>) => apiResponse.data));
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param findManyRequestBody 
     */
    public findWithHttpInfo(findManyRequestBody?: FindManyRequestBody, _options?: Configuration): Observable<HttpInfo<FindManyResponseBody>> {
        const requestContextPromise = this.requestFactory.find(findManyRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find multiple documents that match a query.
     * Find Documents
     * @param findManyRequestBody 
     */
    public find(findManyRequestBody?: FindManyRequestBody, _options?: Configuration): Observable<FindManyResponseBody> {
        return this.findWithHttpInfo(findManyRequestBody, _options).pipe(map((apiResponse: HttpInfo<FindManyResponseBody>) => apiResponse.data));
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param findOneRequestBody 
     */
    public findOneWithHttpInfo(findOneRequestBody?: FindOneRequestBody, _options?: Configuration): Observable<HttpInfo<FindOneResponseBody>> {
        const requestContextPromise = this.requestFactory.findOne(findOneRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find a single document that matches a query.
     * Find One Document
     * @param findOneRequestBody 
     */
    public findOne(findOneRequestBody?: FindOneRequestBody, _options?: Configuration): Observable<FindOneResponseBody> {
        return this.findOneWithHttpInfo(findOneRequestBody, _options).pipe(map((apiResponse: HttpInfo<FindOneResponseBody>) => apiResponse.data));
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param insertManyRequestBody 
     */
    public insertManyWithHttpInfo(insertManyRequestBody?: InsertManyRequestBody, _options?: Configuration): Observable<HttpInfo<InsertMany200Response>> {
        const requestContextPromise = this.requestFactory.insertMany(insertManyRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.insertManyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Insert multiple documents into a collection.
     * Insert Documents
     * @param insertManyRequestBody 
     */
    public insertMany(insertManyRequestBody?: InsertManyRequestBody, _options?: Configuration): Observable<InsertMany200Response> {
        return this.insertManyWithHttpInfo(insertManyRequestBody, _options).pipe(map((apiResponse: HttpInfo<InsertMany200Response>) => apiResponse.data));
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param insertOneRequestBody 
     */
    public insertOneWithHttpInfo(insertOneRequestBody?: InsertOneRequestBody, _options?: Configuration): Observable<HttpInfo<InsertOne200Response>> {
        const requestContextPromise = this.requestFactory.insertOne(insertOneRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.insertOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Insert a single document into a collection.
     * Insert One Document
     * @param insertOneRequestBody 
     */
    public insertOne(insertOneRequestBody?: InsertOneRequestBody, _options?: Configuration): Observable<InsertOne200Response> {
        return this.insertOneWithHttpInfo(insertOneRequestBody, _options).pipe(map((apiResponse: HttpInfo<InsertOne200Response>) => apiResponse.data));
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param updateRequestBody 
     */
    public updateManyWithHttpInfo(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Observable<HttpInfo<UpdateMany200Response>> {
        const requestContextPromise = this.requestFactory.updateMany(updateRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateManyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update multiple documents in a collection.
     * Update Documents
     * @param updateRequestBody 
     */
    public updateMany(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Observable<UpdateMany200Response> {
        return this.updateManyWithHttpInfo(updateRequestBody, _options).pipe(map((apiResponse: HttpInfo<UpdateMany200Response>) => apiResponse.data));
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param updateRequestBody 
     */
    public updateOneWithHttpInfo(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Observable<HttpInfo<UpdateOne200Response>> {
        const requestContextPromise = this.requestFactory.updateOne(updateRequestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a single document in a collection.
     * Update One Document
     * @param updateRequestBody 
     */
    public updateOne(updateRequestBody?: UpdateRequestBody, _options?: Configuration): Observable<UpdateOne200Response> {
        return this.updateOneWithHttpInfo(updateRequestBody, _options).pipe(map((apiResponse: HttpInfo<UpdateOne200Response>) => apiResponse.data));
    }

}
