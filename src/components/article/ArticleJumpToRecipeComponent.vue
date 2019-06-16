<template>

  <el-row type="flex" justify="center" class="jump-to-recipe-button">
    <el-divider>
      <a href="#recipe">
        Zum Rezept springen
      </a>
    </el-divider>
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
    margin-bottom: 40px;

    a {
      font-size: 15px;
    }
  }

</style>
