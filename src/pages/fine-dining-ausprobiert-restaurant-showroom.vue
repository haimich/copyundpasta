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
            Wart ihr schon mal in einem Sternerestaurant essen? Mich hat das Thema schon immer gereizt, weil ich einfach neugierig darauf war, ob der Geschmack der Speisen auf diesem hohen Niveau wirklich so viel besser ist als bei <ArticleQuoteComponent text="normalen" /> Restaurantbesuchen. Aber es gab einige Gründe, warum ich mir diesen Wunsch lange Zeit nicht erfüllt habe:
          </p>

          <ul>
            <li>die hohen Kosten</li>
            <li>den Dresscode, der vom Kunden erwartet wird</li>
            <li>wenn man nicht alleine hingehen möchte, muss man jemanden finden, der genauso von gutem Essen begeistert ist, wie man selbst</li>
          </ul>

          <p>
            Mit den hohen Kosten konnte ich mich recht schnell arrangieren, da der Besuch in einem <ArticleLinkComponent href="https://www.viamichelin.de/web/Suchen_Restaurants" text="Michelin" />-Restaurant ja nichts Alltägliches ist. Die gleiche Begründung lässt auch das Argument mit dem Dresscode in den Hintergrund treten, da man sich für einen besonderen Abend ja auch gerne mal etwas in Schale schmeißt. Außerdem kam mir hier der Trend des <ArticleQuoteComponent text="Casual Fine Dinings" /> entgegen, der das Elitäre aus der Sterneküche verbannen will und dieses Erlebnis für einen größeren Kreis an Menschen zugänglich machen will. Ein gutes Beispiel hierfür ist das mit einem Stern ausgezeichnete Restaurant <ArticleLinkComponent href="https://www.emmawolf1920.com/" text="Emma Wolf" />, das Ihre Kunden in lockerer Athmosphäre in einem Mannheimer Einkaufszentrum begrüßt.
          </p>

          <h2>Mit wem gehe ich hin?</h2>

          <p>
            Blieb also nur noch das letzte Hindernis: mit wem sollte ich meine kulinarischen Erfahrungen teilen? Anfang letzten Jahres bot sich eine günstige Gelegenheit, meine ansonsten nicht so food-begeisterte bessere Hälfte bei einem Hamburgbesuch auf eine neue kulinarische Ebene zu transportieren. Hierzu hatte ich das <ArticleLinkComponent href="https://thetable-hamburg.de/" text="The Table" /> von Kevin Fehling ins Auge gefasst, das gleich mit 3 Sternen aufwarten kann. Das spannende ist, dass das Restaurant nur über einen einzigen Tisch verfübt, an dem 20 Personen Platz finden. Leider war die Warteliste länger als bei einem Konzertbesuch in der Elbphilharmonie und mein Vorschlag stieß zu Hause auch nicht auf große Gegenliebe (siehe Kapitel <ArticleQuoteComponent text="hohe Kosten" />).
          </p>

          <p>
            Wie der Zufall es so wollte, ergab sich im gleichen Jahr erneut die Gelegenheit, einen Ausflug in die gehobene Gastronomie zu unternehmen, da ich - diesmal ohne bessere Hälfte - ein verlängertes Wochenende in München vebringen wollte. Schnell hatte ich mir einen passendes Sterneladen herausgesucht, das preislich noch bezahlbar schien und meine Reservierung ohne Hinweis auf eine Warteliste freundlich entgegennahm: das <ArticleLinkComponent href="https://www.showroom-restaurant.de/" text="Restaurant Showroom" />.
          </p>

          <p>
            Dominik Käppeler hat das Restaurant samt Stern Anfang 2017 von Andreas Schweiger übernommen, der einigen sicherlich von der TV-Serie <ArticleQuoteComponent text='Die Kochprofis' /> bekannt ist. Hier könnt ihr euch dreiminütige Biografie über den Koch anschauen:
          </p>

          <YouTubeVideoComponent url="https://www.youtube.com/embed/qEM-BkKDBpM" />

          <h2>Der große Abend</h2>

          <p>
            Der Tag der Reservierung war gekommen und meine Vorfreude war groß. Ich hatte mir vorsichtshalber doch etwas feineres angezogen - man will ja nicht auffallen!
          </p>

          <p>
            Als ich das Restaurant betrat, wurde ich sofort freundlich empfangen und zu meinem Tisch begleitet. Ich wunderte mich ein wenig, dass außer meinem nur ein weiterer Tisch besetzt war, aber das verflog sehr schnell da ich direkt gefragt wurde, ob ich einen Aperitif möchte. Da ich ziemlich überrascht war, bejahte ich dies, ohne weiter nach dem Preis zu fragen. Die Frage des Kellners, ob ich eher in die Richtung <ArticleQuoteComponent text="Sekt" /> oder <ArticleQuoteComponent text="Gin Tonic" /> gehen möchte, beantwortete ich mit Zweiterem. Was mich aber dann doch überforderte, war die Frage nach der genauen Gin- und Tonicsorte 😀
          </p>

          <ArticleImageComponent
            src="/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/gintonic.jpg"
            alt="Der Apertif"
          />

          <p>
            Man wird hier vom Personal geduzt, was zwar anfangs ungewohnt ist aber auch sehr dabei hilft, die Hürden zu dieser extravaganten Küche abzubauen.
          </p>

          <el-row>
            <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
              <SlideshowComponent :images="stepPhotos" />
            </el-col>
          </el-row>

          <h2>Die Rechnung</h2>

          <ArticleImageComponent
            src="/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/rechnung.jpg"
            alt="Die Rechnung"
          />

          <h2>War es seinen Preis wert?</h2>

          // hochwertige Lebensmittel
          // viel Personal (gut ausgebildet): Köche und Service; außerdem Wein
          // Zubereitung sehr aufwändig

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

  import article from "@/content/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant";

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
