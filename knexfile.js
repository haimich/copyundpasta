
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'haimich',
      user:     'haimich',
      password: 'haimich'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
