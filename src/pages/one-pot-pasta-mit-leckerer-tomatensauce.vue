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
            Es ist schon ein paar Jahre her, als die amerikanische TV-Köchin Martha Stewart mit ihrer Eigenkreation namens <ArticleQuoteComponent text="One Pot Pasta" /> einen riesen Trend ausgelöst hat. Dabei ist die Idee so einfach: man schichtet alle Zutaten in einen Topf, füllt diesen mit Wasser auf und bekommt am Schluss eine perfekt gegarte Pasta mit einer wunderbar sämigen Sauce.
          </p>

          <p>
            So sieht es aus, wenn Frau Stewart das Gericht kocht:
          </p>

          <YouTubeVideoComponent url="https://www.youtube.com/embed/09smBNps4EM" />

          <h2>Ist es wirklich so simpel?</h2>

          <p>
            Ich muss zugeben ich war skeptisch, als ich das Rezept zum ersten Mal ausprobiert habe: konnte es wirklich so einfach sein, ein Pastagericht zu zaubern, das am Ende auch noch geschmacklich überzeugt? Ich muss sagen, dass mich das Originalrezept in dieser Hinsicht ziemlich enttäuscht hat. Die Sauce wird zwar tatsächlich schön sämig bei diese Kochmethode, aber es entwickelt sich kaum ein nennenswerter Eigengeschmack. Dies hat womöglich auch dazu beigetragen, dass Italiener dem Gericht wenig abgewinnen können. Das lassen jedenfalls die Kommentare unter diesem <ArticleLinkComponent href="https://youtu.be/0VQEJARHJ44" text="YouTube-Video" /> vermuten. Hier liest man so Sätze wie „wrong title, it should be named <i>how to trigger Italians in under 6 minutes</i>“ oder <ArticleQuoteComponent text="Every view this video gets a nonna dies" />.
          </p>

          <h2></h2>

          <p>
            Allen Kritikern zum Trotz war nach dem ersten gescheiterten Versuch mein kulinarischer Ehrgeiz geweckt! Ich wollte sowohl diese wunderbar sämige Konsistenz der Sauce erreichen als auch das Geschmackserlebnis intensivieren. Als erste Änderung an dem Rezept habe ich die Zwiebeln in Olivenöl angebraten und sie mit Weißwein abgelöscht. Das war ein kleiner aber wichtiger Schritt, um dem Geschmack auf die Sprünge zu helfen. Als nächstes habe ich zuerst mit angebratenem Speck und dann mit Hackfleisch experimentiert, da Fleisch ja bekanntlich ein guter Geschmacksgeber ist. Auch diese Veränderung hat sich ausgezahlt, wobei ich Fleisch bei diesem Gericht trotzdem nicht als notwendig erachte.
          </p>

          <p>
            Der Durchbruch kam erst, als ich die Sauce zusätzlich mit Tomatenmark angereichert und einen Teil des Wassers durch Dosentomaten ersetzt habe. Das war endlich der Geschmack, den ich mir vorgestellt habe. Die Nudeln saugen sich so richtig schön mit der Tomatensauce voll und geben ihrerseits Stärke an die Kochflüssigkeit ab. Das Ergebnis ist ein geschmackvolles Gericht, das schnell zubereitet ist und für das man eigentlich immer alle Zutaten im Haus hat. Das würde sicherlich auch der italienischen Nonna gefallen 😎
          </p>

          <ArticleImageComponent
            src="/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/one-pot-pasta.jpg"
            alt="One Pot Pasta"
          />

          <h2>Worauf kommt es an?</h2>

          <ul>
            <li>wichtig ist die richtige Menge an Flüssigkeit: nehmt lieber am Anfang etwas weniger, man kann immer noch etwas nachschütten</li>
            <li>man braucht mehr Flüssigkeit als bei einer getrennten Zubereitung der Sauce, da die Nudeln viel Flüssigkeit aufsaugen, die sie normalerweise aus dem Kochwasser bekommen würden</li>
            <li>da die Nudeln nicht in Salzwasser gegart werden, benötigt das Gericht mehr Salz als eine klassische Nudelsauce</li>
          </ul>

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
          <li>für eine fleischhaltige Variante wahlweise 400 g Hackfleisch oder 150 g Speck kurz nach den Zwiebeln anbraten</li>
          <li>getrocknete Tomaten</li>
          <li>Frühlingszwiebeln</li>
          <li>Chilischote</li>
          <li>Pinienkerne (trocken anrösten, dann aus dem Topf nehmen und beim Servieren auf die Teller streuen)</li>
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

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article, recipe),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

    private stepPhotos = [
      `/images/articles/${article.slug}/schritte/0.jpeg`,
      `/images/articles/${article.slug}/schritte/1.jpeg`,
      `/images/articles/${article.slug}/schritte/2.jpeg`,
      `/images/articles/${article.slug}/schritte/3.jpeg`,
      `/images/articles/${article.slug}/schritte/4.jpeg`,
      `/images/articles/${article.slug}/schritte/5.jpeg`,
      `/images/articles/${article.slug}/schritte/6.jpeg`,
      `/images/articles/${article.slug}/schritte/7.jpeg`,
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
