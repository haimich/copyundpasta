import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";

import article from "../articles/kuerbissuppe-mit-ingwer";

const servings: RecipeServing = {
  amount: 1.5,
  unit: RECIPE_SERVINGS.liter,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
   isGroup: true,
    title: "Suppe",
    ingredients: [
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.hokkaidokuerbis,
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.karotten,
      },
      {
        isGroup: false,
        amount: 0.5,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.knollensellerie,
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.kartoffel,
        description: "(am Besten vorwiegend festkochend)",
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.zwiebel,
      },
      {
        isGroup: false,
        amountFrom: 2,
        amountTo: 3,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.knoblauchzehe,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.stueckingwer,
        description: "(daumennagelgroß)",
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.orange,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.pflanzenoel,
        description: "(zum Anbraten)",
      },
      {
        isGroup: false,
        amount: 4,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.salz,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.prise,
        ingredient: INGREDIENTS.pfeffer,
      },
      {
        isGroup: false,
        amount: 1.5,
        unit: INGREDIENT_UNITS.liter,
        ingredient: INGREDIENTS.wasser,
      },
      {
        isGroup: false,
        amountFrom: 1,
        amountTo: 2,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.weissweinessig,
      },
    ],
  },

  {
   isGroup: true,
    title: "Zum Servieren",
    ingredients: [
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.handvoll,
        ingredient: INGREDIENTS.kuerbiskerne,
        description: "(mit Schale)",
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.butter,
      },
      {
        isGroup: false,
        amount: 120,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.speck,
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.kuerbiskernoel,
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [

];

const notes = [];

const tags = [
  RECIPE_TAGS.resteverwertung,
  RECIPE_TAGS.universell,
  RECIPE_TAGS.muerbeteig,
  RECIPE_TAGS.vegetarisch,
];

const createdAt = article.createdAt;

const recipe: Recipe = {
  slug: article.slug,
  title: article.title,
  categoryId: RECIPE_CATEGORIES.quiches.id,
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