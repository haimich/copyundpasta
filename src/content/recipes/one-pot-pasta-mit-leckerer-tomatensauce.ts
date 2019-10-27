import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";
import article from "../articles/one-pot-pasta-mit-leckerer-tomatensauce";

const servings: RecipeServing = {
  amount: 4,
  unit: RECIPE_SERVINGS.portionen,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: false,
    amount: 400,
    unit: INGREDIENT_UNITS.gramm,
    ingredient: INGREDIENTS.spaghetti,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.zwiebel,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.knoblauchzehe,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
    description: "(optional)",
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.dose,
    ingredient: INGREDIENTS.tomatenkonserve_stueckig,
  },
  {
    isGroup: false,
    amount: 20,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.kirschtomaten,
    preparation: INGREDIENT_PREPARATIONS.halbiert,
    description: "(ca. 150 g)",
  },
  {
    isGroup: false,
    amount: 10,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.champignons,
    preparation: INGREDIENT_PREPARATIONS.geviertelt,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.paprika,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
  },
  {
    isGroup: false,
    amount: 0.5,
    unit: INGREDIENT_UNITS.stueck,
    ingredient: INGREDIENTS.zucchini,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.olivenoel,
    description: "(zum Anbraten)",
  },
  {
    isGroup: false,
    amount: 50,
    unit: INGREDIENT_UNITS.ml,
    ingredient: INGREDIENTS.weisswein,
    description: "(optional)",
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.tomatenmark,
  },
  {
    isGroup: false,
    amount: 800,
    unit: INGREDIENT_UNITS.milliliter,
    ingredient: INGREDIENTS.wasser,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.zucker,
  },
  {
    isGroup: false,
    amount: 3,
    unit: INGREDIENT_UNITS.tl,
    ingredient: INGREDIENTS.salz,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.tl,
    ingredient: INGREDIENTS.gemuesebruehenpulver,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.paprikapulver,
  },
  {
    isGroup: false,
    amount: 80,
    unit: INGREDIENT_UNITS.gramm,
    ingredient: INGREDIENTS.parmesan,
  },
  {
    isGroup: false,
    amountFrom: 1,
    amountTo: 2,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.essig,
    description: "(z. B. weißer Balsamico)",
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.prise,
    ingredient: INGREDIENTS.pfeffer,
  },
  {
    isGroup: false,
    amount: 1,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.oregano,
    description: "(optional)",
  },

  {
    isGroup: true,
    title: "Zum Anrichten",
    ingredients: [
      {
        isGroup: false,
        unit: INGREDIENT_UNITS.einige,
        ingredient: INGREDIENTS.basilikumblaetter,
        preparation: INGREDIENT_PREPARATIONS.gezupft,
      },
    ],
  }
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