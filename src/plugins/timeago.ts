import Vue from "vue"

import VueTimeago from "vue-timeago";

Vue.use(VueTimeago, {
  name: "Timeago",
  locale: "de",
  locales: {
    de: require("date-fns/locale/de"),
  }
})