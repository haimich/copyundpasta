require("dotenv").config();
import { Client, ApiResponse } from "@elastic/elasticsearch";

if (process.env.APPBASE_READ_KEY == null || process.env.APPBASE_READ_KEY === "") {
    throw new Error("Missing env variable 'APPBASE_READ_KEY'");
}

const articles = new Client({
    node: `https://${process.env.APPBASE_READ_KEY}@scalr.api.appbase.io`,
});

export function search(searchTerm: string): Promise<ApiResponse> {
  return articles.search({
      index: "cup-articles",
      body: {
          query: {
              "match": {
                  "title": searchTerm
              }
          }
      }
  })
};
