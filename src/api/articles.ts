import ExpressUtil from "./utils/ExpressUtil";
import { Article } from "../interfaces/Article";
import { Comment } from "../interfaces/Comment";
import ArticleRepo from "./db/ArticleRepo";
import ArticleSearchRepo from "./search/ArticleSearchRepo";
import ValidatorUtil from "./utils/ValidatorUtil";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res) => {
  console.log("getHeroArticles");

  const articles = await ArticleRepo.getHeroArticles();

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

app.post("/getArticles", async (req, res) => {
  console.log("getArticles");

  // validate params
  let pagingParams;

  try {
    pagingParams = ValidatorUtil.validatePagingParams(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  const articles = await ArticleRepo.getNonHeroArticles(pagingParams);

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

app.post("/getComments", async (req, res) => {
  console.log("getComments");

  // validate params
  let slug;
  
  try {
    slug = ValidatorUtil.validateSlug(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  const comments = await ArticleRepo.getArticleComments(slug);

  if (comments == null) {
    return res.json([]);
  } else {
    return res.json(comments);
  }
});

app.post("/createComment", async (req, res) => {
  console.log("createComment");

  // validate params
  let slug: string;
  let parentCommentId: number;
  let content: string;
  let author: string;
  let email: string;

  try {
    slug = ValidatorUtil.validateSlug(req.body);
    parentCommentId = ValidatorUtil.validateParentCommentId(req.body);
    content = ValidatorUtil.validateContent(req.body);
    author = ValidatorUtil.validateAuthor(req.body);
    email = ValidatorUtil.validateEmail(req.body, false);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  let comment: Comment = {
    articleSlug: slug,
    parentCommentId,
    content,
    author,
    email,
  }

  await ArticleRepo.createComment(comment);

  return res.sendStatus(200);
});

app.post("/search", async (req, res) => {
  console.log("search");

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