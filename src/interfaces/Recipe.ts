import { Ingredient, IngredientPreparation } from "@/interfaces/Ingredients";
import { Category } from "@/interfaces/RecipeCategories";

export enum RecipeUnit {
  gram = "gram",
  liter = "liter",
  quantity = "quantity",
  el = "el",
  tl = "tl",
  einige = "einige",
}

export interface RecipeIngredient {
  unit?: RecipeUnit;
  amount?: number;
  ingredient: Ingredient;
  preparation?: IngredientPreparation;
}

export interface RecipeStep {
  type: "step";
  content: string;
}

export interface RecipeRating {
  date: number;
  value: number;
}

export interface RecipeServings {
  unit: RecipeUnit;
  amount: number;
}

export interface Recipe {
  id?: number;
  slug: string;
  title: string;
  category: Category;
  previewImageUrl: string;
  servings: RecipeServings;
  description: string;
  ingredients: RecipeIngredient[];
  directions: RecipeStep[];
  notes: string[];
  ratings?: RecipeRating[];
};