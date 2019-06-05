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
}

export default categories;