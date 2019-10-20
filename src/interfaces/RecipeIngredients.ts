import { Ingredient } from "./Recipe";

export interface Ingredients {
  [key: string]: Ingredient;
}

export enum RecipeUnit {
  g = "gram",
  l = "liter",
  quantity = "quantity",
  el = "el",
  tl = "tl",
  einige = "einige",
  pinch = "pinch",
}

export enum RecipeServingsUnit {
  quantity = "quantity",
}

export enum IngredientPreparation {
  gewuerfelt = "gewürfelt",
}

export const Ingredients: Ingredients = {
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
}