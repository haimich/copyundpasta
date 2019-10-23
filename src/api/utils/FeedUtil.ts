import { Feed } from "feed";
import { Article } from "@/interfaces/Article";

export default class FeedUtil {
  
  public static createFeed(articles: Article[], type: "rss" | "atom") {
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
        content: article.shortDescription,
        date: new Date(article.createdAt),
        image: `https://copyundpasta.de${article.previewImageUrl}`,
      });
    }
  
    feed.addCategory("Foodblog");
  
    return feed;
  }
  
  public static createRssFeed(articles: Article[]): string {
    let feed = FeedUtil.createFeed(articles, "rss");
  
    return feed.rss2();
  }
  
  public static createAtomFeed(articles: Article[]): string {
    let feed = FeedUtil.createFeed(articles, "atom");
  
    return feed.atom1();
  }
  
}