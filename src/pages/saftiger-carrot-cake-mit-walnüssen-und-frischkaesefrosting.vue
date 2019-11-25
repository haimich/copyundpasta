<template>

  <div>
    
    <article>
      <el-row>
        <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">

          <MainHeadingComponent
            :text="article.title"
            :image="article.mainImageUrl"
            :commentCount="commentCount"
          />
          
          <ArticleLinkComponent href="/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting" text="zum Artikel" />

        </el-col>
      </el-row>
    </article>

  </div>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import BaseArticlePage from "@/components/BaseArticlePage.vue";
  import ArticleUtil from "@/utils/ArticleUtil";
  import { RatingResponse } from "@/interfaces/Rating";

  import article from "@/content/articles/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";
  import recipe from "@/content/recipes/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article, recipe),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    constructor() {
      super(article, recipe);
    }

    async refreshComments() {
      await super.refreshComments();
    }

    created() {
      super.created();
    }

    mounted() {
      if (! window) {
        return;
      }

      window.location.href = "https://copyundpasta.de/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";
    }

  }

</script>
