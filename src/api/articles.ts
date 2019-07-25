import ExpressUtil from "./utils/ExpressUtil";
import { CommentWithChallenge } from "../interfaces/Comment";
import ArticleRepo from "./db/ArticleRepo";
import ValidatorUtil from "./utils/ValidatorUtil";
import MailUtil from "./utils/MailUtil";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res) => {
  console.log("articles.getHeroArticles()");

  const articles = await ArticleRepo.getHeroArticles();

  if (articles == null) {
    return res.json([]);
  } else {
    return res.json(articles);
  }
});

app.post("/getArticles", async (req, res) => {
  console.log("articles.getArticles()");

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
  console.log("articles.getComments()");

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
  console.log("articles.createComment()");

  // validate params
  let commentWithChallenge: CommentWithChallenge;

  try {
    commentWithChallenge = ValidatorUtil.validateCommentWithChallenge(req.body);

    await ValidatorUtil.validateCaptcha(commentWithChallenge.recaptchaChallenge);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  await ArticleRepo.createComment(commentWithChallenge.comment);

  if (process.env.NODE_ENV !== "development") {
    // send mail and don't wait for it
    MailUtil.sendMail("Neuer Kommetar", `<h2>Hallo Webmaster,</h2>
    
    <br />
    
    <p>gerade kam ein neuer Kommentar zu dem Artikel <a href="https://www.copyundpasta.de/${commentWithChallenge.comment.slug}">${commentWithChallenge.comment.slug}</a> herein :-)</p>
    
    <br /><br />
    
    Viele Grüße<br />
    Der Webserver`);
  }

  return res.sendStatus(200);
});

export default app;