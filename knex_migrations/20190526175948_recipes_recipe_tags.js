
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipes_recipe_tags", function (table) {
            table.increments("id").primary();
            table.integer("recipeId").unsigned();
            table.string("tagId", 400);

            table.foreign("recipeId").references("recipes.id");
            table.foreign("tagId").references("recipe_tags.id");
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipes_recipe_tags");
};
