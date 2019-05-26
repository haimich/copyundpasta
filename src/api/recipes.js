const express = require('express');
const app = express();

import {getRecipe} from "./repos/recipeRepo";

app.post('/getRecipe', async (req, res) => {
    console.log("getRecipe");

    var knex = require('knex')({
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          user : 'haimich',
          password : 'haimich',
          database : 'haimich'
        }
    });

    const recipe = await getRecipe(knex, 1);

    res.json(recipe)
})

module.exports = {
   path: '/recipes',
   handler: app
}