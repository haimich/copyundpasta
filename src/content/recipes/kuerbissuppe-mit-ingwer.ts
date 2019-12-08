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
        description: "(die Sorte ist zweitrangig)",
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
      {
        isGroup: false,
        amount: 0,
        unit: INGREDIENT_UNITS.ohneeinheit,
        ingredient: INGREDIENTS.salzpfeffer,
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
        ingredient: INGREDIENTS.speckwuerfel,
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
  {
   isGroup: true,
    title: "Vorbereiten",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Den Hokkaido-Kürbis waschen, halbieren und in grobe Würfel schneiden. Die Schale kann mitgegessen werden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Karotten und die Kartoffeln jeweils schälen, waschen und fein würfeln.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die halbe Knollensellerie schälen, waschen und fein würfeln. Die beiden Zwiebeln schälen, halbieren und grob schneiden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Knoblauchzehen und den Ingwer jeweils schälen und grob schneiden. Im Mörser zu einer feinen Masse zerstampfen (wer keinen Mörser hat, kann die Zutaten auch einfach sehr fein schneiden).",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Orange halbieren und den Saft auspressen.",
      },
    ],
  },

  {
   isGroup: true,
    title: "Kochen",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "1,5 Liter Wasser in einem Wasserkocher zum Kochen bringen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Einen Topf mit 3l Fassungsvermögen erhitzen und 1 EL Pflanzenöl hineingeben. Sobald das Fett heiß ist, die Zwiebeln anbraten und die Hitze etwas reduzieren. Wenn die Zwiebeln gebräunt sind, die Knoblauch-/Ingwermischung hinzufügen und gut verrühren.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Nun das kochende Wasser angießen und sämtliches Gemüse hinzugeben. Den gepressten Saft der Orange ebenfalls angießen. 1-2 TL Salz dazugeben, um dem Gemüse frühzeitig Wasser zu entziehen. Die Suppe ca. 25 Minuten auf mittlerer Stufe köcheln lassen, dabei gelegentlich umrühren.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Kurz vor Ende der Garzeit die Kürbiskerne in einer heißen Pfanne trocken rösten, bis sie anfangen zu \"springen\". Die Kürbiskerne in eine Schüssel umfüllen und 1 EL Butter in der Pfanne erhitzen. Wenn das Fett heiß ist, die Speckwürfel hinzugeben und bei mittlerer Hitze auslassen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Vor dem Servieren die Suppe pürieren. Hierzu verwende ich gerne einen Mixer (am Besten aus Glas), aber mit einem Pürierstab funktioniert es auch sehr gut. Die pürierte Suppe fülle ich dabei in einen neuen Topf um. Zum Schluss mit Salz und Pfeffer abschmecken und nach Geschmack noch 1-2 EL Weißwein hinzugeben.",
      },
    ],
  },

  {
   isGroup: true,
    title: "Servieren",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Suppe in Teller oder Schälchen füllen und mit Kürbiskernen, Speckwürfeln und einem Schuss Kürbiskernöl servieren.",
      },
    ],
  },
];

const notes = [];

const tags = [
  RECIPE_TAGS.resteverwertung,
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