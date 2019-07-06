
export interface ArticleCategory {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface ArticleCategoriesById {
  [key: string]: ArticleCategory;
}

export interface AllArticleCategories {
  parentCategories: ArticleCategory[];
  childCategories: ArticleCategory[];
  categoriesById: ArticleCategoriesById;
}

const categories: ArticleCategoriesById = {
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