# .DefaultApi

All URIs are relative to *https://data.mongodb-api.com/app/your-app-id/endpoint/data/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregate**](DefaultApi.md#aggregate) | **POST** /action/aggregate | Aggregate Documents
[**deleteMany**](DefaultApi.md#deleteMany) | **POST** /action/deleteMany | Delete Documents
[**deleteOne**](DefaultApi.md#deleteOne) | **POST** /action/deleteOne | Delete One Document
[**find**](DefaultApi.md#find) | **POST** /action/find | Find Documents
[**findOne**](DefaultApi.md#findOne) | **POST** /action/findOne | Find One Document
[**insertMany**](DefaultApi.md#insertMany) | **POST** /action/insertMany | Insert Documents
[**insertOne**](DefaultApi.md#insertOne) | **POST** /action/insertOne | Insert One Document
[**updateMany**](DefaultApi.md#updateMany) | **POST** /action/updateMany | Update Documents
[**updateOne**](DefaultApi.md#updateOne) | **POST** /action/updateOne | Update One Document


# **aggregate**
> AggregateResponseBody aggregate()

Run an aggregation pipeline.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiAggregateRequest = {
  // AggregateRequestBody (optional)
  aggregateRequestBody: null,
};

apiInstance.aggregate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aggregateRequestBody** | **AggregateRequestBody**|  |


### Return type

**AggregateResponseBody**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMany**
> DeleteMany200Response deleteMany()

Delete multiple documents that match a query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteManyRequest = {
  // DeleteRequestBody (optional)
  deleteRequestBody: null,
};

apiInstance.deleteMany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteRequestBody** | **DeleteRequestBody**|  |


### Return type

**DeleteMany200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOne**
> DeleteOne200Response deleteOne()

Delete a single document that matches a query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteOneRequest = {
  // DeleteRequestBody (optional)
  deleteRequestBody: null,
};

apiInstance.deleteOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteRequestBody** | **DeleteRequestBody**|  |


### Return type

**DeleteOne200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **find**
> FindManyResponseBody find()

Find multiple documents that match a query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiFindRequest = {
  // FindManyRequestBody (optional)
  findManyRequestBody: null,
};

apiInstance.find(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findManyRequestBody** | **FindManyRequestBody**|  |


### Return type

**FindManyResponseBody**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Found |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findOne**
> FindOneResponseBody findOne()

Find a single document that matches a query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiFindOneRequest = {
  // FindOneRequestBody (optional)
  findOneRequestBody: null,
};

apiInstance.findOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findOneRequestBody** | **FindOneRequestBody**|  |


### Return type

**FindOneResponseBody**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Found |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **insertMany**
> InsertMany200Response insertMany()

Insert multiple documents into a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiInsertManyRequest = {
  // InsertManyRequestBody (optional)
  insertManyRequestBody: null,
};

apiInstance.insertMany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insertManyRequestBody** | **InsertManyRequestBody**|  |


### Return type

**InsertMany200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inserted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **insertOne**
> InsertOne200Response insertOne()

Insert a single document into a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiInsertOneRequest = {
  // InsertOneRequestBody (optional)
  insertOneRequestBody: null,
};

apiInstance.insertOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **insertOneRequestBody** | **InsertOneRequestBody**|  |


### Return type

**InsertOne200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inserted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMany**
> UpdateMany200Response updateMany()

Update multiple documents in a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateManyRequest = {
  // UpdateRequestBody (optional)
  updateRequestBody: null,
};

apiInstance.updateMany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRequestBody** | **UpdateRequestBody**|  |


### Return type

**UpdateMany200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOne**
> UpdateOne200Response updateOne()

Update a single document in a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateOneRequest = {
  // UpdateRequestBody (optional)
  updateRequestBody: null,
};

apiInstance.updateOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRequestBody** | **UpdateRequestBody**|  |


### Return type

**UpdateOne200Response**

### Authorization

[Email](README.md#Email), [ApiKey](README.md#ApiKey), [AccessToken](README.md#AccessToken), [CustomJwt](README.md#CustomJwt), [Password](README.md#Password)

### HTTP request headers

 - **Content-Type**: application/json, application/ejson
 - **Accept**: application/json, application/ejson


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


