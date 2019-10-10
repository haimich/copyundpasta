<template>

  <div>
    
    <article>
      <el-row>
        <el-col
          :xl="xl"
          :lg="lg"
          :md="md"
          :sm="sm"
          :xs="xs"
        >

          <MainHeadingComponent
            :text="article.title"
            :image="article.previewImageUrl"
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

          <p>
            Martha’s recipe makes 32 cupcakes. I didn’t need quite that many (read: if I make that many I’ll eat them all), so for the sake of our waistlines, I halved it. Her recipe says to fill the liners 3/4 full, which is a lot, but I thought maybe they wouldn’t bake up so high. The cupcakes came out a little larger than I expected – I should have gone with my gut! They were quite domed when they came out of the oven, and I actually used a tea towel to press them down a bit so they wouldn’t be so puffy. Next time I’ll only fill the liners 2/3 full as usual, and make a few more cupcakes instead.
          </p>

        </el-col>
      </el-row>
    </article>

    <el-row style="margin-top: 20px;">
      <el-col
        :xl="xl"
        :lg="lg"
        :md="md"
        :sm="sm"
        :xs="xs"
      >
        <RecipeComponent :recipe="recipe" :ratings="ratings" style="margin-top: 40px;" />
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px;">
      <el-col
        :xl="xl"
        :lg="lg"
        :md="md"
        :sm="sm"
        :xs="xs"
      >
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
