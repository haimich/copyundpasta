
exports.up = async function(knex, Promise) {
  await knex.schema
      .createTable("unique_views", function (table) {
          table.increments("id").primary();
          table.string("type", 200).notNullable();
          table.string("entityId", 200).notNullable();
          table.string("uniqueIdentifier", 200).notNullable();

          table.timestamp("createdAt").defaultTo(knex.fn.now());
          table.timestamp("modifiedAt").defaultTo(knex.fn.now());

          table.unique(["type", "entityId", "uniqueIdentifier"]);
          table.index(["type", "entityId"]);
      });
};

exports.down = async function(knex, Promise) {
  await knex.schema
      .dropTable("unique_views");
};
