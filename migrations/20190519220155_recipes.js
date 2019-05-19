
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('recipes', function (table) {
            table.increments('id');
            table.string('a', 255).notNullable();
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable("recipes")
};
