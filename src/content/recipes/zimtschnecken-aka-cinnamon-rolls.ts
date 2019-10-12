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
        unit: RecipeUnit.gram,
        ingredient: Ingredients.mehl,
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