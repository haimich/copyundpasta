import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";

import article from "../articles/saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";

const servings: RecipeServing = {
  amount: 25,
  unit: RECIPE_SERVINGS.cm_backform_rund,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [

];

const steps: (RecipeStepGroup|RecipeStep)[] = [
];

// Tipps:
// - bei der Backzeit nicht nur auf die Zeit schauen, auch Geruch und Optik; außerdem Stäbchentest
// - Deko: Zimt, Pistazien (geröstet), Walnuss, Marzipanmöhren

const notes = [];

const tags = [
  RECIPE_TAGS.hefeteig,
  RECIPE_TAGS.party,
];

const createdAt = article.createdAt;

const recipe: Recipe = {
  slug: article.slug,
  title: article.title,
  categoryId: RECIPE_CATEGORIES.hefekuchen.id,
  previewImageUrl: article.previewImageUrl,
  servings,
  ingredients,
  steps,
  notes,
  tags,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;