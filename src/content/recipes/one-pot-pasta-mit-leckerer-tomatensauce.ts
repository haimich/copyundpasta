import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { RECIPE_SERVINGS, INGREDIENT_UNITS, INGREDIENTS, INGREDIENT_PREPARATIONS } from "../ingredients/RecipeIngredients";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";
import article from "../articles/one-pot-pasta-mit-leckerer-tomatensauce";

const servings: RecipeServing = {
  amount: 4,
  unit: RECIPE_SERVINGS.servings,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: false,
    amount: 400,
    unit: INGREDIENT_UNITS.gram,
    ingredient: INGREDIENTS.spaghetti,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.zwiebel,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.knoblauchzehe,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.dose,
    ingredient: INGREDIENTS.tomatenkonserve_stueckig,
  },
  {
    isGroup: false,
    amount: 10,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.kirschtomaten,
    preparation: INGREDIENT_PREPARATIONS.halbiert,
  },
  {
    isGroup: false,
    amount: 1500,
    unit: INGREDIENT_UNITS.milliliter,
    ingredient: INGREDIENTS.wasser,
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: false,
    type: "step",
    content: "",
  },
];

const notes = [];

const tags = [
  RECIPE_TAGS.feierabendgericht,
  RECIPE_TAGS.resteverwertung,
  RECIPE_TAGS.vegetarisch,
  RECIPE_TAGS.vegan,
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