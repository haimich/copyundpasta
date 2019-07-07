import { setupExpress } from "./utils/expressUtil";
import { getRecipe, rateRecipe } from "./repos/recipeRepo";
import { validateSlug, validateRating } from "./utils/validatorUtil";
import StringUtil from "./utils/StringUtil";
import uniqid from "uniqid";

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
  let rating, slug;

  try {
    slug = validateSlug(req.body);
    rating = validateRating(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  // create unique identifier to prevent duplicate ratings
  let ip = "";

  if (req.connection.remoteAddress != null && req.connection.remoteAddress !== "") {
    ip = req.connection.remoteAddress;
  } else if (req.headers["x-forwarded-for"] != null && req.headers["x-forwarded-for"] !== "") {
    ip = req.headers["x-forwarded-for"];
  } else {
    ip = uniqid();
  }
  let uniqueIdentifier = StringUtil.generateHashWithDate(ip);

  try {
    await rateRecipe(slug, rating, uniqueIdentifier);
  } catch (err) {
    // ignore
    console.error(err);
  }

  res.sendStatus(200);
});

export default app;