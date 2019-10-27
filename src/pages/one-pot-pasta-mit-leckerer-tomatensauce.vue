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
            Beim...
          </p>

          <p>
            Pot...
          </p>

          <ArticleImageComponent
            src="/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/one-pot-pasta.jpg"
            alt="One Pot Pasta"
          />

          <h2>Die einzelnen Schritte im Überblick</h2>

          <el-row>
            <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
              <vueper-slides :slide-ratio="0.8">
                <vueper-slide
                  v-for="(url, index) in stepPhotos"
                  :key="index"
                  :image="url"
                ></vueper-slide>
              </vueper-slides>
            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </article>

    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <RecipeComponent :recipe="recipe" :ratings="ratings" style="margin-top: 60px;" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <h3>Variationen</h3>

        <ul>
          <li>...</li>
        </ul>
      </el-col>
    </el-row>

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

  import article from "@/content/articles/one-pot-pasta-mit-leckerer-tomatensauce";
  import recipe from "@/content/recipes/one-pot-pasta-mit-leckerer-tomatensauce";

  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article, recipe),
    components: { VueperSlides, VueperSlide },
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    private stepPhotos = [
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/0.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/1.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/2.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/3.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/4.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/5.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/6.jpeg",
      "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/schritte/7.jpeg",
    ];

    constructor() {
      super(article, recipe);
    }

    async refreshComments() {
      await super.refreshComments();
    }

    created() {
      super.created();
    }

  }

</script>
