<template>

  <el-row>
    <el-col :span="18" :offset="3">
      <img :src="src" class="article-image-full" :alt="alt">
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

<style scoped>

</style>
