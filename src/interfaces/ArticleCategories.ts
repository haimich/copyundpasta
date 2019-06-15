
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
    id: "rezept",
    name: "Rezept",
  },
  herzhaft: {
    id: "herzhaft",
    name: "herzhaft",
    parentCategory: "rezept",
  },
}

export default categories;