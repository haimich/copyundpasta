<template>

  <el-row type="flex" justify="center" style="margin-bottom: 40px;">
    <el-button @click="jumpToRecipe">
      Zum Rezept springen
    </el-button>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ArticleJumpToRecipeComponent extends Vue {

      @Prop()
      private src: string;

      @Prop()
      private alt: string;

      jumpToRecipe() {
        if (history != null && history.replaceState != null) {
          let url = location.href;
          location.href = "#recipe";
          history.replaceState(null, null, url);
        } else {
          location.href = "#recipe";
        }
      }

  }

</script>

<style>

  img.article-image-full {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
  }

</style>
