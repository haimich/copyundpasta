
export interface Category {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface ArticleCategory {
  [key: string]: Category;
}

export interface CategoriesById {
  [key: string]: Category;
}

export interface AllCategories {
  parentCategories: Category[];
  childCategories: Category[];
  categoriesById: CategoriesById;
}

const categories: ArticleCategory = {
  rezept: {
    id: "rezepte",
    name: "Rezepte",
  },
  herzhaft: {
    id: "herzhaft",
    name: "Herzhaft",
    parentCategory: "rezepte",
  },
}

export default categories;