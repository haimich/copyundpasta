import pkg from "./package"

export default {
  mode: "universal",

  debug: false,

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },

  srcDir: "src/",

  /*
  ** Headers of the page
  */
  head: {
    title: "Herzlich Willkommen bei Copy & Pasta",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  /*
  ** REST api endpoints
  */
  serverMiddleware: [
    {
      path: "/api/recipes",
      handler: "~/api/recipes.js",
    },
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "normalize.css",
    "element-ui/lib/theme-chalk/index.css",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/element-ui"
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
  },

  /*
  ** Markdownit module configuration
  */
  markdownit: {
    // preset: 'default',
    // linkify: true,
    // breaks: true,
    // use: [
    //   ['markdown-it-container', 'containerName'],
    //   'markdown-it-attrs'
    // ]
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
