import { Tag } from "@/interfaces/RecipeTags";

/* Ingredients (eg. mehl) */

export interface Ingredient {
  id: string;
  name: string;
  namePlural?: string;
}

export interface Ingredients {
  [key: string]: Ingredient;
}

/* Ingredient preparations (eg. gewuerfelt) */

export interface IngredientPreparation {
  id: string;
  name: string;
}

export interface IngredientPreparations {
  [key: string]: IngredientPreparation;
}

/* Ingredient units (eg. gramm) */

export interface IngredientUnit {
  id: string;
  name: string;
}

export interface IngredientUnits {
  [key: string]: IngredientUnit;
}

/* Serving Units (eg. stueck)) */

export interface ServingUnit {
  id: string;
  name: string;
}

export interface ServingUnits {
  [key: string]: ServingUnit;
}

/* Recipe Servings (eg. 12 Stück) */

export interface RecipeServing {
  amount: number;
  unit: ServingUnit;
}

/* Recipe Ingredients */

export interface RecipeIngredientEntry {
  isGroup: boolean;
}

export interface RecipeIngredient extends RecipeIngredientEntry {
  unit?: IngredientUnit;
  amount?: number;
  amountFrom?: number;
  amountTo?: number;
  ingredient: Ingredient;
  description?: string;
  preparation?: IngredientPreparation;
}

export interface RecipeIngredientGroup extends RecipeIngredientEntry {
  title: string;
  ingredients: RecipeIngredient[];
}

/* Recipe Steps */

export interface RecipeStepEntry {
  isGroup: boolean;
}

export interface RecipeStepGroup extends RecipeStepEntry {
  title: string;
  steps: RecipeStep[];
}

export interface RecipeStep extends RecipeStepEntry {
  type: "step";
  content: string;
}

/* Recipe Rating */

export interface RecipeRating {
  date: number;
  value: number;
}

/* Recipe Categories */

export interface RecipeCategory {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface RecipeCategories {
  [key: string]: RecipeCategory;
}

export interface AllRecipeCategories {
  parentCategories: RecipeCategory[];
  childCategories: RecipeCategory[];
  categoriesById: RecipeCategories;
}

/* Recipe */

export interface Recipe {
  slug: string;
  title: string;
  categoryId: string;
  previewImageUrl: string;
  servings: RecipeServing;
  description?: string;
  ingredients: (RecipeIngredientGroup|RecipeIngredient)[];
  steps: (RecipeStepGroup|RecipeStep)[];
  notes: string[];
  rating?: number;
  tags?: Tag[];
  createdAt?: string;
  modifiedAt?: string;
};
