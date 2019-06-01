require("dotenv").config();

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
  production: {
    client: 'mysql',
    connection: {
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'knex_migrations',
    },
  },

};
