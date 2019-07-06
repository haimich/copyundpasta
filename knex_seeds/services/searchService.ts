require("dotenv").config();
import axios from "axios";
import _ from "lodash";
import { Article } from "@/interfaces/Article";
import { AllCategories, CategoriesById } from "@/interfaces/ArticleCategories";
import CategoryUtil from "../../src/utils/CategoryUtil";

if (process.env.APPBASE_WRITE_KEY == null || process.env.APPBASE_WRITE_KEY === "") {
  throw new Error("Missing env variable 'APPBASE_WRITE_KEY'");
}

const baseUrl = `https://${process.env.APPBASE_WRITE_KEY}@scalr.api.appbase.io`;
const index = "copyundpasta";

export default class SearchService {

  public static deleteArticlesIndex() {
    return axios({
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
  }

  public static async indexArticles(articles: Article[], categoriesById: CategoriesById) {
    let body = "";

    for (let article of articles) {
      let slug = article.slug;
      let esArticle = _.omit(article, ["slug"]);

      esArticle.categoryId = CategoryUtil.getUniqueCategoryId(article.categoryId, categoriesById);
      esArticle.categoryFullName = CategoryUtil.getFullCategoryName(article.categoryId, categoriesById);

      body += `{"index": { "_index": "${index}", "_id": "${slug}" }}\n`;
      body += JSON.stringify(esArticle) + "\n";
    }

    let response = await axios({
      method: "post",
      url: `${baseUrl}/${index}/_doc/_bulk`,
      data: body,
      headers: {
        "Content-Type": "application/x-ndjson",
      },
    });

    if (response.data.errors === true) {
      throw new Error(JSON.stringify(response.data.items, null, 2));
    }
  }

}