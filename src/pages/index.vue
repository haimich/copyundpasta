<template>

  <div>

    <!-- Carousel -->
    <el-row>
      <el-col
        :span="24"
        v-if="heroArticles != null && heroArticles.length >= 1"
        class="hero-carousel"
        style="margin-bottom: 40px;"
      >
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
              <el-image
                :src="article.wideImageUrl"
                alt="hero image"
                class="hero-carousel-image"
              ></el-image>

              <div class="hero-carousel-title">
                <nuxt-link :to="'/' + article.slug" class="hero-carousel-link">
                  <h1>{{ article.title }}</h1>
                </nuxt-link>

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

    <!-- Articles & Sidebar -->
    <el-row :gutter="50" class="main-container">
      <el-col class="newest-article" :lg="lg" :md="md" :sm="sm" :xs="xs">

        <!-- Newest article -->
        <div v-if="newestArticle != null">
          <h2 class="article-heading" style="padding: 0 20px; margin-bottom: 10px; margin-top: 0;">
            {{ newestArticle.title }}
          </h2>
          <h5 class="newest-subtitle">
            <i>{{ newestArticle.createdAt | formatAsDate }}</i>
          </h5>

          <img :src="newestArticle.previewImageUrl" alt="Artikelfoto">

          <p style="margin-top: 20px;">
            {{ newestArticle.shortDescription }}
          </p>

          <div class="readmore-link" style="margin-top: 10px;">
            <nuxt-link :to="'/' + newestArticle.slug" style="font-size: 15px;">
              Weiterlesen <i class="el-icon-caret-right"></i>
            </nuxt-link>
          </div>
        </div>

        <el-row>
          <img src="/images/divider/pasta.svg" alt="Trennlinie" style="margin-top: 35px;">
        </el-row>
            
        <!-- Recent articles -->
        <div
          v-if="recentArticles != null && recentArticles.length >= 1"
          style="margin-top: 45px;"
        >
          <el-row :gutter="15">
            <el-col
              :xl="8"
              :lg="8"
              :md="12"
              :sm="12"
              :xs="24"
              v-for="article in recentArticles"
              :key="article.slug"
            >
              <ArticleCardComponent
                :article="article"
              />
            </el-col>

            <el-col :xl="16" :lg="16" :md="12" :sm="12" :xs="0">
              &nbsp; <!-- TODO remove when more articles come -->
            </el-col>
          </el-row>

          <!-- Pagination -->
          <el-row
            v-if="totalArticles > pageSize"
            type="flex"
            justify="center"
          >
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              :total="totalArticles"
            ></el-pagination>
          </el-row>
        </div>

      </el-col>

      <!-- Sidebar -->
      <el-col :lg="6" :md="6" class="hidden-sm-and-down">
        <SidebarComponent />
      </el-col>
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import { Article } from "@/interfaces/Article";
  import ArticleService from "@/services/ArticleService";
  import ArticleCardComponent from "@/components/article/ArticleCardComponent.vue";
  import SidebarComponent from "@/components/SidebarComponent.vue";

  const PAGE_SIZE = 9;

  @Component({
    components: {
      ArticleCardComponent, SidebarComponent,
    },
    // @ts-ignore
    async asyncData({ $axios, error }) {
      const responses = await Promise.all([
        ArticleService.getHeroArticles($axios),
        ArticleService.getArticles($axios, 0, PAGE_SIZE),
      ]);

      let recentArticles = responses[1].data;

      let totalRecentCount = 0;
      if (recentArticles.length >= 1) {
        totalRecentCount = recentArticles[0].totalCount - 1;
      }

      return {
        heroArticles: responses[0].data,
        newestArticle: recentArticles.shift(),
        recentArticles,
        totalArticles: totalRecentCount,
      };
    }
  })
  export default class IndexPage extends Vue {

    private heroArticles: Article[] = [];

    private newestArticle: Article = null;
    
    private recentArticles: Article[] = [];

    private page = 0;

    private totalArticles = 0;

    private lg = {
      span: 14,
      offset: 2,
    };

    private md = {
      span: 16,
      offset: 1,
    };

    private sm = {
      span: 22,
      offset: 1,
    };

    private xs = {
      span: 22,
      offset: 1,
    };

    get pageSize() {
      return PAGE_SIZE;
    }

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

    a:hover {
      text-decoration: none;
    }
  }

  .hero-carousel-link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    text-shadow: 3px 3px 5px rgb(87, 87, 87);
  }

  .hero-carousel-title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    transform: translate(-50%, -50%);
    
    h1 {
      font-family: "Happy Fox", "Roboto", serif;
      font-size: 75px;
      font-weight: 100;
      color: white;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 6px;
    }
  }

  @media all and (max-width: $breakpoint-lg) {
    .hero-carousel-title h1 {
      font-size: 65px;
    }
  }

  @media all and (max-width: $breakpoint-md) {
    .hero-carousel-title h1 {
      font-size: 60px;
    }
  }

  @media all and (max-width: $breakpoint-xs) {
    .hero-carousel-title h1 {
      font-size: 52px;
    }
  }

  @media all and (max-width: 440px) {
    .hero-carousel-title h1 {
      font-size: 45px;
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

  .main-container {
    margin-top: 20px;
  }

  .newest-article img {
    width: 100%;
  }

  .newest-subtitle {
    text-align: center;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 300;
    color: $color-text-regular;
  }

</style>