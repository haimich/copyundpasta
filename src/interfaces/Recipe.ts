import { IngredientPreparation, RecipeUnit } from "@/interfaces/RecipeIngredients";
import { Category } from "@/interfaces/RecipeCategories";

export interface Ingredient {
  id: string;
  name: string;
  namePlural?: string;
}

export interface RecipeIngredientGroup extends RecipeIngredientEntry {
  isGroup: true;
  title: string;
  ingredients: RecipeIngredient[];
}

export interface RecipeIngredient extends RecipeIngredientEntry {
  unit?: RecipeUnit;
  amount?: number;
  amountFrom?: number;
  amountTo?: number;
  ingredient: Ingredient;
  preparation?: IngredientPreparation;
}

export interface RecipeIngredientEntry { }

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
  ingredients: (RecipeIngredientGroup|RecipeIngredient)[];
  directions: RecipeStep[];
  notes: string[];
  ratings?: RecipeRating[];
  createdAt?: string;
  modifiedAt?: string;
};