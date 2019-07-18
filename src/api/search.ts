import ExpressUtil from "./utils/ExpressUtil";
import ArticleSearchRepo from "./search/ArticleSearchRepo";
import ValidatorUtil from "./utils/ValidatorUtil";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/search/"
 */

app.post("/articles", async (req, res) => {
  console.log("search.articles()");

  // validate params
  let searchterm = "";

  try {
    searchterm = ValidatorUtil.validateSearchterm(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  let searchRes;
  try {
    searchRes = await ArticleSearchRepo.search(searchterm);
  } catch (error) {
    return res.json([]);
  }

  const hasHits = searchRes.body != null && searchRes.body.hits != null && searchRes.body.hits.hits != null && searchRes.body.hits.hits.length >= 1;

  if (searchRes.statusCode !== 200) {
    console.log("Articles search error", searchRes);
    return res.json([]);
  } else if (hasHits) {
    return res.json(searchRes.body.hits.hits);
  } else {
    return res.json([]);
  }
});

export default app;