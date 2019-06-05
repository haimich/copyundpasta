import { Feed } from "feed";

function createFeed(posts) {
  let feed = new Feed({
    title: "Copy & Pasta",
    link: "https://copyundpasta.de/feed/rss.xml",
    description: "Copy & Pasta Rezeptfeed",
    id: "https://copyundpasta.de",
    copyright: "2019 Copy & Pasta",
    language: "de",
    // image: "http://example.com/image.png",
    favicon: "https://copyundpasta.de/favicon.ico",
    // updated: new Date(2013, 6, 14), // optional, default = today
    generator: "awesome", // optional, default = 'Feed for Node.js'
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

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      date: new Date(),
      image: post.image,
    })
  });

  feed.addCategory("Nuxt.js");

  // feed.addContributor({
  //   name: 'Alexander Lichter',
  //   email: 'example@lichter.io',
  //   link: 'https://lichter.io/'
  // });

  return feed;
}

// TODO add types
export function createRssFeed(posts): string {
  let feed = createFeed(posts);

  return feed.rss2();
}

// TODO add types
export function createAtomFeed(posts): string {
  let feed = createFeed(posts);

  return feed.atom1();
}
