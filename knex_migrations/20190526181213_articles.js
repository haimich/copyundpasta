
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("articles", function (table) {
            table.increments("id").primary();
            table.string("slug", 500).notNullable().unique();
            table.boolean("isHeroArticle").defaultTo(false);
            table.string("categoryId", 400);
            table.string("title", 1000).notNullable();
            table.text("shortDescription");
            table.text("previewImageUrl");
            table.text("mainImageUrl");
            table.string("author", 1000).defaultTo("Michael");

            table.timestamp("createdAt").defaultTo(knex.fn.now());
            table.timestamp("modifiedAt").defaultTo(knex.fn.now());

            table.foreign("categoryId").references("article_categories.id");
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("articles");
};
