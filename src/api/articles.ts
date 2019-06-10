import { setupExpress } from "./utils/expressUtil";
import { DbArticle } from "../interfaces/Article";
import { getArticles } from "./repos/articleRepo";

let app = setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res): Promise<DbArticle[]> => {
    console.log("getHeroArticles");

    return res.json([]);
});

app.post("/getArticles", async (req, res): Promise<DbArticle[]> => {
    console.log("getArticles");

    const articles = await getArticles();

    if (articles == null) {
        res.sendStatus(404);
    } else {
        return res.json(articles);
    }

    return res.json(articles);
});

export default app;