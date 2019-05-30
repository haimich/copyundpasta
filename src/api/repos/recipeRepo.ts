import {Recipe} from "@/api/interfaces/Recipe";

export async function getRecipe(knex, id): Promise<Recipe> {
  const recipe = await knex
    .table("recipes")
    .select("*")
    .where({
      id: id,
    })
    .first();

  if (recipe != null) {
    recipe.servings = parseJsonString(recipe.servings, null);
    recipe.ingredients = parseJsonString(recipe.ingredients, []);
    recipe.directions = parseJsonString(recipe.directions, []);
    recipe.notes = parseJsonString(recipe.notes, []);
    recipe.ratings = parseJsonString(recipe.ratings, []);
  }

  return recipe;
}

function parseJsonString(str: string, defaultValue: any): {} {
  if (str !== null && str !== undefined && str !== "") {
    return JSON.parse(str);
  } else {
    return defaultValue;
  }
}