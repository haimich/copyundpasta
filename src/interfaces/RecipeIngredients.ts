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
  zitronenabrieb: {
    id: "zitronenabrieb",
    name: "Abrieb einer unbehandelten Zitrone",
    namePlural: "Abrieb von unbehandelten Zitronen",
  },
  zwiebel: {
    id: "zwiebel",
    name: "Zwiebel",
    namePlural: "Zwiebeln",
  },
}