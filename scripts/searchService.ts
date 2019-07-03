require("dotenv").config();
import axios from "axios";
import _ from "lodash";
import { Article } from "@/interfaces/Article";

if (process.env.APPBASE_WRITE_KEY_ARTICLES == null || process.env.APPBASE_WRITE_KEY_ARTICLES === "") {
  throw new Error("Missing env variable 'APPBASE_WRITE_KEY_ARTICLES'");
}

const baseUrl = `https://${process.env.APPBASE_WRITE_KEY_ARTICLES}@scalr.api.appbase.io`;

export default class SearchService {

  public static deleteArticlesIndex() {
    return axios({
      method: "post",
      url: `${baseUrl}/cup-articles/_doc/_delete_by_query`,
      data: {
        query: {
          "match_all": {},
        }
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static indexArticles(articles: Article[]) {
    let body = "";

    for (let article of articles) {
      let slug = article.slug;

      body += `{"index": { "_index": "cup-articles", "_id": "${slug}" }}\n`;
      body += JSON.stringify(_.omit(article, ["slug"])) + "\n";
    }

    return axios({
      method: "post",
      url: `${baseUrl}/cup-articles/_doc/_bulk`,
      data: body,
      headers: {
        "Content-Type": "application/x-ndjson",
      },
    });
  }

}