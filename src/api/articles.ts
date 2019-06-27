import { setupExpress } from "./utils/expressUtil";
import { Article } from "../interfaces/Article";
import { getHeroArticles, getArticles } from "./repos/articleRepo";
import { search } from "./search/articleSearchRepo";
import { validatePagingParams, validateSearchterm } from "./utils/validatorUtil";

let app = setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res): Promise<Article[]> => {
  console.log("getHeroArticles");

  const articles = await getHeroArticles();

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

app.post("/getArticles", async (req, res): Promise<Article[]> => {
  console.log("getArticles");

  // validate params
  let pagingParams;

  try {
    pagingParams = validatePagingParams(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  const articles = await getArticles(pagingParams);

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

app.post("/search", async (req, res): Promise<Article[]> => {
  console.log("search");

  // validate params
  let searchterm = "";

  try {
    searchterm = validateSearchterm(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  const searchRes = await search(searchterm);

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