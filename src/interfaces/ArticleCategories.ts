
export interface Category {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface ArticleCategory {
  [key: string]: Category;
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