
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
  kuchen: {
    id: "kuchen",
    name: "Kuchen",
  },
  hefekuchen: {
    id: "hefekuchen",
    name: "Hefekuchen",
    parentCategory: "kuchen",
  },
}

export default categories;