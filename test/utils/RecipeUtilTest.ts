import RecipeUtil from "@/utils/RecipeUtil";
import RecipeCategories from "@/interfaces/RecipeCategories";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "@/interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit, RecipeServingsUnit } from "@/interfaces/RecipeIngredients";

const servings: RecipeServings = {
  amount: 10,
  unit: RecipeServingsUnit.quantity,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Teig",
    ingredients: [
      {
        isGroup: false,
        amount: 500,
        unit: RecipeUnit.g,
        ingredient: Ingredients.mehl,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.hefe,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.zucker,
      },
      {
        isGroup: false,
        amountFrom: 2,
        unit: RecipeUnit.quantity,
        amountTo: 3,
        ingredient: Ingredients.ei,
      },
      {
        isGroup: false,
        amount: 0.25,
        unit: RecipeUnit.l,
        ingredient: Ingredients.milch,
      },
      {
        isGroup: false,
        ingredient: Ingredients.salz,
      },
      {
        isGroup: false,
        amount: 80,
        unit: RecipeUnit.g,
        ingredient: Ingredients.butter,
      },
    ],
  },
  {
    isGroup: false,
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
  categoryId: RecipeCategories.desserts.id,
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
