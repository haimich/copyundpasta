import RecipeCategories from "../../interfaces/RecipeCategories";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeUnit } from "../../interfaces/Recipe";
import Ingredients, { IngredientPreparation } from "../../interfaces/Ingredients";

const servings: RecipeServings = {
  unit: RecipeUnit.quantity,
  amount: 10,
};

const ingredients: RecipeIngredient[] = [
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
    amount: 2,
    ingredient: Ingredients.eier,
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
  {
    unit: RecipeUnit.quantity,
    amount: 2,
    ingredient: Ingredients.zwiebel,
    preparation: IngredientPreparation.gewuerfelt,
  },
];

const directions: RecipeStep[] = [
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
  {
    type: "step",
    content: "Schmalz (oder Margarine) in einer gut verschließbaren Pfanne erhitzen.",
  },
  {
    type: "step",
    content: "nicht zu wenig Salz auf dem Pfannenboden verteilen.",
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
  category: RecipeCategories.desserts,
  previewImageUrl: "/images/recipes/oma-hildas-dampfnudeln/cover.jpg",
  description: "Das Originalrezept meiner Uroma Hilda, das definitiv Eindruck bei euren Gästen macht!",
  servings,
  ingredients,
  directions,
  notes,
  createdAt,
  modifiedAt: createdAt,
};

export default recipe;