const express = require("express");
const bodyParser = require("body-parser");
require('express-async-errors');

export function setupExpress() {
  const app = express();

  app.use(bodyParser.json());

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    return res.status(500).send("Es ist ein Fehler aufgetreten");
  });

  return app;
}