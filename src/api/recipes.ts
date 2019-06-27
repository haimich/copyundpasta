import { setupExpress } from "./utils/expressUtil";
import { getRecipe } from "./repos/recipeRepo";
import { validateSlug } from "./utils/validatorUtil";

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

export default app;