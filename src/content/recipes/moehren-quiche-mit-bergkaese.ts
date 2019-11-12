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
        amount: 10,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.champignons,
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
        description: "(alternativ Gruyère oder Appenzeller)",
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
        content: "Mehl, Butterstückchen, Ei, Eiswasser und Salz in eine Schüssel geben. Mit einer Küchenmaschine (Knethaken) oder per Hand zu einem glatten Teig verkneten. Sollte der Teig zu klebrig sein, noch etwas Mehl hinzugeben – umgekehrt etwas Wasser angießen, wenn er zu trocken ist.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Teig zu einer Kugel formen, in Frischhaltefolie einwickeln und für 30 Minuten in den Kühlschrank legen. Diese Zeit ist notwendig, damit die Butter im Teig abkühlt und er sich aschließend besser ausrollen lässt.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Füllung",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Da das Gemüse im Backofen nicht schnell genug garen würde, muss es vorgekocht werden, bis es fast weich ist.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Kartoffeln waschen und mit Schale bei mittlerer Hitze ca. 20 Minuten garen. Wenn sie etwas abgekühlt sind, die Kartoffeln schälen und in kleine Würfel schneiden. Die Möhren schälen und 3 Minuten in kochendes Salzwasser geben. Danach längs halbieren und in Scheiben von ca. 0,5 cm schneiden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Backofen auf 190° C Ober-/Unterhitze vorheizen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zwiebeln schälen und fein würfeln. Eine Pfanne erhitzen, 1 EL Öl hinzugeben und die Zwiebeln mit dem gewürfelten Speck darinanbraten.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Teig formen",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Form mit Butter bestreichen, damit sich die Quiche nach dem Backen besser löst.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Teig auf einer bemehlten Arbeitsfläche mit einem Nudelholz kreisrund ausrollen. In die Form legen, so dass rundherum ein Rand entsteht. Den Teig mit den Fingern andrücken und den überstehenden Rand mit einem Messer abschneiden. Nun den Boden mit einer Gabel mehrfach einstechen, da sich sonst durch aufsteigenden Dampf Blasen bilden.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Blindbacken",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Dieser Schritt ist wichtig, damit der Boden nicht so stark durchweicht. Man kann ihn auch überspringen, wenn man diese Tatsache in Kauf nimmt :)",
      },
      {
        isGroup: false,
        type: "step",
        content: "Ein Backpapier auf den Boden der Quiche legen und die Hülsenfrüchte darauf verteilen. Für ca. 20 Minuten blindbacken, bis der Rand anfängt, braun zu werden. Nach dem Backen auskühlen lassen und die Hülsenfrüchte entfernen.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Backen",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Möhren, Kartoffeln, Zwiebeln, Speck und die Hälfte des geriebenen Käses in einer großen Schüssel vermischen und auf dem Boden der Quiche verteilen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Eier, Sahne, Salz, Pfeffer und Muskatnuss mit einem Schneebesen verquirlen (noch besser geht es mit einem Zauberstab), über die Füllung gießen und mit dem restlichen Käse bestreuen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Quiche im Backofen auf der mittleren Schiene bei 190°C Ober-/Unterhitze ca. 40 min. backen, bis der Käse schön braun ist.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Nach dem Backen sollte die Quiche noch etwas abkühlen. Als Beilage passt sehr gut ein grüner Salat.",
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