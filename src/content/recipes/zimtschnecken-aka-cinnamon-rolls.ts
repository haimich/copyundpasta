import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";

import article from "../articles/zimtschnecken-aka-cinnamon-rolls";

const servings: RecipeServing = {
  amount: 40,
  unit: RECIPE_SERVINGS.stueck,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Hefeteig",
    ingredients: [
      {
        isGroup: false,
        amount: 500,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.mehl,
      },
      {
        isGroup: false,
        amount: 240,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.milch,
      },
      {
        isGroup: false,
        amount: 30,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.hefe,
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.eigelb,
        description: "(Raumtemperatur)",
      },
      {
        isGroup: false,
        amount: 70,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.zucker,
      },
      {
        isGroup: false,
        amount: 60,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.butter,
        description: "(Raumtemperatur)",
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.zitronenabrieb,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.prise,
        ingredient: INGREDIENTS.salz,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.vanillearoma,
        description: "(oder Vanillezucker)",
      },
    ],
  },

  {
    isGroup: true,
    title: "Füllung",
    ingredients: [
      {
        isGroup: false,
        amount: 200,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.braunerzucker,
      },
      {
        isGroup: false,
        amount: 150,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.butter,
        description: "(kalt)"
      },
      {
        isGroup: false,
        amountFrom: 2,
        amountTo: 3,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.zimt,
      },
    ],
  },

  {
    isGroup: true,
    title: "Glasur",
    ingredients: [
      {
        isGroup: false,
        amount: 60,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.puderzucker,
      },
      {
        isGroup: false,
        amount: 30,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.wasser,
      },
      {
        isGroup: false,
        amount: 3,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.hagelzucker,
        description: "(optional)",
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
    isGroup: false,
    type: "step",
    content: "Eine rechteckige Form (40cm x 26cm) mit Backpapier auslegen. Das kann eine Auflaufform aus Keramik oder eine klassische Backform sein. Alternativ kann man den Teig auch in einer runden Form backen.",
  },

  {
    isGroup: true,
    title: "Hefeteig",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Eier trennen und die Zitronenschale abreiben.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Milch in einem Topf lauwarm erwärmen (optimal ist 38 °C, ab 45 Grad beginnt die Hefe abzusterben). Den Topf vom Herd nehmen, die Hefe in die Milch bröckeln und unter Rühren auflösen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Eigelb, Zucker, Salz, Zitronenabrieb und das Vanillearoma dazugeben und grob untermischen. Die weiche Butter in kleinen Würfeln dazugeben.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Das Mehl in die Rührschüssel der Küchenmaschine geben und in die Mitte eine Mulde drücken (man kann den Teig natürlich auch mit der Hand oder einem Rührgerät kneten). Die Milch in die Mulde gießen und mit etwas Mehl vom Rand bedecken.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Mit dem Knethaken bei mittlerer Geschwindigkeit in 5 Minuten zu einem geschmeidigen Teig verkneten. Der Teig ist fertig, wenn er eine glatte Konsistenz hat und nicht mehr klebt.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Teig zu einer Kugel formen und in eine Schüssel geben und mit einem Tuch bedecken. Bei Raumtemperatur 1 Stunde gehen lassen, bis sich sein Volumen verdoppelt hat.",
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
        content: "Während der Hefeteig geht, kann schon die Füllung vorbereitet werden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Hierzu einfach alle Zutaten mit einer Küchenmaschine (normaler Rühraufsatz) verrühren.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Ausrollen",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Den Hefeteig in vier Stücke aufteilen und die Viertel nacheinander mit einem Nudelholz ausrollen. Hierzu die Arbeitsfläche bemehlen oder eine Backmatte aus Silikon verwenden.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Jedes Rechteck sollte ca. 35 cm breit und 25 cm tief sein. 1/4 der Füllung gleichmäßig auf dem Teig verteilen. Nun den Teig von vorne nach hinten aufrollen, so dass eine Rolle entsteht.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Wer exakt gleich große Stücke haben möchte, legt nun ein Lineal an und schneidet den Teig alle 3 cm durch. Man kann den Teig aber auch nach Gefühl zerteilen, so dass pro Viertel ca. 10 Stück entstehen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zimtschnecken mit der flachen Seite nach unten in die Backform legen. Dabei ca. 1 cm Platz zwischen den Schnecken lassen, da der Teig noch aufgeht.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Backofen auf 175 °C Ober-/Unterhitze vorheizen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zimtschnecken sollten jetzt noch mal 20 Minuten gehen, damit sie schön aufgehen. Wer es eilig hat, kann diesen Schritt auch überspringen und sie in den kalten Backofen stellen. Während des Aufheizvorgangs haben sie so noch etwas Zeit zum Aufgehen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zimtschnecken 25 Minuten backen. Falls die Oberfläche zu dunkel wird, solltet ihr sie mit Alufolie abdecken.",
      },
    ],
  },

  {
    isGroup: true,
    title: "Glasur",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Während dem Backen könnt ihr die Glasur zubereiten. Hierfür den Puderzucker und das Wasser mit einem Schneebesen verrühren.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Glasur mit einem Pinsel auf die noch warmen Zimtschnecken auftragen. Wer möchte, kann nun noch etwas Hagelzucker darüber streuen.",
      },
    ],
  },

  {
    isGroup: false,
    type: "step",
    content: "Die Zimtschnecken abkühlen lassen. Wenn ihr sie zu einer Party mitnehmen möchtet, könnt ihr sie entweder in der Auflaufform servieren oder einzeln in Muffinförmchen setzen. So lassen sie sich problemlos in einer Tupperdose stapeln!",
  },
  {
    isGroup: false,
    type: "step",
    content: "Sie schmecken am Besten am gleichen Tag, da sie über Nacht etwas austrocknen. Aber meistens bleibt sowieso nichts übrig :-)",
  },
];

// Size: 40 x 26 

// Tipps:
// - man kann die Teigrechtecke so zuschneiden, dass die Ränder gerade sind (Optik)
// - wenn die Schnecke nicht gut aussieht, kann man sie rumdrehen
// - man kann die Schnecken vor dem Backen noch etwas platt drücken in der Auflaufform

const notes = [];

const tags = [
  RECIPE_TAGS.hefeteig,
  RECIPE_TAGS.party,
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