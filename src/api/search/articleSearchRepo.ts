require("dotenv").config();
import { Client, ApiResponse } from "@elastic/elasticsearch";

if (process.env.APPBASE_READ_KEY_ARTICLES == null || process.env.APPBASE_READ_KEY_ARTICLES === "") {
    throw new Error("Missing env variable 'APPBASE_READ_KEY_ARTICLES'");
}

const articles = new Client({
    node: `https://${process.env.APPBASE_READ_KEY_ARTICLES}@scalr.api.appbase.io`,
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
