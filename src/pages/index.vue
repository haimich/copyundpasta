<template>

  <div>

    <el-row>
      <el-col :span="24">
        <el-carousel
          height="650px"
          indicator-position="none"
          arrow="always"
        >
          <el-carousel-item
            v-for="article in heroArticles"
            :key="article.slug"
          >
            <nuxt-link :to="'/' + article.slug" class="hero-carousel-link">
              <img
                :src="article.previewImageUrl"
                alt="hero image"
                class="hero-carousel-image"
              />

              <div class="hero-carousel-title">
                {{ article.title }}
              </div>
            </nuxt-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col class="last-article" :span="12" :offset="4">
        links
      </el-col>

      <el-col :span="6">
        <aside>
          rechts
        </aside>
      </el-col>
    </el-row>

  </div>

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

<style lang="scss">

  @import "~/scss/variables.scss";

  .hero-carousel-image {
    position: absolute;
  }

  .hero-carousel-link {
      text-decoration: none;
  }

  .hero-carousel-title {
    position: relative;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }

</style>
