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
            Beim Anblick von Zimtschnecken werden bei mir Kindheitserinnerungen wach: wenn meine Mutter sie gemacht hat, musste sie immer zwei Varianten backen, weil ein Teil der Familie Rosinen auf den Tod nicht ausstehen konnte. Wenn ihr euch das Rezept unten anschaut, wisst ihr, zu welchem Teil ich gehört habe :-) <br /><br />

            Ich verspreche euch, dass ein herrlicher Zimtduft eure Wohnung durchströmen wird, wenn ihr dieses Rezept zu Hause ausprobiert. Das Beste dabei ist das Format: Da meine Zimtschnecken nicht so groß sind, eignen sie sich wunderbar, um sie in Muffinförmchen aus Papier zu servieren: der Hit auf jeder Party oder im Kollegenkreis!
          </p>

          <ArticleImageComponent
            src="/images/articles/zimtschnecken-aka-cinnamon-rolls/cinnamon-rolls.jpg"
            alt="Cinnamon Rolls von oben"
          />

          <p>
            Zimtschnecken aus Hefeteig sind in vielen Ländern der Erde beliebt, aber erfunden wurden sie mit großer Wahrscheinlichkeit in Schweden. Hier nennt man das Zimtgebäck <i>Kanelbulle</i> und ist so stolz darauf, dass man ihm sogar einen eigenen Feiertag gewidmet hat: am 4. Oktober wird hier jedes Jahr der <ArticleQuoteComponent text="Kanelbullens Dag" /> gefeiert. <br /><br />

            Neben Schweden hat sich aber noch ein weiteres Land in die süßen Schnecken verliebt: in den USA werden sie <ArticleQuoteComponent text="Cinnamon Rolls" /> oder auch <ArticleQuoteComponent text="Cinnamon Buns" /> genannt. Die amerikanischen Rezepte tun sich besonders durch das großzügige Frosting hervor, das die Kalorienzahl der kleinen Kuchen allerdings ganz schön in die Höhe schnellen lässt. 
            
            Die schwedische A Capella Band <strong>The Real Group</strong> hat hierzu den passenden Song geschrieben: <ArticleQuoteComponent text="A minute on your lips, a lifetime on your hips..." />
          </p>

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

          <h2>Wie forme ich die Zimtschnecken?</h2>

          <p>
            Der Teig wird zunächst ausgerollt und dann mit einer Mischung aus Butter und braunem Zucker bestrichen. Danach wird er zusammengerollt und in kleine Stücke aufgeteilt. <br /><br />Die genaue Beschreibung findest du weiter unten im Rezept.
          </p>

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
          <li>Apfelstücke oder Rosinen zur Füllung geben</li>
          <li>im Winter kann man statt Zimt auch Lebkuchengewürz verwenden</li>
          <li>eine besondere Finesse verleiht auch Kardamom</li>
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
