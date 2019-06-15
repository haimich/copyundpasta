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
    title: "Cupcakes",
    ingredients: [
      {
        amount: 6,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.kakaopulver,
      },
      {
        amount: 6,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.wasser,
      },
      {
        amount: 1.5,
        unit: RecipeUnit.el,
        ingredient: Ingredients.mehl,
      },
      {
        amount: 0.5,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.backpulver,
      },
    ],
  },
  {
    isGroup: true,
    title: "Baileys Buttercreme",
    ingredients: [
      {
        amount: 300,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.zucker,
      },
      {
        amount: 50,
        unit: RecipeUnit.gram,
        ingredient: Ingredients.butter,
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: true,
    title: "Cupcakes",
    steps: [
      {
        type: "step",
        content: "Preheat oven to 350F and line muffin tins with cupcake liners.",
      },
      {
        type: "step",
        content: "Whisk cocoa and hot water together until smooth, set aside.",
      },
      {
        type: "step",
        content: "In a separate bowl, whisk together flour, baking powder, baking soda, and salt. Melt butter and sugar in a small saucepan over medium heat. Stir to combine.",
      },
      {
        type: "step",
        content: "Transfer butter to the bowl of a mixer fitted with the paddle attachment. Beat until mixture has cooled, approx 4mins.",
      },
      {
        type: "step",
        content: "Add eggs one at a time, beating until fully incorporated after each addition. Scrape sides of bowl as needed. Add vanilla and cocoa mixture, beat until combined. Reduce speed to low and alternate adding flour mixture and sour cream in 2 additions. Beat until just combined.",
      },
    ]
  },
];

const notes = [];

const tags = [
  RecipeTags.resteverwertung,
];

const createdAt = "2019-06-14 14:06:00";

const recipe: Recipe = {
  slug: "baileys-chocolate-cupcakes",
  title: "Baileys Chocolate Cupcakes",
  categoryId: RecipeCategories.frostings.id,
  previewImageUrl: "/images/recipes/baileys-chocolate-cupcakes/cover.jpg",
  description: "Delicious chocolate cupcakes with a whipped chocolate Baileys buttercream.",
  servings,
  ingredients,
  steps,
  notes,
  tags,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;