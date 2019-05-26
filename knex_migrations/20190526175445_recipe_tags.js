
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipe_tags", function (table) {
            table.string("id", 400).primary();
            table.string("name", 1000).notNullable().index();
        });
    
    const recipeTags = getRecipeTags();
    await knex("recipe_tags").insert(recipeTags);
};

function getRecipeTags() {
    return [
      {
        id: "resteverwertung",
        name: "Resteverwertung",
      },
      {
        id: "quicky",
        name: "Quick & Yummy",
      },
    ];
  }
  
exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipe_tags");
};
