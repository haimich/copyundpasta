import recipes from "../src/content/recipes/all";
import RecipeCategories, { Category, RecipeCategory } from "../src/interfaces/RecipeCategories";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting recipes");
  await knex("recipes").del();
}

async function createAllEntries(knex) {
  console.log("Inserting recipe_categories");

  const categories = getAllCategories(RecipeCategories);
  await knex("recipe_categories").insert(categories.parentCategories);
  await knex("recipe_categories").insert(categories.childCategories);

  console.log("Inserting recipes");

  for (let recipe of recipes) {
    // transform json params to strings
    let dbRecipe: any = recipe;

    dbRecipe.servings = JSON.stringify(recipe.servings);
    dbRecipe.ingredients = JSON.stringify(recipe.ingredients);
    dbRecipe.steps = JSON.stringify(recipe.steps);
    dbRecipe.notes = JSON.stringify(recipe.notes);

    await knex("recipes").insert(recipe);
  }
}

function getAllCategories(categories: RecipeCategory) {
  let parentCategories: Category[] = [];
  let childCategories: Category[] = [];

  for (let category of Object.values(categories)) {
    if (category.parentCategory != null) {
      childCategories.push(category);
    } else {
      parentCategories.push(category);
    }
  }

  return {
    parentCategories,
    childCategories
  };
}