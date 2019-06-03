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
            slug: "salzig-suess-sauer-scharf-die-geniale-tomaten-senf-butter",
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

app.post("/getArticles", async (req, res) => {
    console.log("getArticles");

    const articles: Article[] = [
        {
            slug: "salzig-suess-sauer-scharf-die-geniale-tomaten-senf-butter",
            title: "Marinierter Tofu vom Blech mit Spargel & Frühkartoffeln",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "https://www.eat-this.org/wp-content/uploads/2019/04/tofu-vom-blech-mit-spargel-und-kartoffeln-10.jpg",
            shortDescription: "Es ist schon ein Zeichen außergewöhnlichen Wohlstands, wenn in unserem Kukturkreis Dinge wie ein Kürbis zur Zielscheibe fundamentaler Kritik werden – gar polarisierend wirken. Klingt wie ein Witz? Ereignete sich zuletzt aber wiederholt – gerade erst erlebt unter meiner Rezept-Publikation im ZEIT-Magazin. Nur eine von vielen kürbiskritischen Äußerungen: “Kürbis taugt“...",
        },
        {
            slug: "reines-dinkel-sauerteigbrot",
            title: "Reines Dinkel-Sauerteigbrot",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "/images/articleCover.jpg",
        },
        {
            slug: "loaded-hummus-mit-geroestetem-blumenkohl",
            title: "Loaded Hummus mit geröstetem Blumenkohl, Brokkoli & Möhren",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "/images/articleCover.jpg",
        },
        {
            slug: "salzig-suess-sauer-scharf-die-geniale-tomaten-senf-butter",
            title: "Marinierter Tofu vom Blech mit Spargel & Frühkartoffeln",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "/images/articleCover.jpg",
        },
        {
            slug: "reines-dinkel-sauerteigbrot",
            title: "Reines Dinkel-Sauerteigbrot",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "/images/articleCover.jpg",
        },
        {
            slug: "loaded-hummus-mit-geroestetem-blumenkohl",
            title: "Loaded Hummus mit geröstetem Blumenkohl, Brokkoli & Möhren",
            createdAt: "2019-06-01 14:44:22",
            previewImageUrl: "/images/articleCover.jpg",
        },
    ];

    return res.json(articles);
});

export default app;