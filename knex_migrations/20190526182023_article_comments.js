
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("article_comments", function (table) {
            table.increments("id").primary();
            table.integer("parentCommentId").unsigned().index();
            table.integer("articleId").unsigned().notNullable().index();
            table.text("content").notNullable();
            table.string("email", 1000);
            table.string("author", 1000).notNullable();
            table.text("avatarUrl");
            
            table.timestamp("createdAt").defaultTo(knex.fn.now());
            table.timestamp("modifiedAt").defaultTo(knex.fn.now());

            table.foreign("articleId").references("articles.id");
            table.foreign("parentCommentId").references("article_comments.id");
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("article_comments");
};
