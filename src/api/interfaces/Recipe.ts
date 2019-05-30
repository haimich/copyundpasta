export enum RecipeUnit {
  gram = "gram",
  liter = "liter",
  unit = "unit",
  el = "el",
  tl = "tl",
  einige = "einige",
}

export interface RecipeIngredient {
  unit: RecipeUnit;
  amount: number;
  name: string;
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
  id: number;
  title: string;
  categoryId: number;
  previewImageUrl: string;
  servings: string;
  description: string;
  ingredients: RecipeIngredient[];
  directions: RecipeStep[];
  notes: string;
  ratings: RecipeRating[];
};