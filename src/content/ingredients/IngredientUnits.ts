import { IngredientUnits } from "../../interfaces/Recipe";

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
    namePlural: "Dosen",
  },
}
