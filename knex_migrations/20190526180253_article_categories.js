
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("article_categories", function (table) {
            table.string("id", 400).primary();
            table.string("name", 1000).notNullable();
            table.string("parentCategory", 400);

            table.foreign("parentCategory").references("article_categories.id");
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("article_categories");
};
