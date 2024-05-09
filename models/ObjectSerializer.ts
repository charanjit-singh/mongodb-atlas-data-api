export * from '../models/AggregateRequestBody';
export * from '../models/AggregateResponseBody';
export * from '../models/DeleteMany200Response';
export * from '../models/DeleteMany200Response1';
export * from '../models/DeleteOne200Response';
export * from '../models/DeleteOne200Response1';
export * from '../models/DeleteRequestBody';
export * from '../models/DeleteResponseBody';
export * from '../models/ErrorMissingAuthenticationParameter';
export * from '../models/ErrorNoAuthenticationSpecified';
export * from '../models/ErrorUserNotFound';
export * from '../models/Filter';
export * from '../models/FindManyRequestBody';
export * from '../models/FindManyResponseBody';
export * from '../models/FindOneRequestBody';
export * from '../models/FindOneResponseBody';
export * from '../models/InsertMany200Response';
export * from '../models/InsertMany200Response1';
export * from '../models/InsertManyRequestBody';
export * from '../models/InsertManyResponseBody';
export * from '../models/InsertOne200Response';
export * from '../models/InsertOne200Response1';
export * from '../models/InsertOneRequestBody';
export * from '../models/InsertOneResponseBody';
export * from '../models/Limit';
export * from '../models/ModelError';
export * from '../models/Namespace';
export * from '../models/Projection';
export * from '../models/Skip';
export * from '../models/Sort';
export * from '../models/UpdateMany200Response';
export * from '../models/UpdateMany200Response1';
export * from '../models/UpdateOne200Response';
export * from '../models/UpdateOne200Response1';
export * from '../models/UpdateRequestBody';
export * from '../models/UpdateResponseBody';

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

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "AggregateRequestBody": AggregateRequestBody,
    "AggregateResponseBody": AggregateResponseBody,
    "DeleteMany200Response": DeleteMany200Response,
    "DeleteMany200Response1": DeleteMany200Response1,
    "DeleteOne200Response": DeleteOne200Response,
    "DeleteOne200Response1": DeleteOne200Response1,
    "DeleteRequestBody": DeleteRequestBody,
    "DeleteResponseBody": DeleteResponseBody,
    "ErrorMissingAuthenticationParameter": ErrorMissingAuthenticationParameter,
    "ErrorNoAuthenticationSpecified": ErrorNoAuthenticationSpecified,
    "ErrorUserNotFound": ErrorUserNotFound,
    "Filter": Filter,
    "FindManyRequestBody": FindManyRequestBody,
    "FindManyResponseBody": FindManyResponseBody,
    "FindOneRequestBody": FindOneRequestBody,
    "FindOneResponseBody": FindOneResponseBody,
    "InsertMany200Response": InsertMany200Response,
    "InsertMany200Response1": InsertMany200Response1,
    "InsertManyRequestBody": InsertManyRequestBody,
    "InsertManyResponseBody": InsertManyResponseBody,
    "InsertOne200Response": InsertOne200Response,
    "InsertOne200Response1": InsertOne200Response1,
    "InsertOneRequestBody": InsertOneRequestBody,
    "InsertOneResponseBody": InsertOneResponseBody,
    "Limit": Limit,
    "ModelError": ModelError,
    "Namespace": Namespace,
    "Projection": Projection,
    "Skip": Skip,
    "Sort": Sort,
    "UpdateMany200Response": UpdateMany200Response,
    "UpdateMany200Response1": UpdateMany200Response1,
    "UpdateOne200Response": UpdateOne200Response,
    "UpdateOne200Response1": UpdateOne200Response1,
    "UpdateRequestBody": UpdateRequestBody,
    "UpdateResponseBody": UpdateResponseBody,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
