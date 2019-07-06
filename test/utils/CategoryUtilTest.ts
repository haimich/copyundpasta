import CategoryUtil from "@/utils/categoryUtil";
import categories from "@/interfaces/RecipeCategories";

describe("getAllCategories", () => {
  test("should return parent and child categories", () => {
    let categories = CategoryUtil.getAllCategories();

    // console.log(categories);
  });
});

describe("getUniqueCategoryId", () => {
  test("should return concatenated id", () => {
    let categories = CategoryUtil.getAllCategories();

    expect(CategoryUtil.getUniqueCategoryId("herzhaft", categories.categoriesById)).toEqual("rezepte_herzhaft");
  });

  test("should return category id when no parent is present", () => {
    let categories = CategoryUtil.getAllCategories();

    expect(CategoryUtil.getUniqueCategoryId("rezepte", categories.categoriesById)).toEqual("rezepte");
  });
});

describe("getFullCategoryName", () => {
  test("should return category and parent name", () => {
    let categories = CategoryUtil.getAllCategories();

    expect(CategoryUtil.getFullCategoryName("herzhaft", categories.categoriesById)).toEqual("Rezepte Herzhaft");
  });

  test("should return category name when no parent is present", () => {
    let categories = CategoryUtil.getAllCategories();

    expect(CategoryUtil.getFullCategoryName("rezepte", categories.categoriesById)).toEqual("Rezepte");
  });
});
