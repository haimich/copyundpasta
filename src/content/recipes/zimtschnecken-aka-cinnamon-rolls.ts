import RecipeCategories from "../../interfaces/RecipeCategories";
import RecipeTags from "../../interfaces/RecipeTags";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit, RecipeServingsUnit } from "../../interfaces/RecipeIngredients";

const servings: RecipeServings = {
  amount: 16,
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
        amount: 225,
        unit: RecipeUnit.g,
        ingredient: Ingredients.milch,
      },
      {
        isGroup: false,
        amount: 25,
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
        amount: 0.5,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.salz,
      },
      {
        isGroup: false,
        amount: 80,
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
        amount: 1,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.zitronenabrieb,
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
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  
];

const notes = [];

const tags = [
  RecipeTags.hefeteig,
];

const createdAt = "2019-10-12 21:00:00";

const recipe: Recipe = {
  slug: "zimtschnecken-aka-cinnamon-rolls",
  title: "Zimtschnecken aka Cinnamon Rolls",
  categoryId: RecipeCategories.frostings.id,
  previewImageUrl: "/images/recipes/zimtschnecken-aka-cinnamon-rolls/main.jpg",
  servings,
  ingredients,
  steps,
  notes,
  tags,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;