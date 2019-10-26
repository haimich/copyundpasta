import RecipeCategories from "../../interfaces/RecipeCategories";
import RecipeTags from "../../interfaces/RecipeTags";
import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { RECIPE_SERVINGS, INGREDIENT_UNITS, INGREDIENTS, INGREDIENT_PREPARATIONS } from "../../interfaces/RecipeIngredients";
import article from "../articles/one-pot-pasta-mit-leckerer-tomatensauce";

const servings: RecipeServing = {
  amount: 3,
  unit: RECIPE_SERVINGS.servings,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: false,
    amount: 30,
    unit: INGREDIENT_UNITS.g,
    ingredient: INGREDIENTS.hefe,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.quantity,
    ingredient: INGREDIENTS.eigelb,
    description: "(Zimmertemperatur)",
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: false,
    type: "step",
    content: "Eine rechteckige Form (40cm x 26cm) mit Backpapier auslegen. Das kann eine Auflaufform aus Keramik oder eine klassische Backform sein. Alternativ kann man den Teig auch in einer runden Form backen.",
  },
];

const notes = [];

const tags = [
  RecipeTags.hefeteig,
  RecipeTags.party,
];

const createdAt = article.createdAt;

const recipe: Recipe = {
  slug: article.slug,
  title: article.title,
  categoryId: RecipeCategories.hefekuchen.id,
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