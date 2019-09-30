<template>

  <div>

    <el-row>
      <el-col
        :span="12"
        :offset="6"
      >
        <h2 style="text-align: center; font-size: 4.5rem;">{{ eta }}</h2>
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
        recentArticles: recentArticles,
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

    private eta = "";

    private lg = {
      span: "14",
      offset: "2",
    };

    private md = {
      span: "16",
      offset: "1",
    };

    private sm = {
      span: "22",
      offset: "1",
    };

    get pageSize() {
      return PAGE_SIZE;
    }

    startCountdown() {
      let countDownDate = new Date("Oct 12, 2019 21:00:00").getTime();

      let x = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        this.eta = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          this.eta = "Stay tuned!";
        }
      }, 1000);
    }

    mounted() {
      this.startCountdown();
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
