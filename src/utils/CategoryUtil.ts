import ArticleCategories, { AllArticleCategories, ArticleCategoriesById, ArticleCategory } from "../interfaces/ArticleCategories";
import RecipeCategories, { AllRecipeCategories, RecipeCategoriesById, RecipeCategory } from "../interfaces/RecipeCategories";

export default class CategoryUtil {

  static getAllArticleCategories(): AllArticleCategories {
    let parentCategories: ArticleCategory[] = [];
    let childCategories: ArticleCategory[] = [];
    let categoriesById: ArticleCategoriesById = {};

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

  static getAllRecipeCategories(): AllRecipeCategories {
    let parentCategories: RecipeCategory[] = [];
    let childCategories: RecipeCategory[] = [];
    let categoriesById: RecipeCategoriesById = {};

    for (let category of Object.values(RecipeCategories)) {
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
  static getUniqueArticleCategoryId(categoryId: string, categories: ArticleCategoriesById) {
    return CategoryUtil.getUniqueCategoryId(categoryId, categories);
  }

  /**
   * Concatenates child with parent category ids
   */
  static getUniqueRecipeCategoryId(categoryId: string, categories: RecipeCategoriesById) {
    return CategoryUtil.getUniqueCategoryId(categoryId, categories);
  }

  private static getUniqueCategoryId(categoryId: string, categories: ArticleCategoriesById | RecipeCategoriesById) {
    let uniqueId = categoryId;

    if (categories[categoryId] == null) {
      // invalid category
      return "";
    } else if (categories[categoryId].parentCategory != null) {
      uniqueId = categories[categoryId].parentCategory + "_" + categoryId
    }

    return uniqueId;
  }

  static getFullArticleCategoryName(categoryId: string, categories: ArticleCategoriesById) {
    return CategoryUtil.getFullCategoryName(categoryId, categories);
  }

  static getFullRecipeCategoryName(categoryId: string, categories: RecipeCategoriesById) {
    return CategoryUtil.getFullCategoryName(categoryId, categories);
  }

  private static getFullCategoryName(categoryId: string, categories: ArticleCategoriesById | RecipeCategoriesById) {
    if (categories[categoryId] == null) {
      // invalid category
      return "";
    }
    
    let fullName = categories[categoryId].name;

    if (categories[categoryId].parentCategory != null) {
      let parentCategory = categories[categories[categoryId].parentCategory];

      fullName = parentCategory.name + " " + categories[categoryId].name;
    }

    return fullName;
  }

}