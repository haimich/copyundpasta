<template>

  <el-row class="jump-to-recipe-button">
    <hr class="curly-line">

    <div>
      <a href="#recipe">
        Zum Rezept springen
      </a>
    </div>

    <hr class="curly-line">
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

  }

</script>

<style lang="scss" scoped>

  .jump-to-recipe-button {
    text-align: center;
    margin-bottom: 40px;

    div {
      font-size: 15px;
      padding: 18px 0;
      font-size: 16px;
    }
  }

  .curly-line {
    height: 6px;
    background: url(/images/divider/curly-small.png) repeat-x 0 0;
    border: 0;
  }

</style>
