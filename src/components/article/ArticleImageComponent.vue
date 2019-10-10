<template>

  <el-row>
    <el-col :span="18" :offset="3" class="article-image-container">

      <el-image
        :src="src"
        :alt="alt"
        class="article-image"
      ></el-image>

    </el-col>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ArticleImageComponent extends Vue {

      @Prop()
      private src: string;

      @Prop()
      private alt: string;

  }

</script>

<style>

  .article-image-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .article-image img {
    width: 100%;
  }

</style>
