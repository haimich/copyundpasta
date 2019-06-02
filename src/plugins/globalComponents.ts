import Vue from "vue";
import MainHeading from "@/components/article/MainHeading.vue";
import ArticleImage from "@/components/article/ArticleImage.vue";

export default () => {
  Vue.component("MainHeading", MainHeading);
  Vue.component("ArticleImage", ArticleImage);
}
