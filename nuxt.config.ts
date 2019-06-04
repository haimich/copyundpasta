require("dotenv").config();
import { createRssFeed } from "./rssFeed";
import NuxtConfiguration from "@nuxt/config";

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = "3000";

const config: NuxtConfiguration = {

  mode: "universal",

  srcDir: "src/",

  debug: false,

  server: {
    host: process.env.SERVER_HOST || DEFAULT_HOST,
    port: process.env.SERVER_PORT || DEFAULT_PORT,
  },

  /*
  ** REST api endpoints
  */
  serverMiddleware: [
    {
      path: "/api/recipes",
      handler: "~/api/recipes.ts",
    },
    {
      path: "/api/articles",
      handler: "~/api/articles.ts",
    },
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: "Copy & Pasta - der Foodblog aus Karlsruhe",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Copy & Pasta wurde 2019 von Michael Müller aus Karlsruhe ins Leben gerufen." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Merriweather+Sans:300,400,400i,700&display=swap" },
    ]
  },

  loading: {
    color: "#1eb5da",
  },

  /*
  ** Global CSS
  */
  css: [
    "normalize.css",
    "@/scss/element-theme/index.css",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/fontawesome",
    "@/plugins/filters",
    "@/plugins/globalComponents",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/feed",
  ],

  /*
  ** Axios module configuration
  ** Doc: https://axios.nuxtjs.org/usage
  */
  axios: {
    browserBaseURL: process.env.AXIOS_BASE_URL || `http://${DEFAULT_HOST}:${DEFAULT_PORT}`,
    baseUrl: process.env.AXIOS_BASE_URL || `http://${DEFAULT_HOST}:${DEFAULT_PORT}`,
  },

  /*
  ** Feed module configuration
  ** Doc: https://github.com/nuxt-community/feed-module
  */
  feed: [
    {
      path: "/feed.xml", // The route to your feed.
      create: createRssFeed, // The create function
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: "rss2", // Can be: rss2, atom1, json1
      data: ["Some additional data"] // Will be passed as 2nd argument to `create` function
    },
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|ts|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }

}

export default config;
