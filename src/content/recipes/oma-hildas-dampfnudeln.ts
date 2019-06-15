import RecipeCategories from "../../interfaces/RecipeCategories";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit } from "../../interfaces/RecipeIngredients";

const servings: RecipeServings = {
  amount: 10,
  unit: RecipeUnit.quantity,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Teig",
    ingredients: [
      {
        amount: 500,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.mehl,
      },
      {
        amount: 30,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.hefe,
      },
      {
        amount: 30,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.zucker,
      },
      {
        amountFrom: 2,
        unit: RecipeUnit.quantity,
        amountTo: 3,
        ingredient: Ingredients.ei,
      },
      {
        amount: 0.25,
        unit: RecipeUnit.liter,
        ingredient: Ingredients.milch,
      },
      {
        ingredient: Ingredients.salz,
      },
      {
        amount: 80,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.butter,
      },
    ],
  },
  {
    unit: RecipeUnit.quantity,
    amount: 2,
    ingredient: Ingredients.zwiebel,
    preparation: IngredientPreparation.gewuerfelt,
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: true,
    title: "Teig",
    steps: [
      {
        type: "step",
        content: "Hefeteig zubereiten und gehen lassen.",
      },
      {
        type: "step",
        content: "Dampfnudeln mit Mamas Bäckerknettechnik formen.",
      },
      {
        type: "step",
        content: "auf einem bemehlten Blech abermals gehen lassen.",
      },
    ]
  },
  {
    type: "step",
    content: "Schmalz (oder Margarine) in einer gut verschließbaren Pfanne erhitzen.",
  },
  {
    type: "step",
    content: "Nicht zu wenig Salz auf dem Pfannenboden verteilen.",
  },
  {
    type: "step",
    content: "Dampfnudeln hineinsetzen, eine Tasse heißes Wasser vorsichtig seitlich reinlaufen lassen.",
  },
  {
    type: "step",
    content: "Ca. 10 min. auf kleiner Flamme garen lassen."
  },
];

const notes = [
  "Die Dampfnudeln sind fertig, wenn es im Topf knistert (dann ist das gesamte Wasser verdampft)",
];

const createdAt = "2019-06-10 10:10:28";

const recipe: Recipe = {
  slug: "test",
  title: "Oma Hilda's Dampfnudeln",
  categoryId: RecipeCategories.desserts.id,
  previewImageUrl: "/images/recipes/oma-hildas-dampfnudeln/cover.jpg",
  description: "Das Originalrezept meiner Uroma Hilda, das definitiv Eindruck bei euren Gästen macht!",
  servings,
  ingredients,
  steps,
  notes,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;