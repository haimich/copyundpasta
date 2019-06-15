
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipes_recipe_tags", function (table) {
            table.increments("id").primary();
            table.string("recipeSlug", 500);
            table.string("tagId", 400);

            table.foreign("recipeSlug").references("recipes.slug");
            table.foreign("tagId").references("recipe_tags.id");

            table.unique("recipeSlug", "tagId"); // prevent duplicate tags
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipes_recipe_tags");
};
