import articles from "../src/content/articles/all";
import { Article } from "../src/interfaces/Article";
import { Category } from "../src/interfaces/ArticleCategories";

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
  const categories = getAllCategories(articles);
  await knex("article_categories").insert(categories.parentCategories);
  await knex("article_categories").insert(categories.childCategories);

  console.log("Inserting articles");
  await knex("articles").insert(articles);
}

function getAllCategories(articles: Article[]) {
  let parentCategories: Category[] = [];
  let childCategories: Category[] = [];

  for (let article of articles) {
    if (article.category.parentCategory != null) {
      childCategories.push(article.category);
    } else {
      parentCategories.push(article.category);
    }
  }

  return {
    parentCategories,
    childCategories
  };
}