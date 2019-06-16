import {Recipe} from "@/interfaces/Recipe";
import { getConnection } from "../utils/knexUtil";

export async function getRecipe(slug: string): Promise<Recipe> {
  const knex = getConnection();
  
  const entries = await knex
    .table("recipes")
    .select("recipes.*", "recipes_recipe_tags.tagId")
    .leftJoin("recipes_recipe_tags", "recipes.slug", "=", "recipes_recipe_tags.recipeSlug")
    .where("recipes.slug", slug);

  if (entries == null || entries.length === 0) {
    return null;
  }

  let recipe: any = {};

  recipe.slug = entries[0].slug;
  recipe.title = entries[0].title;
  recipe.categoryId = entries[0].categoryId;
  recipe.previewImageUrl = entries[0].previewImageUrl;
  recipe.createdAt = entries[0].createdAt;
  recipe.modifiedAt = entries[0].modifiedAt;

  recipe.servings = parseJsonString(entries[0].servings, null);
  recipe.ingredients = parseJsonString(entries[0].ingredients, []);
  recipe.steps = parseJsonString(entries[0].steps, []);
  recipe.notes = parseJsonString(entries[0].notes, []);
  recipe.ratings = parseJsonString(entries[0].ratings, []);

  // gather tags
  let tagIds = [];

  for (let entry of entries) {
    if (entry.tagId != null && entry.tagId !== "") {
      tagIds.push(entry.tagId)
    }
  }

  recipe.tags = tagIds;

  return recipe;
}

function parseJsonString(str: string, defaultValue: any): {} {
  if (str !== null && str !== undefined && str !== "") {
    return JSON.parse(str);
  } else {
    return defaultValue;
  }
}