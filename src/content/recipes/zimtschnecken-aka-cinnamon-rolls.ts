import RecipeCategories from "../../interfaces/RecipeCategories";
import RecipeTags from "../../interfaces/RecipeTags";
import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { Ingredients, IngredientPreparation, RecipeUnit, RecipeServingsUnit } from "../../interfaces/RecipeIngredients";
import article from "../articles/zimtschnecken-aka-cinnamon-rolls";

const servings: RecipeServings = {
  amount: 40,
  unit: RecipeServingsUnit.quantity,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
    isGroup: true,
    title: "Hefeteig",
    ingredients: [
      {
        isGroup: false,
        amount: 500,
        unit: RecipeUnit.g,
        ingredient: Ingredients.mehl,
      },
      {
        isGroup: false,
        amount: 240,
        unit: RecipeUnit.g,
        ingredient: Ingredients.milch,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.hefe,
      },
      {
        isGroup: false,
        amount: 2,
        unit: RecipeUnit.quantity,
        ingredient: Ingredients.eigelb,
        description: "(Zimmertemperatur)",
      },
      {
        isGroup: false,
        amount: 80,
        unit: RecipeUnit.g,
        ingredient: Ingredients.zucker,
      },
      {
        isGroup: false,
        amount: 60,
        unit: RecipeUnit.g,
        ingredient: Ingredients.butter,
        description: "(Zimmertemperatur)",
      },
      {
        isGroup: false,
        amount: 2,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.zitronenabrieb,
      },
      {
        isGroup: false,
        amount: 1,
        unit: RecipeUnit.pinch,
        ingredient: Ingredients.salz,
      },
      {
        isGroup: false,
        amount: 1,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.vanillearoma,
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
        amount: 220,
        unit: RecipeUnit.g,
        ingredient: Ingredients.braunerzucker,
      },
      {
        isGroup: false,
        amount: 150,
        unit: RecipeUnit.g,
        ingredient: Ingredients.butter,
        description: "(kalt)"
      },
      {
        isGroup: false,
        amountFrom: 2,
        amountTo: 3,
        unit: RecipeUnit.tl,
        ingredient: Ingredients.zimt,
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
        unit: RecipeUnit.g,
        ingredient: Ingredients.puderzucker,
      },
      {
        isGroup: false,
        amount: 30,
        unit: RecipeUnit.g,
        ingredient: Ingredients.wasser,
      },
      {
        isGroup: false,
        amount: 3,
        unit: RecipeUnit.el,
        ingredient: Ingredients.hagelzucker,
        description: "(optional)",
      },
    ],
  },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
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
        content: "Die Milch in einem Topf lauwarm erwärmen (optimal ist 38 °C, ab 45 Grad beginnt die Hefe abzusterben).",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Topf vom Herd nehmen, die Hefe in die Milch bröckeln und unter Rühren auflösen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Eigelb, Zucker, Salz, Zitronenabrieb und das Vanillearoma dazugeben und grob untermischen. Die weiche Butter in kleinen Würfeln dazugeben.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Das Mehl in die Rührschüssel der Küchenmaschine geben und in die Mitte eine Mulde drücken (man kann den Teig natürlich auch mit der Hand oder einem Rührgerät kneten). Die Milch in die Mulde gießen und etwas Mehl vom Rand darübergeben.",
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
        content: "Hierzu einfach alle Zutaten mit einer Küchenmaschine verühren (normaler Rühraufsatz).",
      },
      {
        isGroup: false,
        type: "step",
        content: "Eine rechteckige Form (40cm x 26cm) mit Backpapier auslegen. Das kann eine Auflaufform aus Keramik oder eine klassische Backform sein. Alternativ kann man den Teig auch in einer runden Form backen.",
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
        content: "Jedes Rechteck sollte ca. 35 cm breit und 25 cm tief sein. &frac14; der Füllung gleichmäßig auf dem Teig verteilen. Nun den Teig von vorne nach hinten aufrollen, so dass eine Rolle entsteht.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Wer exakt gleichgroße Stücke haben möchte, legt nun ein Lineal an und schneidet den Teig alle 3 cm durch. Man kann den Teig aber auch nach Gefühl zerteilen, so dass pro &frac14; ca. 10 Stück entstehen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zimtschnecken mit der flachen Seite nach unten in die Backform legen. Dabei ca. 0,5 cm Platz zwischen den Schnecken lassen, da der Teig noch aufgeht.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Backofen auf 175 °C Ober-/Unterhitze vorheizen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Zimtschnecken sollten jetzt noch mal 20 Minuten gehen, damit sie schön aufgehen. Wer es eilig hat, kann diesen Schritt auch überspringen und die Zimtschnecken in den kalten Backofen stellen. Während des Aufheizvorgangs haben sie so noch etwas Zeit zum Aufgehen.",
      },{
        isGroup: false,
        type: "step",
        content: "Die Schnecken 25 Minuten backen. Falls die Oberfläche zu dunkel wird, sollte man sie mit Alufolie abdecken.",
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
        content: "Während dem Backen die Glasur zubereiten. Hierfür einfach alle Zutaten mit einem Schneebesen verrühren.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Die Glasur mit einem Pinsel auf die noch warmen Zimtschnecken auftragen. Wer möchte, kann noch etwas Hagelzucker darüber streuen.",
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
// - man kann die Rechtecke so zuschneiden, dass die Ränder gerade sind (Optik)
// - wenn die Schnecke nicht gut aussieht, kann man sie rumdrehen
// - man kann die Schnecken vor dem Backen noch etwas platt drücken in der Auflaufform
// - am Besten am gleichen Tag verzehren, über Nacht trock

const notes = [];

const tags = [
  RecipeTags.hefeteig,
  RecipeTags.party,
];

const createdAt = article.createdAt;

const recipe: Recipe = {
  slug: article.slug,
  title: article.title,
  categoryId: RecipeCategories.hefekuchen.id,
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