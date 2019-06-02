<template>

  <div>

    <el-row>
      <el-col :span="24" class="hero-carousel">
        <el-carousel
          v-if="heroArticles != null"
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
              >

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

    <el-row style="margin-top: 60px;" :gutter="50">
      <el-col class="last-article" :span="12" :offset="4">

        <!-- Last article -->
        <div v-if="lastArticle != null">
          <h2 class="article-heading" style="padding: 0 20px;">
            {{ lastArticle.title }}
          </h2>

          <img :src="lastArticle.previewImageUrl" alt="Artikelfoto">

          <p style="margin-top: 20px;">
            {{ lastArticle.shortDescription }}
          </p>

          <div class="readmore-link" style="margin-top: 10px;">
            <nuxt-link :to="'/' + lastArticle.slug" style="font-size: 15px;">
              Weiterlesen <i class="el-icon-caret-right"></i>
            </nuxt-link>
          </div>
        </div>

        <!-- Recent articles -->
        <div v-if="recentArticles != null" style="margin-top: 50px;">
          <img src="@/assets/images/pasta.svg" alt="Trennlinie">
        </div>

      </el-col>

      <!-- Sidebar -->
      <el-col :span="6">
        <aside>
          <div class="sidebar-container">
            <el-divider>Über Mich</el-divider>

            <img
              src="@/assets/images/uebermich.jpg"
              style="width: 70%; margin-top: 35px;"
              alt="Über Mich"
            >

            <h5 style="margin-top: 20px; letter-spacing: .4px;">
              Hey, ich bin Michael!
            </h5>

            <hr class="blue-line" style="width: 20%; margin-top: 12px; height: 2px;">

            <p>
              Als Softwareentwickler und begeisterter Hobbykoch bin ich vielseitig interessiert und tauche gern tief in Themen ein. Mir macht es Freude, Rezepte auszuprobieren, zu variieren und zu optimieren, um den perfekten Geschmack zu treffen. Dabei habe ich den Anspruch, aus wenigen Zutaten leckere Gerichte zu zaubern, die man auch leicht nachkochen kann. 
            </p>

            <br>

            <p>
              Ich möchte euch inspirieren und mit meiner Leidenschaft fürs Kochen und Backen anstecken. 
            </p>

            <br>

            <p>
              <strong>Also: Ausprobieren, Spaß haben und genießen!</strong>
            </p>

            <div class="readmore-link" style="margin-top: 20px;">
              <nuxt-link to="about">
                Mehr erfahren <i class="el-icon-caret-right"></i>
              </nuxt-link>
            </div>
          </div>
        </aside>
      </el-col>
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import { Article } from "@/api/interfaces/Article";

  @Component({
    // @ts-ignore
    async asyncData({ $axios, error }) {
      const responses = await Promise.all([
        $axios.post(`/api/articles/getHeroArticles`),
        $axios.post(`/api/articles/getArticles`),
      ]);

      let recentArticles = responses[1].data;

      return {
        heroArticles: responses[0].data,
        lastArticle: recentArticles.shift(),
        recentArticles: recentArticles,
      };
    }
  })
  export default class IndexPage extends Vue {

    private heroArticles: Article[] = [];

    private lastArticle: Article = null;
    
    private recentArticles: Article[] = [];

  }

</script>

<style lang="scss" scoped>

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

    img {
      filter: brightness(85%);
    }
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
    
    h1 {
      font-family: "Happy Fox", "Merriweather", serif;
      font-size: 75px;
      font-weight: 100;
      color: white;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 6px;
    }
  }

  .hero-carousel-button {
    margin-top: 6px;
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

  .last-article img {
    width: 100%;
  }

  .sidebar-container {
    font-size: 16px;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .el-divider {
      margin: 12px 0;
    }

    .el-divider__text {
      font-size: 16px;
    }
    
    p, a {
      font-size: 13px;
      line-height: 23px;

      strong {
        font-weight: 900;
      }
    }
  }

</style>
