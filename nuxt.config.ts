import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

require("dotenv").config();

// get rid of warning during development
require("events").EventEmitter.defaultMaxListeners = 50;

const DEFAULT_HOST = "localhost";
// const DEFAULT_HOST = "192.168.0.178";
const DEFAULT_PORT = "3000";
const CWD = process.cwd();

const config = {

  mode: "universal",

  srcDir: "./src",
  
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
    {
      path: "/api/search",
      handler: "~/api/search.ts",
    },
    {
      path: "/api/stats",
      handler: "~/api/stats.ts",
    },
    {
      path: "/feed",
      handler: "~/api/feed.ts",
    },
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: "Copy & Pasta - der Foodblog aus Karlsruhe",
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Copy & Pasta wurde 2019 von Michael Müller aus Karlsruhe ins Leben gerufen." },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "p:domain_verify", content: "5f8e964f94d8de2f299a1e19f700c401" }, // Pinterest verify
    ],
    link: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "alternate", type: "application/rss+xml", title: "RSS Feed für copyundpasta.de", href: "/feed/rss.xml" },
      { rel: "alternate", type: "application/atom+xml", title: "Atom Feed für copyundpasta.de", href: "/feed/atom.xml" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" },
    ],
    script: [
      { src: "https://www.google.com/recaptcha/api.js?render=explicit", type: "application/javascript", async: true, defer: true },
      { src: "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js", type: "application/javascript", async: true, defer: true },
    ],
  },

  messages: {
    loading: "Wird geladen...",
    server_error: "Fehler",
    server_error_details: "Bei der Verarbeitung ist ein Fehler aufgetreten.",
    client_error: "Fehler",
    client_error_details: "Bei dere Generierung der Seite ist ein Fehler aufgetreten."
  },

  loading: {
    color: "#1eb5da",
  },

  watch: [
    CWD + "/src/api",
    CWD + "/src/interfaces",
    CWD + "/src/content",
    CWD + "/src/filters",
    CWD + "/src/scss",
  ],

  /*
  ** Global CSS
  */
  css: [
    "normalize.css",
    "@/scss/element-theme/index.css",
    "@/scss/element-theme/display.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/fontawesome",
    "@/plugins/filters",
    "@/plugins/globalComponents",
    "@/plugins/directives",
    "@/plugins/timeago",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/google-analytics",
    "@nuxtjs/sitemap",
  ],

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },

  /*
  ** Axios module configuration
  ** Doc: https://axios.nuxtjs.org/usage
  */
  axios: {
    browserBaseURL: process.env.AXIOS_BASE_URL || `http://${DEFAULT_HOST}:${DEFAULT_PORT}`,
    baseUrl: process.env.AXIOS_BASE_URL || `http://${DEFAULT_HOST}:${DEFAULT_PORT}`,
    retry: false,
  },

  /*
  ** Google Analytics module configuration
  ** Doc: https://github.com/nuxt-community/analytics-module
  */
  googleAnalytics: {
    id: "UA-142214214-1",
  },

  /*
  ** Sitemapt module configuration
  ** Doc: https://github.com/nuxt-community/sitemap-module
  */
  sitemap: {
    hostname: "https://copyundpasta.de",
    gzip: true,
    // exclude: [],
    // routes: [
    //   "/page/1",
    //   {
    //     url: "/page/2",
    //     changefreq: "daily",
    //     priority: 1,
    //     lastmodISO: "2017-06-30T13:30:00.000Z"
    //   }
    // ]
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    terser: {
      parallel: false,
    },

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
        });
      }
    }
  },

  buildModules: ['@nuxt/typescript-build'],

}

export default config;
