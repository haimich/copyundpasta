require("dotenv").config();
import axios from "axios";
import _ from "lodash";
import { Article } from "@/interfaces/Article";
import { Recipe, RecipeIngredientGroup, RecipeIngredient } from "@/interfaces/Recipe";
import { ArticleCategoriesById } from "@/interfaces/ArticleCategories";
import CategoryUtil from "../../src/utils/CategoryUtil";
import { EsArticle } from "../interfaces/Elasticsearch";

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

  public static async indexArticles(articles: Article[], recipes: Recipe[], categoriesById: ArticleCategoriesById) {
    let body = "";

    let ingredientsBySlug = {};

    for (let recipe of recipes) {
      let slug = recipe.slug;
      ingredientsBySlug[slug] = SearchService.extractIngredientString(recipe);
    }

    for (let article of articles) {
      let slug = article.slug;
      let esArticle: EsArticle = _.omit(article, ["slug"]);

      esArticle.categoryId = CategoryUtil.getUniqueArticleCategoryId(article.categoryId, categoriesById);
      esArticle.categoryFullName = CategoryUtil.getFullArticleCategoryName(article.categoryId, categoriesById);

      if (ingredientsBySlug[slug] != null) {
        esArticle.ingredients = ingredientsBySlug[slug];
      }

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

  private static extractIngredientString(recipe: Recipe): string {
    let str = recipe.ingredients.reduce((ingredientStr: string, entry: RecipeIngredientGroup | RecipeIngredient) => {
      if ('isGroup' in entry) {
        entry = entry as RecipeIngredientGroup;
        return ingredientStr += " " + entry.ingredients.reduce((groupIngredientStr: string, entry: RecipeIngredient) => {
          return groupIngredientStr += " " + entry.ingredient.name;
        }, "");
      } else {
        entry = entry as RecipeIngredient;
        return ingredientStr += " " + entry.ingredient.name;
      }
    }, "");

    return str.trim();
  }

}