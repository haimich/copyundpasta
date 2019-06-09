import fs from "promise-fs";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting articles");
  await knex("articles").del();
}

async function createAllEntries(knex) {
  console.log("Inserting articles");
  
  const articles = await getArticles();

  console.log(articles);

  await knex("articles").insert(articles);
}

async function getArticles() {
  let articles = [];

  const files = await fs.readdir("../src/articles");

  for (let file of files) {
    articles.push(require("../src/articles/" + file));
  }

  return articles;
}