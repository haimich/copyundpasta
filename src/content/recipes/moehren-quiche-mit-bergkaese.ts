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
        content: "Mehl, Butterstückchen, Ei, Eiswasser und Salz in eine Schüssel geben. Mit einer Küchenmaschine (Knethaken) oder per Hand zu einem glatten Teig verkneten. Den Teig komplett in Frischhaltefolie einwickeln und für 30 Minuten in den Kühlschrank legen. Diese Phase ist wichtig, damit die Butter im Teig abkühlt und er sich danach besser ausrollen lässt.",
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
        content: "Da das Gemüse in der Quiche nicht schnell genug garen würde, muss es soweit vorgekocht werden, dass es fast gar ist.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Kartoffeln bei mittlerer Hitze ca. 20 Minuten garen. Wenn sie etwas abgekühlt sind, die Kartoffeln schälen und in Würfel schneiden. Die Möhren schälen und 3 Minuten in kochendes Salzwasser geben. Danach längs halbieren und in Scheiben von ca. 0,5 cm schneiden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zwiebeln schälen und fein würfeln. Eine Pfanne erhitzen, 1 EL Öl hinzugeben und die Zwiebeln mit dem gewürfelten Speck anbraten.",
      },
    ],
  },

];

// Zwiebeln schälen, in kleine Würfe schneiden und mit dem gewürfelten Speck in einer Pfanne in Olivenöl 2 Minuten anbraten.

// Backofen auf 200° C Ober-/Unterhitze vorheizen.

// Teig auf einer bemehlten Arbeitsfläche zu einem Kreis (34 cm Ø) ausrollen und in die gebutterte Springform (20 cm Ø) auslegen, den Rand (7 cm hoch) andrücken und den Teigboden mit einer Gabel mehrmals einstechen (den Rand mit einem Messer abschneiden).

// Möhren, Kartoffeln, Zwiebeln und Speck aus der Pfanne, 150 g geriebener Bergkäse und gehackter Blattpetersilie vorsichtig mischen und auf dem Boden verteilen, leicht andrücken.
// Eier, Sahne, Salz und Pfeffer verquirlen, über die Füllung gießen und mit dem restlichen Bergkäse bestreuen.

// Die Möhren Quiche im vorgeheizten Backofen auf mittlerer Schiene bei 200° C Ober-/Unterhitze für ca. 40 – 50 Minuten goldbraun backen.

// Nach dem backen die Quiche für 20 Minuten im Backofen ruhen lassen (optional).

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