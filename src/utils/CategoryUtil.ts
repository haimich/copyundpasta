import ArticleCategories, { Category, ArticleCategory, AllCategories, CategoriesById } from "../interfaces/ArticleCategories";

export default class CategoryUtil {

  static getAllCategories(): AllCategories {
    let parentCategories: Category[] = [];
    let childCategories: Category[] = [];
    let categoriesById: CategoriesById = {};

    for (let category of Object.values(ArticleCategories)) {
      categoriesById[category.id] = category;

      if (category.parentCategory != null) {
        childCategories.push(category);
      } else {
        parentCategories.push(category);
      }
    }

    return {
      parentCategories,
      childCategories,
      categoriesById,
    };
  }

  /**
   * Concatenates child with parent category ids
   */
  static getUniqueCategoryId(categoryId: string, categories: CategoriesById) {
    let uniqueId = categoryId;

    if (categories[categoryId].parentCategory != null) {
      uniqueId = categories[categoryId].parentCategory + "_" + categoryId
    }

    return uniqueId;
  }

  static getFullCategoryName(categoryId: string, categories: CategoriesById) {
    let fullName = categories[categoryId].name;

    if (categories[categoryId].parentCategory != null) {
      let parentCategory = categories[categories[categoryId].parentCategory];

      fullName = parentCategory.name + " " + categories[categoryId].name;
    }

    return fullName;
  }

}