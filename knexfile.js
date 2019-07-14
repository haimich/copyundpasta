require("dotenv").config();
const _ = require("lodash");

const defaultConfig = {
  client:      "mysql",
  connection: {
    database:  "haimich",
    user:      "haimich",
    password:  "haimich",
    host:      "localhost",
    port:      3306,
  },
  debug: false,
  migrations: {
    tableName: "knex_migrations",
    directory: "knex_migrations",
  },
  seeds: {
    // directory: "knex_seeds",
    directory: "knex_seeds/compiled/knex_seeds",
  },
};

let production = _.clone(defaultConfig);

production.connection = {
  database: process.env.DB_DATABASE,
  user:     process.env.DB_USER,
  password: process.env.DB_PW,
};
production.debug = false;

let development = _.clone(defaultConfig);

development.connection = {
  database: "haimich",
  user:     "root",
  password: "password",
  pool: {
    afterCreate: function (conn, done) {
      // this doesn't really work :(
      conn.query("SET character_set_server = utf8mb4;", function (err) {
        console.log("Error during knex setup", err);
      });
    }
  }
};
development.debug = false;

module.exports = {
  development: development,
  test: defaultConfig,
  production,
};
