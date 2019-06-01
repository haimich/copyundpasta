<template>

  <el-row>
    <el-col :span="24">
      <el-carousel height="650px" indicator-position="none">
        <el-carousel-item
          v-for="article in heroArticles"
          :key="article.slug"
        >
          <img :src="article.previewImageUrl" alt="hero image" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component({
    // @ts-ignore
    async asyncData({ $axios }) {
      const response = await $axios.post(`/api/articles/getHeroArticles`);

      return { heroArticles: response.data };
    }
  })
  export default class IndexPage extends Vue {

    private heroArticles = [];

  }

</script>

<style lang="scss" scoped>

</style>
