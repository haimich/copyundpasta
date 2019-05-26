
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipes", function (table) {
            table.increments("id").primary();
            table.string("title", 1000).notNullable().index();
            table.string("categoryId", 400);
            table.text("previewImageUrl");
            table.text("servings");
            table.text("description");
            table.text("ingredients");
            table.text("directions");
            table.text("notes");
            table.text("ratings");
            table.timestamps(true, true);

            table.foreign("categoryId").references("recipe_categories.id");
        })
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipes");
};
