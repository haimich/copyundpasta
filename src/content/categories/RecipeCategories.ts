import { RecipeCategories } from "../../interfaces/Recipe";

export const RECIPE_CATEGORIES: RecipeCategories = {
  kuchen: {
    id: "kuchen",
    name: "Kuchen",
  },
    hefekuchen: {
      id: "hefekuchen",
      name: "Hefekuchen",
      parentCategory: "kuchen",
    },
    frostings: {
      id: "frostings",
      name: "Frostings",
      parentCategory: "kuchen",
    },

  quiches: {
    id: "quiches",
    name: "Quiches",
  },
}