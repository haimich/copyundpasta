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
            <div class="hero-carousel-container">
              <img
                :src="article.previewImageUrl"
                alt="hero image"
                class="hero-carousel-image"
              />

              <div class="hero-carousel-title">
                <h1>{{ article.title }}</h1>

                <nuxt-link :to="'/' + article.slug" class="hero-carousel-link">
                  <span class="hero-carousel-button">
                    Rezept ansehen
                  </span>
                </nuxt-link>
              </div>
            </div>
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
    async asyncData({ $axios, error }) {
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

  .hero-carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .hero-carousel-link {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }

  .hero-carousel-title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    transform: translate(-50%, -50%);
    color: white;
    
    h1 {
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .hero-carousel-button {
    margin-top: 40px;
    display: inline-block;
    padding: 15px 20px;
    border: 2px solid white;
    border-radius: 2px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: white;
      color: rgb(75, 75, 75);
    }
  }

</style>
