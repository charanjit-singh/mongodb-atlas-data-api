import { RequestContext, HttpMethod } from "./http/http";

export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}

/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export class ServerConfiguration<T extends { [key: string]: string }> implements BaseServerConfiguration {
    public constructor(private url: string, private variableConfiguration: T) {}

    /**
     * Sets the value of the variables of this server. Variables are included in 
     * the `url` of this ServerConfiguration in the form `{variableName}`
     *
     * @param variableConfiguration a partial variable configuration for the 
     * variables contained in the url
     */
    public setVariables(variableConfiguration: Partial<T>) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }

    public getConfiguration(): T {
        return this.variableConfiguration
    }

    private getUrl() {
        let replacedUrl = this.url;
        for (const key in this.variableConfiguration) {
            var re = new RegExp("{" + key + "}","g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl
    }

    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
    public makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext {
        return new RequestContext(this.getUrl() + endpoint, httpMethod);
    }
}

export const server1 = new ServerConfiguration<{  "appId": string  }>("https://data.mongodb-api.com/app/{appId}/endpoint/data/v1", {  "appId": "your-app-id"  })
export const server2 = new ServerConfiguration<{  "appId": string,  "region": "us-east-1.aws" | "us-east-2.aws" | "us-west-2.aws" | "eu-central-1.aws" | "eu-west-1.aws" | "eu-west-2.aws" | "ap-southeast-1.aws" | "ap-southeast-2.aws" | "ap-south-1.aws" | "sa-east-1.aws" | "eastus2.azure" | "westus.azure" | "westeurope.azure" | "eastasia.azure" | "southeastasia.azure" | "us-central1.gcp" | "us-east4.gcp" | "us-west1.gcp" | "europe-west1.gcp" | "asia-south1.gcp"  }>("https://{region}.data.mongodb-api.com/app/{appId}/endpoint/data/v1", {  "appId": "your-app-id" , "region": "us-east-1.aws"  })

export const servers = [server1, server2];
