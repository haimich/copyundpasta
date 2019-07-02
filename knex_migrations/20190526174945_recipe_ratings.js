
exports.up = async function(knex, Promise) {
  await knex.schema
      .createTable("recipe_ratings", function (table) {
          table.string("id", 100).primary();
          table.string("recipeSlug", 500).notNullable().index();
          table.integer("rating").unsigned().notNullable();
          table.string("uniqueIdentifier", 200).notNullable();

          table.unique(["recipeSlug", "uniqueIdentifier"]);
      });
};

exports.down = async function(knex, Promise) {
  await knex.schema
      .dropTable("recipe_ratings");
};
