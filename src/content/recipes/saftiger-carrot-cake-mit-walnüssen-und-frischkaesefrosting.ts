import { Recipe, RecipeStep, RecipeServing, RecipeIngredient, RecipeIngredientEntry, RecipeIngredientGroup, RecipeStepGroup } from "../../interfaces/Recipe";
import { INGREDIENTS } from "../ingredients/Ingredients";
import { INGREDIENT_PREPARATIONS } from "../ingredients/IngredientPreparations";
import { INGREDIENT_UNITS } from "../ingredients/IngredientUnits";
import { RECIPE_SERVINGS } from "../ingredients/RecipeServings";
import { RECIPE_CATEGORIES } from "../categories/RecipeCategories";
import { RECIPE_TAGS } from "../categories/RecipeTags";

import article from "../articles/saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";

const servings: RecipeServing = {
  amount: 25,
  unit: RECIPE_SERVINGS.cm_backform_rund,
};

const ingredients: (RecipeIngredientGroup|RecipeIngredient)[] = [
  {
   isGroup: true,
    title: "Teig",
    ingredients: [
      {
        isGroup: false,
        amount: 270,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.karotten,
        description: "(mit Schale gewogen)",
      },
      {
        isGroup: false,
        amount: 150,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.walnuesse,
      },
      {
        isGroup: false,
        amount: 200,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.braunerzucker,
      },
      {
        isGroup: false,
        amount: 170,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.pflanzenoel,
        description: "(z. B. Rapsöl oder Sonnenblumenöl)",
      },
      {
        isGroup: false,
        amount: 3,
        unit: INGREDIENT_UNITS.el,
        ingredient: INGREDIENTS.joghurt,
        description: "(3,5% Fett)",
      },
      {
        isGroup: false,
        amount: 3,
        unit: INGREDIENT_UNITS.stueck,
        ingredient: INGREDIENTS.ei,
        description: "(Raumtemperatur)",
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.vanillearoma,
        description: "(oder Mark einer Vanilleschote)",
      },
      {
        isGroup: false,
        amount: 250,
        unit: INGREDIENT_UNITS.gramm,
        ingredient: INGREDIENTS.mehl,
      },
      {
        isGroup: false,
        amount: 1,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.backpulver,
      },
      {
        isGroup: false,
        amount: 2,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.zimt,
      },
      {
        isGroup: false,
        amount: 0.5,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.muskatnuss,
      },
      {
        isGroup: false,
        amount: 0.5,
        unit: INGREDIENT_UNITS.tl,
        ingredient: INGREDIENTS.salz,
      },
    ],
  },

  {
    isGroup: true,
     title: "Frosting",
     ingredients: [
       {
         isGroup: false,
         amount: 300,
         unit: INGREDIENT_UNITS.gramm,
         ingredient: INGREDIENTS.frischkaese,
       },
       {
         isGroup: false,
         amount: 120,
         unit: INGREDIENT_UNITS.gramm,
         ingredient: INGREDIENTS.butter,
         description: "(Raumtemperatur)",
       },
       {
         isGroup: false,
         amount: 100,
         unit: INGREDIENT_UNITS.gramm,
         ingredient: INGREDIENTS.puderzucker,
       },
       {
         isGroup: false,
         amount: 1,
         unit: INGREDIENT_UNITS.stueck,
         ingredient: INGREDIENTS.vanilleschote,
       },
       {
         isGroup: false,
         amount: 1,
         unit: INGREDIENT_UNITS.prise,
         ingredient: INGREDIENTS.salz,
       },
     ],
   },

   {
    isGroup: true,
     title: "Dekoration",
     ingredients: [
       {
         isGroup: false,
         amount: 100,
         unit: INGREDIENT_UNITS.gramm,
         ingredient: INGREDIENTS.pistazien,
         description: "(optional)",
       },
     ],
   },
];

const steps: (RecipeStepGroup|RecipeStep)[] = [
  {
   isGroup: true,
    title: "Vorbereitung",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Eier und die Butter für das Frosting aus dem Kühlschrank nehmen, damit sie Raumtemperatur annehmen können.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Eine Springform mit ca. 25 cm Durchmesser mit Butter ausreiben.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Backofen auf 175°C Ober-/Unterhitze vorheizen.",
      },
    ],
  },

  {
   isGroup: true,
    title: "Teig",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Die Karotten schälen, waschen und fein reiben. Die Walnüsse grob zerkleinern und in einer Pfanne bei mittlerer Hitze trocken rösten.",
      },
      {
        isGroup: false,
        type: "step",
        content: "In einer Schüssel das Mehl mit dem Backpulver vermischen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "In einer separaten Schüssel Braunen Zucker, Salz, Öl, Eier, Vanille, Zimt, Muskat und Joghurt verquirlen, bis eine homogene Masse entstanden ist.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Das Mehl nach und nach in den flüssigen Teig sieben und mit einem Teigschaber unterheben, bis sich das Mehl gut verbunden hat. Nun die Karotten ebenfalls unter den Teig heben, anschließend folgen die gehackten Walnüssen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Boden und Rand der gefetteten Backform mit braunem Zucker bestreuen. Dieser karamellisiert wunderbar beim Backen und sorgt für noch mehr Geschmack.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Teig in die Form füllen und den Kuchen bei 175°C Ober-/Unterhitze 40-45 min. backen. Um zu sehen, ob der Kuchen fertig ist, könnt ihr ein Holz- oder Metallstäbchen hineinstecken (Stäbchenprobe): wenn kein Teig daran haftet, könnt ihr ihn aus dem Ofen nehmen.",
      },
    ],
  },

  {
   isGroup: true,
    title: "Frosting",
    steps: [
      {
        isGroup: false,
        type: "step",
        content: "Das Frosting könnt ihr bereits zubereiten, wenn der Kuchen gerade im Ofen ist. Dazu zunächst die Vanilleschote aufschneiden und das Mark herauskratzen.",
      },
      {
        isGroup: false,
        type: "step",
        content: "Den Frischkäse mit der Butter cremig aufschlagen und danach den Puderzucker hineinsieben. Gut verrühren, bis eine glatte Creme entstanden ist. Mit dem Mark der Vanilleschote und etwas Salz abschmecken. Das Frosting für ca. 30 Minuten in den Kühlschrank stellen, damit es sich besser verarbeiten lässt.",
      },
    ],
  },
];

// Tipps:
// - bei der Backzeit nicht nur auf die Zeit schauen, auch Geruch und Optik; außerdem Stäbchentest

const notes = [];

const tags = [
  RECIPE_TAGS.ruehrkuchen,
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