import { Recipe } from "@/interfaces/Recipe";
import { AxiosPromise } from "axios";

export default class RecipeService {

  static getRecipe($axios, slug: string): AxiosPromise<Recipe> {
    return $axios.post(`/api/recipes/getRecipe`, {
      slug,
    });
  }

}