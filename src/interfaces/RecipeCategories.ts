export interface Category {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface RecipeCategory {
  [key: string]: Category;
}

const categories: RecipeCategory = {
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