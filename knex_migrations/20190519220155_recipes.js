
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("recipe_categories", function (table) {
            table.increments("id").primary();
            table.integer("parent_category");
            table.string("name", 1000);
        })
        .createTable("recipes", function (table) {
            table.increments("id").primary();
            table.foreign("category_id").references("recipe_categories.id");
            table.string("title", 1000).notNullable().index();
            table.text("description").nullable();
            table.text("directions").notNullable();
            table.text("notes").nullable();
            table.timestamps(true, true);
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable("recipes")
        .dropTable("recipe_categories");
};
