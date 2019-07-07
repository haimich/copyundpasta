import ExpressUtil from "./utils/ExpressUtil";
import RecipeRepo from "./db/RecipeRepo";
import ValidatorUtil from "./utils/ValidatorUtil";
import StringUtil from "./utils/StringUtil";
import uniqid from "uniqid";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/recipes/"
 */

app.post("/getRecipe", async (req, res) => {
  console.log("getRecipe");

  // validate params
  let slug;

  try {
    slug = ValidatorUtil.validateSlug(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  const recipe = await RecipeRepo.getRecipe(slug);

  if (recipe == null) {
    res.sendStatus(404);
  } else {
    return res.json(recipe);
  }
});

app.post("/getRating", async (req, res) => {
  console.log("getRating");

  // validate params
  let slug;

  try {
    slug = ValidatorUtil.validateSlug(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  let rating = await RecipeRepo.getRating(slug);

  return res.status(200).send("" + rating);
});

app.post("/rateRecipe", async (req, res) => {
  console.log("rateRecipe");

  // validate params
  let rating, slug;

  try {
    slug = ValidatorUtil.validateSlug(req.body);
    rating = ValidatorUtil.validateRating(req.body);
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
    await RecipeRepo.rateRecipe(slug, rating, uniqueIdentifier);
  } catch (err) {
    // ignore
    console.error(err);
  }

  let newRating = await RecipeRepo.getRating(slug);

  return res.status(200).send("" + newRating);
});

export default app;