
exports.up = async function(knex, Promise) {
    await knex.schema
        .createTable("article_comments", function (table) {
            table.increments("id").primary();
            table.string("articleSlug", 500).notNullable().index();
            table.integer("parentCommentId").unsigned().references("id").inTable("article_comments");
            table.text("content").notNullable();
            table.string("author", 1000).notNullable();
            table.string("email", 1000);
            table.text("avatarUrl");
            
            table.timestamp("createdAt").defaultTo(knex.fn.now());
            table.timestamp("modifiedAt").defaultTo(knex.fn.now());
        });
};

exports.down = async function(knex, Promise) {
    await knex.schema
        .dropTable("article_comments");
};
