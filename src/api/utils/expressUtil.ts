const express = require("express");
const compression = require('compression');
const bodyParser = require("body-parser");
require('express-async-errors');

export default class ExpresUtil {

  public static setupExpress() {
    const app = express();
  
    app.use(bodyParser.json());
    app.use(compression());
  
    app.use(function (err, req, res, next) {
      console.error(err.stack)
      return res.status(500).send("Es ist ein Fehler aufgetreten");
    });
  
    return app;
  }

}