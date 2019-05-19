
export function getRecipes() {
    var knex = require('knex')({
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          user : 'haimich',
          password : 'haimich',
          database : 'haimich'
        }
      });

    return knex.from('recipes')
        .select('a');
}