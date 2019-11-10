import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";
import article from "../articles/moehren-quiche-mit-bergkaese";

const servings: RecipeServing = {
  amount: 25,
  unit: RECIPE_SERVINGS.cm_quicheform,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Teig",
    ingredients: [
      {
        isGroup: false,
        amount: 250,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.mehl,
      },
      {
        isGroup: false,
        amount: 125,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.kaltebutter,
        preparation: INGREDIENT_PREPARATIONS.kleingeschnitten,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.ei,
      },
      {
        isGroup: false,
        amount: 3,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.eiswasser,
      },
    ],
  },

  {
    isGroup: true,
    title: "Füllung",
    ingredients: [
      {
        isGroup: false,
        amount: 750,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.moehren,
      },
      {
        isGroup: false,
        amount: 250,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.kartoffel,
        description: "(vorwiegend festkochend)",
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.zwiebel,
      },
      {
        isGroup: false,
        amount: 120,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.speck,
        preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
        description: "(optional)",
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.oel,
      },
      {
        isGroup: false,
        amount: 200,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.bergkaese,
        preparation: INGREDIENT_PREPARATIONS.gerieben,
      },

      {
        isGroup: false,
        amount: 5,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.ei,
      },
      {
        isGroup: false,
        amount: 100,
        unit: INGREDIENT_UNITS.milliliter,
        ingredient: INGREDIENTS.schlagsahne,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.salz,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.pfeffer,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.muskatnuss,
        preparation: INGREDIENT_PREPARATIONS.gerieben,
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: true,
    title: "Teig",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Butter in kleine Flocken schneiden",
      },
    ],
  },

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