import RecipeUtil from "@/utils/RecipeUtil";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientGroup, RecipeStepGroup } from "@/interfaces/Recipe";
import { RECIPE_CATEGORIES } from "@/content/categories/RecipeCategories";
import { INGREDIENTS } from "@/content/ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "@/content/ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "@/content/ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "@/content/ingredients/RecipeServings";


const servings: RecipeServings = {
  amount: 10,
  unit: RECIPE_SERVINGS.quantity,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Teig",
    ingredients: [
      {
        isGroup: false,
        amount: 500,
        unit: INGREDIENT_UNITS.g,
        ingredient: INGREDIENTS.mehl,
      },
      {
        isGroup: false,
        amount: 30,
        unit: INGREDIENT_UNITS.g,
        ingredient: INGREDIENTS.hefe,
      },
      {
        isGroup: false,
        amount: 30,
        unit: INGREDIENT_UNITS.g,
        ingredient: INGREDIENTS.zucker,
      },
      {
        isGroup: false,
        amountFrom: 2,
        unit: INGREDIENT_UNITS.quantity,
        amountTo: 3,
        ingredient: INGREDIENTS.ei,
      },
      {
        isGroup: false,
        amount: 0.25,
        unit: INGREDIENT_UNITS.l,
        ingredient: INGREDIENTS.milch,
      },
      {
        isGroup: false,
        ingredient: INGREDIENTS.salz,
      },
      {
        isGroup: false,
        amount: 80,
        unit: INGREDIENT_UNITS.g,
        ingredient: INGREDIENTS.butter,
      },
    ],
  },
  {
    isGroup: false,
    unit: INGREDIENT_UNITS.quantity,
    amount: 2,
    ingredient: INGREDIENTS.zwiebel,
    preparation: INGREDIENT_PREPARATIONS.gewuerfelt,
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
        content: "Hefeteig zubereiten und gehen lassen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Dampfnudeln mit Mamas Bäckerknettechnik formen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "auf einem bemehlten Blech abermals gehen lassen.",
      },
    ]
  },
  {
    isGroup: false,
    type: "step",
    content: "Schmalz (oder Margarine) in einer gut verschließbaren Pfanne erhitzen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Nicht zu wenig Salz auf dem Pfannenboden verteilen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Dampfnudeln hineinsetzen, eine Tasse heißes Wasser vorsichtig seitlich reinlaufen lassen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Ca. 10 min. auf kleiner Flamme garen lassen."
  },
];

const notes = [
  "Die Dampfnudeln sind fertig, wenn es im Topf knistert (dann ist das gesamte Wasser verdampft)",
];

const createdAt = "2019-06-10 10:10:28";

const recipe: Recipe = {
  slug: "oma-hildas-dampfnudeln",
  title: "Oma Hilda's Dampfnudeln",
  categoryId: RECIPE_CATEGORIES.kuchen.id,
  previewImageUrl: "/images/recipes/oma-hildas-dampfnudeln/cover.jpg",
  description: "Das Originalrezept meiner Uroma Hilda, das definitiv Eindruck bei euren Gästen macht!",
  servings,
  ingredients,
  steps,
  notes,
  tags: [],
  createdAt,
  modifiedAt: createdAt,
};

describe("formatServings", () => {
  test("should return servings", () => {
    expect(RecipeUtil.formatServings(recipe)).toBe("10 Stück");
  });

  test("should allow multiplier", () => {
    expect(RecipeUtil.formatServings(recipe, 2)).toBe("20 Stück");
  });
});

describe("formatIngredient", () => {
  test("should return string", () => {
    for (let entry of recipe.ingredients) {
      if (entry.isGroup) {
        for (let groupEntry of entry.ingredients) {
          console.log(RecipeUtil.formatIngredient(groupEntry));
        }
      } else {
        console.log(RecipeUtil.formatIngredient(entry));
      }
    }
  });

  test("should allow multiplier", () => {
    for (let entry of recipe.ingredients) {
      if (entry.isGroup) {
        for (let groupEntry of entry.ingredients) {
          console.log(RecipeUtil.formatIngredient(groupEntry, 2));
        }
      } else {
        console.log(RecipeUtil.formatIngredient(entry, 2));
      }
    }
  });
});
