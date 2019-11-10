
exports.up = async function(knex, Promise) {
  await knex.schema.table("articles", function(table) {
    table.text("wideImageUrl");
  });
};

exports.down = async function(knex, Promise) {
  // ignore
};
