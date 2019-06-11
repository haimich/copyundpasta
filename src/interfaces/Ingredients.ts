export interface Ingredient {
  id: string;
  name: string;
  namePlural?: string;
}

export enum IngredientPreparation {
  gewuerfelt = "gewürfelt",
}

export interface RecipeIngredients {
  [key: string]: Ingredient;
}

const ingredients: RecipeIngredients = {
  salz: {
    id: "salz",
    name: "Salz",
  },
  mehl: {
    id: "mehl",
    name: "Mehl",
  },
  hefe: {
    id: "hefe",
    name: "Hefe",
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

export default ingredients;