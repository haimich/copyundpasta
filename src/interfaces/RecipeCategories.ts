export interface Category {
  id: string;
  text: string;
}

export interface RecipeCategory {
  [key: string]: Category;
}

const categories: RecipeCategory = {
  desserts: {
    id: "desserts",
    text: "Desserts",
  },
  frostings: {
    id: "frostings",
    text: "Frostings & Fillings",
  },
}

export default categories;