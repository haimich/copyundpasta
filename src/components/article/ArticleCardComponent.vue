<template>

  <div>
    <el-card
      class="article-card"
      :body-style="{ padding: '0px' }"
      shadow="hover"
    >
      <div class="article-image-container">
        <img :src="article.previewImageUrl" alt="Artikelbild">

        <div class="article-card-title">
          <nuxt-link :to="'/' + article.slug" class="article-card-link">
            <span class="article-card-button">
              Ansehen
            </span>
          </nuxt-link>
        </div>
      </div>

      <div class="article-card-body">
        <div class="article-card-category">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(category, index) in categories"
              :key="index"
            >
              {{ category }}
            </el-breadcrumb-item>
          </el-breadcrumb>
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
  import { Article } from "@/interfaces/Article";
  import ArticleCategories from "@/interfaces/ArticleCategories";

  @Component
  export default class ArticleCardComponent extends Vue {

      @Prop()
      private article: Article;

      get categories(): string[] {
        let categories: string[] = [];

        let categoryId = this.article.categoryId;

        while (categoryId != null) {
          let category = ArticleCategories[categoryId];
          
          if (category == null) {
            break;
          }

          categories.unshift(category.name);

          categoryId = category.parentCategory;
        }

        return categories;
      }

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .article-card {
    height: 400px;
    margin-bottom: 27px;
  }

  .article-image-container {
    position: relative;
    width: 100%;
    height: 100%;

    &:hover img {
      filter: brightness(56%);
    }

    &:hover .article-card-title {
      opacity: 1;
    }

    img {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: .6s ease;
      backface-visibility: hidden;
    }

    a:hover {
      text-decoration: none;
    }

    .article-card-title {
      transition: .5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }

    .article-card-button {
      margin-top: 6px;
      display: inline-block;
      padding: 13px 27px;
      border: 2px solid white;
      border-radius: 2px;
      font-size: 16px;
      text-transform: uppercase;
      color: white;
      font-style: italic;
      transition: background-color 0.2s ease, color 0.2s ease;

      &:hover {
        background-color: white;
        color: rgb(75, 75, 75);
      }
    }

    .article-card-link {
      text-decoration: none;
      display: flex;
      justify-content: center;
    }
  }
  
  .article-card-body {
    text-align: center;
    padding: 5px 10px 10px 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    .article-card-category .el-breadcrumb__inner, .article-card-category i, .article-card-category .el-breadcrumb__inner:hover {
      font-size: 13px;
      font-weight: 300;
      color: #DB5353;
    }

    .article-card-heading {
      margin-top: 10px;
      font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, serif;
      font-size: 16px;
      color: #000000cf;
      font-weight: 600;
      line-height: 21px;
    }

    .article-card-date {
      margin-top: 10px;
      display: block;
      font-size: 13px;
      font-weight: 300;
      color: $color-text-regular;
      font-style: italic;
    }
  }

</style>
