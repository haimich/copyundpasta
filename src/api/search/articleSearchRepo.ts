require("dotenv").config();
import { Client, ApiResponse } from "@elastic/elasticsearch";

if (process.env.APPBASE_READ_KEY == null || process.env.APPBASE_READ_KEY === "") {
  throw new Error("Missing env variable 'APPBASE_READ_KEY'");
}

const articles = new Client({
  node: `https://${process.env.APPBASE_READ_KEY}@scalr.api.appbase.io`,
});
const index = process.env.APPBASE_INDEX;

export function search(searchTerm: string): Promise<ApiResponse> {
  // @see https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#_search
  return articles.search({
    index,
    q: `title:*${searchTerm}* OR categoryFullName:*${searchTerm} OR ingredients:"* ${searchTerm} *"`,
  })
};
