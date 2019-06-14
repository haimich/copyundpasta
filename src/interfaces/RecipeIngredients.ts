import { Ingredient } from "./Recipe";

export interface Ingredients {
  [key: string]: Ingredient;
}

export enum RecipeUnit {
  gram = "gram",
  liter = "liter",
  quantity = "quantity",
  el = "el",
  tl = "tl",
  einige = "einige",
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
  kakaopulver: {
    id: "kakaopulver",
    name: "Kakaopulver",
  },
  butter: {
    id: "butter",
    name: "Butter",
  },
  zwiebel: {
    id: "zwiebel",
    name: "Zwiebel",
    namePlural: "Zwiebeln",
  },
}