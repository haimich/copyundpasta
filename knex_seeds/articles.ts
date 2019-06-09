import articles from "../src/articles/all";

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

  await knex("articles").insert(articles);
}