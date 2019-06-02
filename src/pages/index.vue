<template>

  <div>

    <el-row>
      <el-col :span="24" class="hero-carousel">
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

  @font-face {
      font-family: 'Happy Fox';
      src: url('/fonts/HappyFox-Condensed.eot');
      src: url('/fonts/HappyFox-Condensed.eot?#iefix') format('embedded-opentype'),
          url('/fonts/HappyFox-Condensed.woff2') format('woff2'),
          url('/fonts/HappyFox-Condensed.woff') format('woff'),
          url('/fonts/HappyFox-Condensed.ttf') format('truetype'),
          url('/fonts/HappyFox-Condensed.svg#HappyFox-Condensed') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  .hero-carousel {
     & /deep/ .el-carousel__container button {
      font-size: 21px;
      width: 50px;
      height: 50px;
    }
  }

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
      font-family: "Happy Fox", "Merriweather", serif;
      font-size: 90px;
      font-weight: 100;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 6px;
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
