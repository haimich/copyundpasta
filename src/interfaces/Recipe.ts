import { IngredientPreparation, RecipeUnit } from "@/interfaces/RecipeIngredients";
import { Category } from "@/interfaces/RecipeCategories";

export interface Ingredient {
  id: string;
  name: string;
  namePlural?: string;
}

export interface RecipeIngredient {
  unit?: RecipeUnit;
  amount?: number;
  amountFrom?: number;
  amountTo?: number;
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
  createdAt?: string;
  modifiedAt?: string;
};