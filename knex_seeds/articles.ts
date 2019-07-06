import articles from "../src/content/articles/all";
import SearchService from "./services/searchService";
import CategoryUtil from "../src/utils/CategoryUtil";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting articles");
  await knex("articles").del();

  console.log("Deleting article categories");
  await knex("article_categories").del();

  try {
    console.log("Deleting articles index");
    await SearchService.deleteArticlesIndex();
  } catch (err) {
    if (err.response != null && err.response.data != null) {
      console.log(err.response.data.error);
    } else {
      console.log(err);
    }

    process.exit(1);
  }
}

async function createAllEntries(knex) {
  console.log("Inserting article_cateories");

  const categories = CategoryUtil.getAllCategories();
  await knex("article_categories").insert(categories.parentCategories);
  await knex("article_categories").insert(categories.childCategories);

  console.log("Inserting articles");
  await knex("articles").insert(articles);
  
  try {
    console.log("Indexing articles");
    await SearchService.indexArticles(articles, categories);
  } catch (err) {
    if (err.response != null && err.response.data != null) {
      console.log(err.response.data.error);
    } else {
      console.log(err);
    }

    process.exit(1);
  }
}