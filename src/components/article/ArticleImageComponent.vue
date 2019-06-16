<template>

  <el-row>
    <el-col :span="18" :offset="3">

      <img
        :src="src"
        class="article-image-full"
        :alt="alt"
      >

    </el-col>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ArticleIArticleImageComponentmage extends Vue {

      @Prop()
      private src: string;

      @Prop()
      private alt: string;

  }

</script>

<style>

  img.article-image-full {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
  }

</style>
