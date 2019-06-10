import Vue from "vue";
import MainHeadingComponent from "@/components/article/MainHeadingComponent.vue";
import ArticleImageComponent from "@/components/article/ArticleImageComponent.vue";
import RecipeComponent from "@/components/recipe/RecipeComponent.vue";

export default () => {
  Vue.component("MainHeadingComponent", MainHeadingComponent);
  Vue.component("ArticleImageComponent", ArticleImageComponent);
  Vue.component("RecipeComponent", RecipeComponent);
}
