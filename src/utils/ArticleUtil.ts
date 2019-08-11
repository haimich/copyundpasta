import ArticleService from "@/services/ArticleService";
import RecipeService from "@/services/RecipeService";
import { Article } from "@/interfaces/Article";
import { Recipe } from "@/interfaces/Recipe";

export default class ArticleUtil {

  public static defaultHead(article: Article): any {
    return {
      title: article.title,
      meta: [
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.shortDescription },
        { property: "og:url", content: `https://www.copyundpasta.de/${article.slug}` },
        { property: "og:image", content: `https://www.copyundpasta.de` + article.previewImageUrl },
      ],
    };
  }

  /**
   * Generate default implementation for artice async data function
   */
  public static defaultAsyncData(article: Article, recipe: Recipe = null): any {
    return async function ({ $axios, params }) {
      if (recipe == null) {
        let result = await ArticleService.getComments($axios, article.slug);

        return {
          comments: result.data,
        };
      } else {
        let results = await Promise.all([
          ArticleService.getComments($axios, article.slug),
          RecipeService.getRating($axios, recipe.slug),
        ]);

        return {
          comments: results[0].data,
          ratings: results[1].data,
        };
      }
    }
  }

}