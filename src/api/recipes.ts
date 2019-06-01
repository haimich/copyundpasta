require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require('express-async-errors');
const app = express();

import {getRecipe} from "./repos/recipeRepo";
import {validateId} from "./utils/validatorUtil";

// setup express
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  return res.status(500).send('Something broke!')
});

/**
 * Configure routes
 * - prefix is "/api/recipes/"
 */

app.post("/getRecipe", async (req, res) => {
    // validate params
    const id = validateId(req.body);

    const knex = require("knex")({
        client: "mysql",
        connection: {
          host : "127.0.0.1",
          user : "haimich",
          password : "haimich",
          database : "haimich"
        }
    });

    const recipe = await getRecipe(knex, id);

    if (recipe == null) {
        res.sendStatus(404);
    } else {
        return res.json(recipe);
    }
});

export default app;