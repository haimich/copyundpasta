import { setupExpress } from "./utils/expressUtil";
import { Article } from "../interfaces/Article";
import { getHeroArticles, getArticles } from "./repos/articleRepo";

let app = setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res): Promise<Article[]> => {
    console.log("getHeroArticles");

    const articles = await getHeroArticles();

    if (articles == null) {
        res.sendStatus(404);
    } else {
        return res.json(articles);
    }
});

app.post("/getArticles", async (req, res): Promise<Article[]> => {
    console.log("getArticles");

    const articles = await getArticles();

    if (articles == null) {
        res.sendStatus(404);
    } else {
        return res.json(articles);
    }
});

export default app;