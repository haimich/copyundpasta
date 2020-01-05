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
            Als ich zum ersten Mal einen Hokkaido-Kürbis zubereitet habe, war ich zunächst skeptisch, ob man die Schale wirklich mitessen kann. Mittlerweile ist dieser Kürbis fester Bestandteil meines kulinarischen Repertoires geworden, weil er sich sehr einfach verarbeiten lässt und eine perfekte Größe hat, wodurch in der Regel keine Reste übrig bleiben. Der Hokkaido überzeugt aber auch auf der geschmacklichen Ebene und lässt sich wunderbar füllen oder wie in diesem Rezept zu einer Suppe verarbeiten.
          </p>

          <p>
            Der Hokkaido hat seinen Namen der gleichnamigen japanischen Insel zu verdanken, auf der Saichirō Matsumoto diese besondere Züchtung im Jahr 1933 unter dem Namen "Uchiki Kuri" vorstellte. Es gibt übrigens auch eine <ArticleLinkComponent href="https://en.wikipedia.org/wiki/Hokkaido_(dog)" text="Hunderasse" /> mit dem gleichen Namen :-)
          </p>

          <p>
            Hokkaido-Kürbisse werden zwischen September und Dezember geerntet, was sie zu einem wunderbaren Begleiter in der kalten Jahreszeit macht. Sie halten sich bei intaktem Stielansatz mehrere Monate, was aber in der Praxis selten nötig ist, da sie mittlerweile ganzjährig in unseren Supermärkten erhältlich sind. Seit den 1990er Jahren werden Hokkaidokürbisse auch in Europa angebaut.
          </p>

          <h2>Warum benötigt das Rezept keine Gemüsebrühe?</h2>

          <p>
            Ich verwende in meiner Küche selbst häufig Gemüsebrühe, um Suppen oder Saucen schmackhafter zu machen. Bei diesem Rezept ist das aber nicht nötig, weil schon alle typischen Zutaten wie z. B. Karotten und Sellerie enthalten sind.
          </p>

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
          <li>wer es cremiger möchte, kann nach dem Pürieren noch 200 ml Sahne oder Kokosmilch hinzugeben</li>
          <li>statt Speckwürfeln könnt ihr auch angebratenes Hackfleisch verwenden</li>
          <li>sehr gut als Beilage eignen sich auch Garnelen, die ihr zum Beispiel auf einem Spieß servieren könnt</li>
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

  import article from "@/content/articles/kuerbissuppe-mit-ingwer";
  import recipe from "@/content/recipes/kuerbissuppe-mit-ingwer";

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
      `/images/articles/${article.slug}/schritte/12.jpeg`,
      `/images/articles/${article.slug}/schritte/13.jpeg`,
      `/images/articles/${article.slug}/schritte/14.jpeg`,
      `/images/articles/${article.slug}/schritte/15.jpeg`,
      `/images/articles/${article.slug}/schritte/16.jpeg`,
      `/images/articles/${article.slug}/schritte/17.jpeg`,
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
