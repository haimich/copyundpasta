<template>

  <el-row class="jump-to-recipe-button">
    <div class="curly-divider"></div>
    
    <div>
      <a href="#recipe">
        Zum Rezept springen
      </a>
    </div>

    <div class="curly-divider"></div>
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
      padding: 10px 0 12px 0;
      font-size: 16px;
    }
  }

</style>
