
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
  artikel: {
    id: "artikel",
    name: "artikel",
  },
}

export default categories;