import ArticleService from "@/services/ArticleService";
import RecipeService from "@/services/RecipeService";

export default class ArticleUtil {

  /**
   * Generate default implementation for artice async data function
   */
  static defaultAsyncData(article, recipe = null): any {
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