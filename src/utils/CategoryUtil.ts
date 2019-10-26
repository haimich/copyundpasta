import { AllArticleCategories, ArticleCategories, ArticleCategory } from "../interfaces/Article";
import { AllRecipeCategories, RecipeCategories, RecipeCategory } from "../interfaces/Recipe";
import { RECIPE_CATEGORIES } from "../content/categories/RecipeCategories";
import { ARTICLE_CATEGORIES } from "../content/categories/ArticleCategories";

export default class CategoryUtil {

  static getAllArticleCategories(): AllArticleCategories {
    let parentCategories: ArticleCategory[] = [];
    let childCategories: ArticleCategory[] = [];
    let categoriesById: ArticleCategories = {};

    for (let category of Object.values(ARTICLE_CATEGORIES)) {
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
    let categoriesById: RecipeCategories = {};

    for (let category of Object.values(RECIPE_CATEGORIES)) {
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
  static getUniqueArticleCategoryId(categoryId: string, categories: ArticleCategories) {
    return CategoryUtil.getUniqueCategoryId(categoryId, categories);
  }

  /**
   * Concatenates child with parent category ids
   */
  static getUniqueRecipeCategoryId(categoryId: string, categories: RecipeCategories) {
    return CategoryUtil.getUniqueCategoryId(categoryId, categories);
  }

  private static getUniqueCategoryId(categoryId: string, categories: ArticleCategories | RecipeCategories) {
    let uniqueId = categoryId;

    if (categories[categoryId] == null) {
      // invalid category
      return "";
    } else if (categories[categoryId].parentCategory != null) {
      uniqueId = categories[categoryId].parentCategory + "_" + categoryId
    }

    return uniqueId;
  }

  static getFullArticleCategoryName(categoryId: string, categories: ArticleCategories) {
    return CategoryUtil.getFullCategoryName(categoryId, categories);
  }

  static getFullRecipeCategoryName(categoryId: string, categories: RecipeCategories) {
    return CategoryUtil.getFullCategoryName(categoryId, categories);
  }

  private static getFullCategoryName(categoryId: string, categories: ArticleCategories | RecipeCategories) {
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