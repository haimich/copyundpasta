const express = require('express')
const app = express()

app.get('/getRecipe', (req, res) => {
    console.log("Get recipe");

    let recipe = {
        title: "Spinnennetztorte vom Backend 2",
        ingredients: [
            {
                amount: "3",
                unit: "pieces",
                value: "Biskuit Böden",
            },
            {
                amount: "50",
                unit: "ml",
                value: "Rum",
            },
        ],
        directions: [
            "Rum mit Zitronensaft mischen. Ersten Biskuit mit 1/3 davon tränken.",
            "Marzipan auswellen und eine Decke in Durchmesser der Böden ausschneiden und beiseitelegen. Den restlichen Marzipan gestückelt auf den ersten Boden legen. ",
        ]
    };

    res.json(recipe)
})

module.exports = {
   path: '/recipes',
   handler: app
}