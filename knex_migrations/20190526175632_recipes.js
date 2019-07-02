
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipes", function (table) {
            table.increments("id").primary();
            table.string("slug", 500).notNullable().unique();
            table.string("title", 1000).notNullable();
            table.string("categoryId", 400);
            table.text("previewImageUrl");
            table.text("servings");
            table.text("description");
            table.text("ingredients");
            table.text("steps");
            table.text("notes");
            
            table.timestamp("createdAt").defaultTo(knex.fn.now());
            table.timestamp("modifiedAt").defaultTo(knex.fn.now());

            table.foreign("categoryId").references("recipe_categories.id");
        })
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipes");
};
