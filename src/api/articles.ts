import { setupExpress } from "./utils/expressUtil";
import { Article } from "../interfaces/Article";
import { getHeroArticles, getArticles } from "./repos/articleRepo";
import { validatePagingParams } from "./utils/validatorUtil";

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
  const pagingParams = validatePagingParams(req.body);

  const articles = await getArticles(pagingParams);

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

export default app;