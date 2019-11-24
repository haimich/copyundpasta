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

            https://schlaraffenwelt.de/der-beste-carrotcake-der-welt-besser-als-bei-starbucks/
          </p>

          <h2>Warum wird im Rezept Öl und keine Butter verwendet?</h2>

          <h2>Nüsse rösten</h2>

          <p>
            Walnüsse rösten: Our recipe doesn't specify toasting the nuts, but you should give this a try. Most recipes that call for nuts will benefit from this extra step.
          </p>

          <ArticleImageComponent
            src="/images/articles/saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting/carrot-cake-mit-pistazien-und-zimt.jpg"
            alt="Carrot Cake mit Pistazien und Zimt"
          />

          <h2>Die einzelnen Schritte im Überblick</h2>

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
        <RecipeComponent :recipe="recipe" :ratings="ratings" style="margin-top: 60px;" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <h3>Variationen</h3>

        <ul>
          <li>statt Walnuss geht auch Pecan</li>
          <li>Marzipanmöhren, Walnüsse</li>
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

  import article from "@/content/articles/saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";
  import recipe from "@/content/recipes/saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article, recipe),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    private stepPhotos = [
      `/images/articles/${article.slug}/schritte/1.jpeg`,
      `/images/articles/${article.slug}/schritte/2.jpeg`,
      `/images/articles/${article.slug}/schritte/3.jpeg`,
      `/images/articles/${article.slug}/schritte/4.jpeg`,
      `/images/articles/${article.slug}/schritte/5.jpeg`,
      `/images/articles/${article.slug}/schritte/6.jpeg`,
      `/images/articles/${article.slug}/schritte/7.jpeg`,
      `/images/articles/${article.slug}/schritte/8.jpeg`,
      `/images/articles/${article.slug}/schritte/9.jpeg`,
      `/images/articles/${article.slug}/schritte/10.jpeg`,
      `/images/articles/${article.slug}/schritte/11.jpeg`,
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
