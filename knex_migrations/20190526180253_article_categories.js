
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("article_categories", function (table) {
            table.string("id", 400).primary();
            table.string("parentCategory", 400);
            table.string("name", 1000).notNullable().index();

            table.foreign("parentCategory").references("article_categories.id");
        });
            
    const articleCategories = getArticleCategories();
    await knex("article_categories").insert(articleCategories);
};

function getArticleCategories() {
    return [
      {
        id: "herzhaft",
        name: "Herzhaft",
      },
      {
        id: "suess",
        name: "Süß",
      },
    ];
  }

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("article_categories");
};
