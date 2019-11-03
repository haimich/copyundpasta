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
          
          <ArticleJumpToRecipeComponent />

          <p class="entry-paragraph">
            Es...
          </p>

          <p>
            
          </p>

          <YouTubeVideoComponent url="https://www.youtube.com/embed/09smBNps4EM" />

          <el-row>
            <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
              <SlideshowComponent :images="stepPhotos" />
            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </article>

    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <CommentComponent :comments="comments" :slug="article.slug" @commentAdded="refreshComments" />
      </el-col>
    </el-row>

  </div>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import BaseArticlePage from "@/components/BaseArticlePage.vue";
  import ArticleUtil from "@/utils/ArticleUtil";
  import { RatingResponse } from "@/interfaces/Rating";

  import article from "@/content/articles/fine-dining-ausprobiert";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    private stepPhotos = [
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/0.jpeg",
    ];

    constructor() {
      super(article);
    }

    async refreshComments() {
      await super.refreshComments();
    }

    created() {
      super.created();
    }

  }

</script>
