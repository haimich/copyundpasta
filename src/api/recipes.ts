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
    const slug = validateSlug(req.body);

    const recipe = await getRecipe(slug);

    if (recipe == null) {
        res.sendStatus(404);
    } else {
        return res.json(recipe);
    }
});

export default app;