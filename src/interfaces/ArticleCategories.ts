
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
  rezepte: {
    id: "rezepte",
    name: "Rezepte",
  },
  allgemeines: {
    id: "allgemeines",
    name: "Allgemeines",
  },
}

export default categories;