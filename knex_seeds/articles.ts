import articles from "../src/content/articles/all";

import ArticleCategories, { Category, ArticleCategory } from "../src/interfaces/ArticleCategories";
import { Article } from "@/interfaces/Article";
import SearchService from "../scripts/searchService";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting articles");
  await knex("articles").del();

  console.log("Deleting article categories");
  await knex("article_categories").del();
}

async function createAllEntries(knex) {
  console.log("Inserting article_cateories");

  const categories = getAllCategories(ArticleCategories);
  await knex("article_categories").insert(categories.parentCategories);
  await knex("article_categories").insert(categories.childCategories);

  console.log("Inserting articles");
  await knex("articles").insert(articles);

  console.log("Indexing articles");

  try {
    await SearchService.indexArticles(articles);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

function getAllCategories(categories: ArticleCategory) {
  let parentCategories: Category[] = [];
  let childCategories: Category[] = [];

  for (let category of Object.values(categories)) {
    if (category.parentCategory != null) {
      childCategories.push(category);
    } else {
      parentCategories.push(category);
    }
  }

  return {
    parentCategories,
    childCategories
  };
}