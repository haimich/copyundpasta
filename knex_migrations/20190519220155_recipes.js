
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("recipe_categories", function (table) {
            table.string("id", 400).primary();
            table.string("parentCategory", 400);
            table.string("name", 1000).notNullable().index();

            table.foreign("parentCategory").references("recipe_categories.id");
        })
        .createTable("recipes", function (table) {
            table.increments("id").primary();
            table.string("title", 1000).notNullable().index();
            table.string("categoryId", 400);
            table.text("description");
            table.text("ingredients").notNullable();
            table.text("directions").notNullable();
            table.text("notes");
            table.text("ratings");
            table.timestamps(true, true);

            table.foreign("categoryId").references("recipe_categories.id");
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable("recipes")
        .dropTable("recipe_categories");
};
