import RecipeCategories from "../../interfaces/RecipeCategories";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit } from "../../interfaces/RecipeIngredients";

const servings: RecipeServings = {
  unit: RecipeUnit.quantity,
  amount: 10,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Teig",
    ingredients: [
      {
        unit: RecipeUnit.gram,
        amount: 500,
        ingredient: Ingredients.mehl,
      },
      {
        unit: RecipeUnit.gram,
        amount: 30,
        ingredient: Ingredients.hefe,
      },
      {
        unit: RecipeUnit.gram,
        amount: 30,
        ingredient: Ingredients.zucker,
      },
      {
        unit: RecipeUnit.quantity,
        amountFrom: 2,
        amountTo: 3,
        ingredient: Ingredients.ei,
      },
      {
        unit: RecipeUnit.liter,
        amount: 0.25,
        ingredient: Ingredients.milch,
      },
      {
        ingredient: Ingredients.salz,
      },
      {
        unit: RecipeUnit.gram,
        amount: 80,
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
  slug: "baileys-chocolate-cupcakes",
  title: "Baileys Chocolate Cupcakes",
  category: RecipeCategories.frostings,
  previewImageUrl: "/images/recipes/baileys-chocolate-cupcakes/cover.jpg",
  description: "I couldn’t decide if I wanted to drizzle melted chocolate over top of these guys, so I only did it to half of them. I prefer the plain ones myself, but thought the drizzled ones looked a bit fancier. Interestingly enough, the first ones to be snatched up post-dinner were the plain ones. I thought for sure everyone would go for the chocolate drizzle! Why all the drizzle hate? I’m going to stick to plain and simple from now on.",
  servings,
  ingredients,
  steps,
  notes,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;