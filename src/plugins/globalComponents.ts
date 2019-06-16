import Vue from "vue";
import MainHeadingComponent from "@/components/article/MainHeadingComponent.vue";
import ArticleImageComponent from "@/components/article/ArticleImageComponent.vue";
import ArticleLinkComponent from "@/components/article/ArticleLinkComponent.vue";
import ArticleJumpToRecipeComponent from "@/components/article/ArticleJumpToRecipeComponent.vue";
import ArticleScrollToTopComponent from "@/components/article/ArticleScrollToTopComponent.vue";
import RecipeComponent from "@/components/recipe/RecipeComponent.vue";

export default () => {
  Vue.component("MainHeadingComponent", MainHeadingComponent);
  Vue.component("ArticleImageComponent", ArticleImageComponent);
  Vue.component("ArticleLinkComponent", ArticleLinkComponent);
  Vue.component("ArticleJumpToRecipeComponent", ArticleJumpToRecipeComponent);
  Vue.component("ArticleScrollToTopComponent", ArticleScrollToTopComponent);
  Vue.component("RecipeComponent", RecipeComponent);
}
