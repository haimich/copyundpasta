import { setupExpress } from "./utils/expressUtil";
import { getRecipe, rateRecipe } from "./repos/recipeRepo";
import { validateSlug, validateRating } from "./utils/validatorUtil";

let app = setupExpress();

/**
 * Configure routes
 * - prefix is "/api/recipes/"
 */

app.post("/getRecipe", async (req, res) => {
    console.log("getRecipe");

    // validate params
    let slug;

    try {
       slug = validateSlug(req.body);
    } catch (err) {
        console.error(err);

        return res.status(406).send(err.message);
    }

    const recipe = await getRecipe(slug);

    if (recipe == null) {
        res.sendStatus(404);
    } else {
        return res.json(recipe);
    }
});

app.post("/rateRecipe", async (req, res) => {
    console.log("rateRecipe");

    // validate params
    let rating;

    try {
       rating = validateRating(req.body);
    } catch (err) {
        console.error(err);

        return res.status(406).send(err.message);
    }

    await rateRecipe(rating);
});

export default app;