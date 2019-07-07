import { AxiosPromise } from "axios";
import { Recipe } from "@/interfaces/Recipe";

export default class RecipeService {

  static getRecipe($axios, slug: string): AxiosPromise<Recipe> {
    return $axios.post(`/api/recipes/getRecipe`, {
      slug,
    });
  }

  static getRating($axios, slug: string): AxiosPromise<number> {
    return $axios.post(`/api/recipes/getRating`, {
      slug,
    });
  }

  static rateRecipe($axios, slug: string, rating: number): AxiosPromise<number> {
    return $axios.post(`/api/recipes/rateRecipe`, {
      slug,
      rating,
    });
  }

}