
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("recipe_categories", function (table) {
            table.string("id", 400).primary();
            table.string("parentCategory", 400);
            table.string("name", 1000).notNullable().index();

            table.foreign("parentCategory").references("recipe_categories.id");
        });
    
    const recipeCategories = getRecipeCategories();
    await knex("recipe_categories").insert(recipeCategories);
};

function getRecipeCategories() {
    return [
      {
        id: "herzhaft",
        name: "Herzhaft",
      },
      {
        id: "pizza",
        name: "Pizza",
      },
      {
        id: "flammkuchen",
        name: "Flammkuchen",
        parentCategory: "pizza",
      },
      {
        id: "pasta",
        name: "Pasta",
      },
      {
        id: "brot",
        name: "Brot",
      },
    ]
  }

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("recipe_categories");
};
