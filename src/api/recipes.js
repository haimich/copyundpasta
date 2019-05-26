const express = require("express");
const bodyParser = require("body-parser");
const app = express();

import {getRecipe} from "./repos/recipeRepo";
import {validateId} from "./utils/validatorUtil";

// setup app
app.use(bodyParser.json())

app.post("/getRecipe", async (req, res) => {
    console.log("getRecipe");

    // validate params
    try {
        const id = validateId(req.body);
    } catch (err) {
        return res.status(500).send(err);
    }

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
})

module.exports = {
   path: '/recipes',
   handler: app
}