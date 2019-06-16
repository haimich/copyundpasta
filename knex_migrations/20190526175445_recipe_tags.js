
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipe_tags", function (table) {
            table.string("id", 100).primary();
            table.string("name", 1000).notNullable();
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipe_tags");
};
