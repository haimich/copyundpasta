import recipes from "../src/recipes/all";

exports.seed = async function(knex, Promise) {
  await deleteAllEntries(knex);

  await createAllEntries(knex);
};

async function deleteAllEntries(knex) {
  console.log("Deleting recipes");
  await knex("recipes").del();
}

async function createAllEntries(knex) {
  console.log("Inserting recipes");

  await knex("recipes").insert(recipes);
}