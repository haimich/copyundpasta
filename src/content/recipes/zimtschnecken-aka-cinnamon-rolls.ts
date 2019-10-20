import RecipeCategories from "../../interfaces/RecipeCategories";
import RecipeTags from "../../interfaces/RecipeTags";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit, RecipeServingsUnit } from "../../interfaces/RecipeIngredients";
import article from "../articles/zimtschnecken-aka-cinnamon-rolls";

const servings: RecipeServings = {
  amount: 40,
  unit: RecipeServingsUnit.quantity,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Hefeteig",
    ingredients: [
      {
        isGroup: false,
        amount: 500,
        unit: RecipeUnit.g,
        ingredient: Ingredients.mehl,
      },
      {
        isGroup: false,
        amount: 240,
        unit: RecipeUnit.g,
        ingredient: Ingredients.milch,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.hefe,
      },
      {
        isGroup: false,
        amount: 2,
        unit: RecipeUnit.quantity,
        ingredient: Ingredients.eigelb,
        description: "(Zimmertemperatur)",
      },
      {
        isGroup: false,
        amount: 60,
        unit: RecipeUnit.g,
        ingredient: Ingredients.zucker,
      },
      {
        isGroup: false,
        amount: 60,
        unit: RecipeUnit.g,
        ingredient: Ingredients.butter,
        description: "(Zimmertemperatur)",
      },
      {
        isGroup: false,
        amount: 2,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.zitronenabrieb,
      },
      {
        isGroup: false,
        amount: 1,
        unit: RecipeUnit.pinch,
        ingredient: Ingredients.salz,
      },
      {
        isGroup: false,
        amount: 1,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.vanillearoma,
        description: "(oder Vanillezucker)",
      },
    ],
  },

  {
    isGroup: true,
    title: "Füllung",
    ingredients: [
      {
        isGroup: false,
        amount: 220,
        unit: RecipeUnit.g,
        ingredient: Ingredients.braunerzucker,
      },
      {
        isGroup: false,
        amount: 150,
        unit: RecipeUnit.g,
        ingredient: Ingredients.butter,
        description: "(kalt)"
      },
      {
        isGroup: false,
        amountFrom: 2,
        amountTo: 3,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.zimt,
      },
    ],
  },

  {
    isGroup: true,
    title: "Glasur",
    ingredients: [
      {
        isGroup: false,
        amount: 60,
        unit: RecipeUnit.g,
        ingredient: Ingredients.puderzucker,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.wasser,
      },
      {
        isGroup: false,
        amount: 3,
        unit: RecipeUnit.el,
        ingredient: Ingredients.hagelzucker,
        description: "(optional)",
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  
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