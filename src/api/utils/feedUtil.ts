import { Feed } from "feed";
import { Article } from "@/interfaces/Article";

function createFeed(articles: Article[], type: "rss" | "atom") {
  let feed = new Feed({
    title: "Copy & Pasta",
    link: `https://copyundpasta.de/feed/${type}.xml`,
    description: "Copy & Pasta Rezepte und Artikel",
    id: "https://copyundpasta.de/",
    copyright: "2019 Copy & Pasta",
    language: "de",
    image: "https://copyundpasta.de/images/logo.png",
    favicon: "https://copyundpasta.de/favicon.ico",
    feedLinks: {
      atom: "https://copyundpasta.de/feed/atom.xml",
      rss: "https://copyundpasta.de/feed/rss.xml",
    },
    author: {
      name: "Michael",
      email: "hello@copyundpasta.de",
      link: "https://copyundpasta.de"
    },
  });

  for (let article of articles) {
    let url = `https://copyundpasta.de/${article.slug}`;

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.shortDescription,
      content: "content",
      date: new Date(article.createdAt),
      image: article.previewImageUrl,
    });
  }

  feed.addCategory("Foodblog");

  return feed;
}

export function createRssFeed(articles: Article[]): string {
  let feed = createFeed(articles, "rss");

  return feed.rss2();
}

export function createAtomFeed(articles: Article[]): string {
  let feed = createFeed(articles, "atom");

  return feed.atom1();
}
