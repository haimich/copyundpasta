import ExpressUtil from "./utils/ExpressUtil";
import RecipeRepo from "./db/RecipeRepo";
import ValidatorUtil from "./utils/ValidatorUtil";
import StringUtil from "./utils/StringUtil";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/recipes/"
 */

app.post("/getRecipe", async (req, res) => {
  console.log("articles.getRecipe()");

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
  console.log("articles.getRating()");

  // validate params
  let slug;

  try {
    slug = ValidatorUtil.validateSlug(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  let ratingResponse = await RecipeRepo.getRating(slug);

  return res.json(ratingResponse);
});

app.post("/rateRecipe", async (req, res) => {
  console.log("articles.rateRecipe()");

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
  const ip = ExpressUtil.getIp(req);
  const uniqueIdentifier = StringUtil.generateHashWithDate(ip);

  try {
    await RecipeRepo.rateRecipe(slug, rating, uniqueIdentifier);
  } catch (err) {
    // ignore
    console.error(err);
  }

  let ratingResponse = await RecipeRepo.getRating(slug);

  return res.json(ratingResponse);
});

export default app;