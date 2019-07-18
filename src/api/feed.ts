import ExpressUtil from "./utils/ExpressUtil";
import FeedUtil from "./utils/FeedUtil";
import ArticleRepo from "./db/ArticleRepo";

let app = ExpressUtil.setupExpress();

const maxAge = 60 * 60 * 12; // 12 hours    

/**
 * Configure routes
 * - prefix is "/feed/"
 */

app.get("/rss.xml", async (req, res) => {
  console.log("articles.rss.xml()");

  const articles = await ArticleRepo.getAllArticles();
  
  const feed = FeedUtil.createRssFeed(articles);
  
  res.setHeader("Cache-Control", "public, max-age=" + maxAge);
  res.setHeader("Expires", new Date(Date.now() + maxAge * 1000).toUTCString());

  return res.type("application/rss+xml").send(feed);
});

app.get("/atom.xml", async (req, res) => {
  console.log("articles.atom.xml()");

  const articles = await ArticleRepo.getAllArticles();

  const feed = FeedUtil.createAtomFeed(articles);

  res.setHeader("Cache-Control", "public, max-age=" + maxAge);
  res.setHeader("Expires", new Date(Date.now() + maxAge * 1000).toUTCString());
  
  return res.type("application/atom+xml").send(feed);
});

export default app;