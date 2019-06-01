import { setupExpress } from "./utils/expressUtil";
import { Article } from "./interfaces/Article";

let app = setupExpress();

/**
 * Configure routes
 * - prefix is "/api/articles/"
 */

app.post("/getHeroArticles", async (req, res) => {
    console.log("getHeroArticles");

    const articles: Article[] = [
        {
            slug: "tofu-vom-blech-mit-spargel-neuen-kartoffeln",
            title: "Marinierter Tofu vom Blech mit Spargel & Frühkartoffeln",
            previewImageUrl: "https://www.eat-this.org/wp-content/uploads/2019/04/tofu-vom-blech-mit-spargel-und-kartoffeln-10.jpg",
        },
        {
            slug: "reines-dinkel-sauerteigbrot",
            title: "Reines Dinkel-Sauerteigbrot",
            previewImageUrl: "https://www.eat-this.org/wp-content/uploads/2017/10/reines-dinkel-sauerteigbrot-3.jpg",
        },
        {
            slug: "loaded-hummus-mit-geroestetem-blumenkohl",
            title: "Loaded Hummus mit geröstetem Blumenkohl, Brokkoli & Möhren",
            previewImageUrl: "https://www.eat-this.org/wp-content/uploads/2019/01/loaded-hummus-mit-geroestetem-blumenkohl-brokkoli-und-moehren.jpg",
        },
    ];

    return res.json(articles);
});

export default app;