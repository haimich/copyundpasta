import axios from "axios";

export async function createRssFeed(feed) {
  feed.options = {
    title: "My blog",
    link: "https://lichter.io/feed.xml",
    description: "This is my personal feed!"
  };

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
    "content": "JAMstack is a growing and modern web architecture. I gradually migrated several Nuxt.js projects from server side rendering over to JAMstack and write about my experiences, recommendations and the migration process itself."
  }]`);

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content
    })
  });

  feed.addCategory("Nuxt.js");

  feed.addContributor({
    name: 'Alexander Lichter',
    email: 'example@lichter.io',
    link: 'https://lichter.io/'
  });
}
