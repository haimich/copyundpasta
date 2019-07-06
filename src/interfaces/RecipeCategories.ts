
export interface RecipeCategory {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface RecipeCategoriesById {
  [key: string]: RecipeCategory;
}

export interface AllRecipeCategories {
  parentCategories: RecipeCategory[];
  childCategories: RecipeCategory[];
  categoriesById: RecipeCategoriesById;
}

const categories: RecipeCategoriesById = {
  desserts: {
    id: "desserts",
    name: "Desserts",
  },
  kuchen: {
    id: "kuchen",
    name: "Kuchen",
  },
  frostings: {
    id: "frostings",
    name: "Frostings & Fillings",
    parentCategory: "kuchen",
  },
}

export default categories;