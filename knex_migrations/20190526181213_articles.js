
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("articles", function (table) {
            table.increments("id").primary();
            table.string("slug", 500).notNullable().unique();
            table.string("categoryId", 400);
            table.string("title", 1000).notNullable().index();
            table.text("shortDescription");
            table.text("previewImageUrl");
            table.string("author", 1000);
            table.timestamps(true, true);

            table.foreign("categoryId").references("article_categories.id");
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("articles");
};
