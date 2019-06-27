require("dotenv").config();
const { Client: Client7 } = require('@elastic/elasticsearch');

if (process.env.APPBASE_WRITE_KEY_ARTICLES == null || process.env.APPBASE_WRITE_KEY_ARTICLES === "") {
  throw new Error("Missing env variable 'APPBASE_WRITE_KEY_ARTICLES'");
}

export const elasticArticles = new Client7({
  node: `https://${process.env.APPBASE_WRITE_KEY_ARTICLES}@scalr.api.appbase.io`,
});