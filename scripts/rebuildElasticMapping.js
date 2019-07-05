require("dotenv").config();
let axios = require("axios");
let mapping = require("../elastic_mappings/copyundpasta.json");

if (process.env.APPBASE_WRITE_KEY == null || process.env.APPBASE_WRITE_KEY === "") {
  throw new Error("Missing env variable 'APPBASE_WRITE_KEY'");
}

const baseUrl = `https://${process.env.APPBASE_WRITE_KEY}@scalr.api.appbase.io`;
const index = "copyundpasta";

async function main() {
  console.log("Deleting documents");
  try {
    await axios({
      method: "post",
      url: `${baseUrl}/${index}/_doc/_delete_by_query`,
      data: {
        query: {
          "match_all": {},
        }
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.response != null && error.response.data != null) {
      console.log(error.response.data.error);
    } else {
      console.log(error);
    }
  }

  console.log("Create mapping");
  try {
    let response = await axios({
      method: "put",
      url: `${baseUrl}/${index}/_mapping`,
      data: mapping,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.response != null && error.response.data != null) {
      console.log(error.response.data.error);
    } else {
      console.log(error);
    }
  }
}

main();