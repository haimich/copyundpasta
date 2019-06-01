require("dotenv").config();
const config = require(__dirname + "/../../../knexfile");

let env = "development";

if (process.env.NODE_ENV != null && process.env.NODE_ENV !== "") {
  env = process.env.NODE_ENV;
}

const knex = require('knex')(config[env]);

export function getConnection() {
  return knex;
}