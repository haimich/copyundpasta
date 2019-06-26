import { AxiosPromise } from "axios";
import { Recipe } from "@/interfaces/Recipe";

export default class RecipeService {

  static getRecipe($axios, slug: string): AxiosPromise<Recipe> {
    return $axios.post(`/api/recipes/getRecipe`, {
      slug,
    });
  }

}