import Recipe from "@/api/interfaces/Recipe";

export async function getRecipe(knex, id): Promise<Recipe> {
  const recipe = await knex
    .table("recipes")
    .select("*")
    .where({
      id: id,
    })
    .first();

  if (recipe != null) {
    recipe.servings = JSON.parse(recipe.servings);
    recipe.ingredients = JSON.parse(recipe.ingredients);
    recipe.directions = JSON.parse(recipe.directions);
    recipe.notes = JSON.parse(recipe.notes);
    recipe.ratings = JSON.parse(recipe.ratings);
  }

  return recipe;
}