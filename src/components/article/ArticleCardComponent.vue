<template>

  <div>
    <el-card
      class="article-card"
      :body-style="{ padding: '0px' }"
      shadow="hover"
    >
      <img :src="article.previewImageUrl" alt="Artikelbild">

      <div class="article-card-body">
        <div class="article-card-category">
          Süße Rezepte <i class="el-icon-caret-right"></i> Rührkuchen
        </div>

        <div class="article-card-heading">
          {{ article.title }}
        </div>

        <time class="article-card-date">
          {{ article.createdAt | formatAsDate }}
        </time>
      </div>
    </el-card>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Article } from "../../interfaces/Article";

  @Component
  export default class ArticleCardComponent extends Vue {

      @Prop()
      private article: Article;

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .article-card {
    height: 412px;
    margin-bottom: 27px;

    img {
      width: 100%;
    }
  }

  .article-card-body {
    text-align: center;
    padding: 5px 10px 10px 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    .article-card-category {
      font-size: 11px;
      color: #DB5353;
    }

    .article-card-heading {
      margin-top: 10px;
      font-family: "Merriweather", "Helvetica Neue", Helvetica, Arial, serif;
      font-size: 14.5px;
      color: #000000cf;
      font-weight: 600;
    }

    .article-card-date {
      margin-top: 10px;
      display: block;
      font-size: 13px;
      font-style: italic;
      color: $color-text-primary;
    }
  }

</style>
