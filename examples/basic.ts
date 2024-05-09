import "dotenv/config";
import { AtlasApi } from "../apis/AtlasApi";
const atlasApiClient = new AtlasApi({
  basePath: process.env.ATLAS_BASE_PATH,
  auth: {
    type: "apiKey",
    apiKey: process.env.ATLAS_API_KEY as string,
  },
  dataSource: "Cluster0",
  collection: "User",
  database: "eSahayak",
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
