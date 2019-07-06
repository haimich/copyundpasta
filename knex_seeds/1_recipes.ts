import recipes from "../src/content/recipes/all";
import RecipeCategories, {  } from "../src/interfaces/RecipeCategories";
import RecipeTags, { Tag, RecipeTag } from "../src/interfaces/RecipeTags";
import CategoryUtil from "@/utils/CategoryUtil";
import SearchService from "./services/searchService";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting recipes_recipe_tags");
  await knex("recipes_recipe_tags").del();

  console.log("Deleting recipe_tags");
  await knex("recipe_tags").del();
  
  console.log("Deleting recipes");
  await knex("recipes").del();

  console.log("Deleting recipe_categories");
  await knex("recipe_categories").del();
}

async function createAllEntries(knex) {
  console.log("Inserting recipe_categories");

  const categories = CategoryUtil.getAllArticleCategories(RecipeCategories);
  await knex("recipe_categories").insert(categories.parentCategories);
  await knex("recipe_categories").insert(categories.childCategories);

  console.log("Inserting recipes");
  let recipeTags: any = {};

  for (let recipe of recipes) {
    // transform json params to strings
    let dbRecipe: any = recipe;

    dbRecipe.servings = JSON.stringify(recipe.servings);
    dbRecipe.ingredients = JSON.stringify(recipe.ingredients);
    dbRecipe.steps = JSON.stringify(recipe.steps);
    dbRecipe.notes = JSON.stringify(recipe.notes);

    // save tags for later insertion
    recipeTags[dbRecipe.slug] = recipe.tags;
    delete dbRecipe.tags;

    await knex("recipes").insert(recipe);
  }

  console.log("Inserting recipe_tags");

  const tags = getAllTags(RecipeTags);
  await knex("recipe_tags").insert(tags);
  
  console.log("Inserting recipes_recipe_tags");

  const recipesRecipeTags = getRecipeTagInserts(recipeTags);
  await knex("recipes_recipe_tags").insert(recipesRecipeTags);

  try {
    console.log("Indexing recipe fields");
    await SearchService.indexRecipes(recipes, categories.categoriesById);
  } catch (err) {
    if (err.response != null && err.response.data != null) {
      console.log(err.response.data.error);
    } else {
      console.log(err);
    }

    process.exit(1);
  }
}

function getAllTags(tags: RecipeTag): Tag[] {
  return Object.values(tags);
}

function getRecipeTagInserts(recipeTags: any): any[] {
  let inserts: any[] = [];

  for (let slug of Object.keys(recipeTags)) {
    let tags = recipeTags[slug];

    if (tags != null && tags.length >= 1) {
      for (let tag of tags) {
        inserts.push({
          recipeSlug: slug,
          tagId: tag.id,
        });
      }
    }
  }

  return inserts;
}
