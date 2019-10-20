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
            src="/images/articles/zimtschnecken-aka-cinnamon-rolls/cinnamon-rolls.jpg"
            alt="Cinnamon Rolls von oben"
          />

          <vueper-slides :slide-ratio="0.8">
            <vueper-slide
              v-for="(url, index) in stepPhotos"
              :key="index"
              :image="url"
            ></vueper-slide>
          </vueper-slides>

          <el-row style="display: flex; justify-content: center; margin-top: 20px;">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9NFkn3rqffA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
          <li>Apfelstücke oder Rosinen zur Füllung geben</li>
          <li>im Winter kann man statt Zimt auch Lebkuchengewürz verwenden</li>
          <li>in Amerika werden Cinnamon Rolls gerne mit einem <ArticleLinkComponent href="https://thestayathomechef.com/best-homemade-cinnamon-rolls-ever/" text="Frischkäsefrosting" /> serviert</li>
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

  import article from "@/content/articles/zimtschnecken-aka-cinnamon-rolls";
  import recipe from "@/content/recipes/zimtschnecken-aka-cinnamon-rolls";

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
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/1.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/2.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/3.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/4.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/5.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/6.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/7.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/8.jpeg",
      "/images/articles/zimtschnecken-aka-cinnamon-rolls/steps/9.jpeg",
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
