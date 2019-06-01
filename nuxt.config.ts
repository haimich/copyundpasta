import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {

  mode: "universal",

  srcDir: "src/",

  debug: false,

  env: {
    host: process.env.HOST || "localhost"
  },

  /*
  ** REST api endpoints
  */
  serverMiddleware: [
    {
      path: "/api/recipes",
      handler: "~/api/recipes.ts",
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

  /*
  ** Global CSS
  */
  css: [
    "normalize.css",
    "@/scss/variables.scss",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/filters",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // Doc: https://axios.nuxtjs.org/usage
    // host: "mpm-dev.intern.ebroot.de"
  },

  /*
  ** Markdownit module configuration
  */
  markdownit: {
    html: true,
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
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }

}

export default config;
