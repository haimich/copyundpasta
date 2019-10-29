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
    preparation: INGREDIENT_PREPARATIONS.feingewuerfelt,
    description: "(optional)",
  },
  {
    isGroup: false,
    amount: 400,
    unit: INGREDIENT_UNITS.gramm,
    ingredient: INGREDIENTS.spaghetti,
    description: "(oder eine andere Pastasorte)",
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.dose,
    ingredient: INGREDIENTS.tomatenkonserve_stueckig,
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
    unit: INGREDIENT_UNITS.milliliter,
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
    amountFrom: 1,
    amountTo: 2,
    unit: INGREDIENT_UNITS.el,
    ingredient: INGREDIENTS.milderessig,
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
    amount: 80,
    unit: INGREDIENT_UNITS.gramm,
    ingredient: INGREDIENTS.parmesan,
  },
  {
    isGroup: false,
    amount: 2,
    unit: INGREDIENT_UNITS.tl,
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
    content: "Die Zwiebeln, den Knoblauch und das Gemüse wie in den Zutaten angegeben kleinschneiden. Den Parmesan reiben.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Einen breiten Topf (ein Wok eignet sich auch sehr gut) heiß werden lassen, dann das Olivenöl hinzufügen und die Zwiebeln anbraten.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Nach einer Weile den Knoblauch hinzugeben und kurz mitdünsten, währenddessen als Vorbereitung das Wasser in einem Wasserkocher zum Kochen bringen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Die Zwiebeln und den Knoblauch mit Weißwein ablöschen, danach das Tomatenmark hinzufügen und gut umrühren.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Nun das gesamte Gemüse sowie die ungekochten Nudeln in den Topf geben und mit den stückigen Tomaten und dem heißen Wasser auffüllen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Einen Timer auf 15 Minuten stellen. Mit 1 EL Zucker, 3 TL Salz und dem Gemüsebrühenpulver würzen. Außerdem 1 EL Paprikapulver hinzufügen.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Zwischendurch immer wieder umrühren, damit nichts anbrennt und die Spaghetti nicht aneinanderkleben.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Die genaue Kochzeit hängt von den Spaghetti ab, daher nach 15 Minuten immer mal wieder probieren, ob sie den gewünschten Gargrad erreicht haben.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Am Ende der Kochzeit mit Pfeffer und etwas Essig abschmecken. Nach Belieben noch getrockneten Oregano dazugeben.",
  },
  {
    isGroup: false,
    type: "step",
    content: "Den Herd abstellen und den geriebenen Parmesan einrühren. Mit gezupften Basilikumblättern servieren.",
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