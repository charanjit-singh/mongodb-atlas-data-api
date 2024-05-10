![NPM Downloads](https://img.shields.io/npm/dm/mongodb-atlas-data-api)
# Mongodb Atlas Data API Client

This library is a wrapper around the Mongodb Atlas Data API. It is designed to make it easier to interact with the API from a Node.js application.

Mongodb atlas data api can be accessed using the following link: [Mongodb Atlas Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/openapi/)

## Installation

```bash
npm install mongodb-atlas-data-api
# Or
pnpm install mongodb-atlas-data-api
# Or
yarn add mongodb-atlas-data-api
```

## Usage

You can specify `dataSource`, `collection`, and `database` in the constructor of the `AtlasApi` class. You can override these values in the method calls as well.

```typescript
import "dotenv/config";
import { AtlasApi } from "mongodb-atlas-data-api";
const atlasApiClient = new AtlasApi({
  basePath: process.env.ATLAS_BASE_PATH,
  auth: {
    type: "apiKey",
    apiKey: process.env.ATLAS_API_KEY as string,
  },
  dataSource: "Cluster0",
  collection: "", // collection name,
  database: "", // database name,
});

const run = async () => {
  const response = await atlasApiClient.find({
    findManyRequestBody: {
      filter: {
        firstName: "test",
      },
    },
  });
  console.log(response);
};

run();
```

## Methods

All functions available in API are available in the client as well. The following methods are available in the client:

- `find`
- `findOne`
- `insertOne`
- `insertMany`
- `updateOne`
- `updateMany`
- `deleteOne`
- `deleteMany`
- `aggregate`

## Options

Explore the [Mongodb Atlas Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/openapi/) to see the options available for each method.

Intellisense is available for the options in the client as well.

# Why use this library?

You can use this library to interact with the Mongodb Atlas Data API from your Node.js application. This library provides a simple interface to interact with the API. 

This can be useful in the following scenarios:

1. NextJs applications for edge runtime data fetching.
2. Serverless applications where you don't want to manage a database connection.
3. Applications where you want to interact with the database without exposing the connection string.
4. [Read Mode](https://www.mongodb.com/docs/atlas/app-services/data-api/)

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

# Author

Created by [Charanjit Singh](https://github.com/charanjit-singh)
