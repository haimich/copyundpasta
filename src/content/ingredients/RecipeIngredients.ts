import { Ingredients, IngredientPreparations, IngredientUnits, ServingUnits } from "../../interfaces/Recipe";

/**
 * This file contains a list of all available ingredients,
 * preparations, servings etc.
 */

export const RECIPE_SERVINGS: ServingUnits = {
  stueck: {
    id: "stueck",
    name: "Stück",
  },
  portionen: {
    id: "portionen",
    name: "Portionen",
  }
}

export const INGREDIENT_UNITS: IngredientUnits = {
  gramm: {
    id: "gramm",
    name: "g",
  },
  liter: {
    id: "liter",
    name: "l",
  },
  milliliter: {
    id: "milliliter",
    name: "ml",
  },
  stueck: {
    id: "stueck",
    name: "",
  },
  el: {
    id: "el",
    name: "EL",
  },
  tl: {
    id: "tl",
    name: "TL",
  },
  einige: {
    id: "einige",
    name: "einige",
  },
  prise: {
    id: "prise",
    name: "Prise",
  },
  dose: {
    id: "dose",
    name: "Dose",
  },
}

export const INGREDIENT_PREPARATIONS: IngredientPreparations = {
  gewuerfelt: {
    id: "gewuerfelt",
    name: "gewürfelt",
  },
  halbiert: {
    id: "halbiert",
    name: "halbiert",
  },
}

export const INGREDIENTS: Ingredients = {
  salz: {
    id: "salz",
    name: "Salz",
  },
  wasser: {
    id: "wasser",
    name: "Wasser",
  },
  mehl: {
    id: "mehl",
    name: "Mehl",
  },
  hefe: {
    id: "hefe",
    name: "Hefe",
  },
  backpulver: {
    id: "backpulver",
    name: "Backpulver",
  },
  zucker: {
    id: "zucker",
    name: "Zucker",
  },
  puderzucker: {
    id: "puderzucker",
    name: "Puderzucker",
  },
  braunerzucker: {
    id: "braunerzucker",
    name: "brauner Zucker",
  },
  hagelzucker: {
    id: "hagelzucker",
    name: "Hagelzucker",
  },
  milch: {
    id: "milch",
    name: "Milch",
  },
  ei: {
    id: "ei",
    name: "Ei",
    namePlural: "Eier",
  },
  eigelb: {
    id: "eigelb",
    name: "Eigelb",
    namePlural: "Eigelbe",
  },
  kakaopulver: {
    id: "kakaopulver",
    name: "Kakaopulver",
  },
  vanillearoma: {
    id: "vanillearoma",
    name: "Vanillearoma",
  },
  butter: {
    id: "butter",
    name: "Butter",
  },
  zimt: {
    id: "zimt",
    name: "Zimt",
  },
  zitronenabrieb: {
    id: "zitronenabrieb",
    name: "Abrieb einer unbehandelten Zitrone",
  },
  zwiebel: {
    id: "zwiebel",
    name: "Zwiebel",
    namePlural: "Zwiebeln",
  },
  knoblauchzehe: {
    id: "knoblauchzehe",
    name: "Knoblauchzehe",
    namePlural: "Knoblauchzehen",
  },
  spaghetti: {
    id: "spaghetti",
    name: "Spaghetti",
  },
  kirschtomaten: {
    id: "kirschtomaten",
    name: "Kirschtomaten",
  },
  tomatenkonserve_stueckig: {
    id: "tomatenkonserve_stueckig",
    name: "stückige Tomaten",
  },
}