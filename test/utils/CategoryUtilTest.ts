import CategoryUtil from "@/utils/categoryUtil";
import categories from "@/interfaces/RecipeCategories";

describe("getAllArticleCategories", () => {
  test("should return parent and child categories", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    // console.log(categories);
  });
});

describe("getAllRecipeCategories", () => {
  test("should return parent and child categories", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    // console.log(categories);
  });
});

describe("getUniqueArticleCategoryId", () => {
  test("should return empty string if category is invalid", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getUniqueArticleCategoryId("blablupp", categories.categoriesById)).toEqual("");
  });

  test("should return concatenated id", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getUniqueArticleCategoryId("herzhaft", categories.categoriesById)).toEqual("rezepte_herzhaft");
  });

  test("should return category id when no parent is present", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getUniqueArticleCategoryId("rezepte", categories.categoriesById)).toEqual("rezepte");
  });
});

describe("getUniqueRecipeCategoryId", () => {
  test("should return empty string if category is invalid", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getUniqueRecipeCategoryId("blablupp", categories.categoriesById)).toEqual("");
  });

  test("should return concatenated id", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getUniqueRecipeCategoryId("frostings", categories.categoriesById)).toEqual("kuchen_frostings");
  });

  test("should return category id when no parent is present", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getUniqueRecipeCategoryId("desserts", categories.categoriesById)).toEqual("desserts");
  });
});

describe("getFullArticleCategoryName", () => {
  test("should return empty string is category is invalid", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getFullArticleCategoryName("blablupp", categories.categoriesById)).toEqual("");
  });

  test("should return category and parent name", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getFullArticleCategoryName("herzhaft", categories.categoriesById)).toEqual("Rezepte Herzhaft");
  });

  test("should return category name when no parent is present", () => {
    let categories = CategoryUtil.getAllArticleCategories();

    expect(CategoryUtil.getFullArticleCategoryName("rezepte", categories.categoriesById)).toEqual("Rezepte");
  });
});

describe("getFullRecipeCategoryName", () => {
  test("should return empty string is category is invalid", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getFullRecipeCategoryName("blablupp", categories.categoriesById)).toEqual("");
  });

  test("should return category and parent name", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getFullRecipeCategoryName("frostings", categories.categoriesById)).toEqual("Kuchen Frostings & Fillings");
  });

  test("should return category name when no parent is present", () => {
    let categories = CategoryUtil.getAllRecipeCategories();

    expect(CategoryUtil.getFullRecipeCategoryName("kuchen", categories.categoriesById)).toEqual("Kuchen");
  });
});
