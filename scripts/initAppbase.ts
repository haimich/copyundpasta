require("dotenv").config();
import Appbase from "appbase-js";

if (process.env.APPBASE_WRITE_KEY == null || process.env.APPBASE_WRITE_KEY === "") {
  throw new Error("Missing env variable 'APPBASE_WRITE_KEY'");
}

let appbase = Appbase({
  url: "https://scalr.api.appbase.io",
  app: "copyundpasta",
  credentials: process.env.APPBASE_WRITE_KEY,
});

export default appbase;