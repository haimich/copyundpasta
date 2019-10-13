const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
require("express-async-errors");

import uniqid from "uniqid";

export default class ExpressUtil {

  public static setupExpress() {
    const app = express();
  
    // app.use(helmet()); test if csp problems come from helmet
    app.use(bodyParser.json());
    app.use(compression());
    
    // get rid of nasty header
    app.disable("x-powered-by");

    ExpressUtil.initRateLimiting(app);
    ExpressUtil.initErrorHandling(app);
  
    return app;
  }

  public static getIp(req) {
    let ip = "";

    if (req.connection.remoteAddress != null && req.connection.remoteAddress !== "") {
      ip = req.connection.remoteAddress;
    } else if (req.headers["x-forwarded-for"] != null && req.headers["x-forwarded-for"] !== "") {
      ip = req.headers["x-forwarded-for"];
    } else {
      ip = uniqid();
    }
  }

  private static initRateLimiting(app) {
    app.set("trust proxy", 1); // we are behind a proxy

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 500 // limit each IP to 100 requests per windowMs
    });
    
    app.use(limiter);
  }

  private static initErrorHandling(app) {
    app.use(function (err, req, res, next) {
      console.error(err.stack)
      return res.status(500).send("Es ist ein Fehler aufgetreten");
    });
  }

}