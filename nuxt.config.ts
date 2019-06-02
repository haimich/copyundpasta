require("dotenv").config();
import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {

  mode: "universal",

  srcDir: "src/",

  debug: false,

  env: {
    host: process.env.SERVER_HOST || "localhost",
    port: "3000",
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
  ],

  /*
  ** Axios module configuration
  ** Doc: https://axios.nuxtjs.org/usage
  */
  axios: {
    host: process.env.AXIOS_HOST || "localhost",
    port: process.env.AXIOS_PORT || "3000",
  },

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
