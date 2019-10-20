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
            Einleitung
          </p>

          <ArticleImageComponent
            src="https://livforcake.com/wp-content/uploads/2015/02/IMG_49822.jpg"
            alt="Cupcake"
          />

          <p>
            The cupcake recipe is straight up from my 

            <ArticleLinkComponent href="https://www.marthastewart.com/355559/devils-food-cupcakes" text="Martha Stewart’s Cupcakes book" />,

            but the frosting is my own creation.
          </p>

          <el-carousel height="718px">
            <el-carousel-item
              v-for="(url, index) in stepPhotos"
              :key="index"
              :autoplay="false"
            >
              <el-image
                :src="url"
                fit="contain"
                alt="Rezeptschritte"
              ></el-image>
            </el-carousel-item>
          </el-carousel>

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

  import article from "@/content/articles/zimtschnecken-aka-cinnamon-rolls";
  import recipe from "@/content/recipes/zimtschnecken-aka-cinnamon-rolls";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article, recipe),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    private stepPhotos = [
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/1.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/2.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/3.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/4.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/5.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/6.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/7.jpeg",
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
