
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'haimich',
      user:     'haimich',
      password: 'haimich'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'knex_migrations',
    },
    seeds: {
      directory: 'knex_seeds',
    },
  },

};
