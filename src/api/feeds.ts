import { setupExpress } from "./utils/expressUtil";
import { createRssFeed, createAtomFeed } from "./repos/feedRepo";
import { validateId } from "./utils/validatorUtil";

let app = setupExpress();

const posts = JSON.parse(`[{
    "id": 10,
    "title": "Going JAMstack with Netlify and Nuxt",
    "slug": "going-jamstack-with-netlify-and-nuxt",
    "description": "In the last month, I gradually migrated several projects from server-rendered N...",
    "published_at": "2019-01-29T15:39:15+00:00",
    "author": "Alexander Lichter",
    "created_at": "2019-01-21T00:28:52+00:00",
    "updated_at": "2019-01-31T21:36:40+00:00",
    "url": "https://blog.lichter.io/posts/going-jamstack-with-netlify-and-nuxt/",
    "content": "JAMstack is a growing and modern web architecture. I gradually migrated several Nuxt.js projects from server side rendering over to JAMstack and write about my experiences, recommendations and the migration process itself.",
    "date": "Tue Jun 04 2019 19:41:39 GMT+0200",
    "image": "https://www.chip.de/ii/5/6/7/6/2/8/4/8/43dff6dc96b32060.jpeg"
}]`);

/**
 * Configure routes
 * - prefix is "/feed/"
 */

app.get("/rss.xml", async (req, res) => {
    console.log("rss.xml");
    
    const feed = createRssFeed(posts);

    const maxAge = 60 * 60 * 12; // 12 hours
    
    res.setHeader("Cache-Control", "public, max-age=" + maxAge);
    res.setHeader("Expires", new Date(Date.now() + maxAge * 1000).toUTCString());
    return res.type("application/rss+xml").send(feed);
});

app.get("/atom.xml", async (req, res) => {
    console.log("atom.xml");

    const feed = createAtomFeed(posts);
    
    return res.type("application/rss+xml").send(feed);
});

export default app;