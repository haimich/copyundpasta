
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("recipe_categories", function (table) {
            table.string("id", 400).primary();
            table.string("parentCategory", 400);
            table.string("name", 1000).notNullable().index();

            table.foreign("parentCategory").references("recipe_categories.id");
        })
        .createTable("recipe_tags", function (table) {
            table.string("id", 400).primary();
            table.string("name", 1000).notNullable().index();
        })
        .createTable("recipes", function (table) {
            table.increments("id").primary();
            table.string("title", 1000).notNullable().index();
            table.string("slug", 1000).notNullable().unique();
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
        .createTable("recipes_recipe_tags", function (table) {
            table.increments("id").primary();
            table.integer("recipeId").unsigned();
            table.string("tagId", 400);

            table.foreign("recipeId").references("recipes.id");
            table.foreign("tagId").references("recipe_tags.id");
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable("recipes_recipe_tags")
        .dropTable("recipes")
        .dropTable("recipe_tags")
        .dropTable("recipe_categories")
};
