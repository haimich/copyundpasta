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
            Mit den hohen Kosten konnte ich mich recht schnell arrangieren, da der Besuch in einem Michelin-Restaurant ja nichts Alltägliches ist. Die gleiche Begründung lässt auch das Argument mit dem Dresscode in den Hintergrund treten, da man sich für einen besonderen Abend ja auch gerne mal etwas in Schale schmeißt. Außerdem kam mir hier der Trend des <ArticleQuoteComponent text="Casual Fine Dinings" /> entgegen, der das Elitäre aus der Sterneküche verbannen will und dieses Erlebnis für einen größeren Kreis an Menschen zugänglich machen will. Ein gutes Beispiel hierfür ist das mit einem Stern ausgezeichnete Restaurant <ArticleLinkComponent href="https://www.emmawolf1920.com/" text="Emma Wolf" />, das ihre Kunden in ungezwungener Atmosphäre in einem Mannheimer Einkaufszentrum begrüßt.
          </p>

          <h2>Mit wem gehe ich hin?</h2>

          <p>
            Blieb also nur noch das letzte Hindernis: Mit wem sollte ich meine kulinarischen Erfahrungen teilen? Anfang letzten Jahres bot sich eine günstige Gelegenheit, meine ansonsten nicht so food-begeisterte bessere Hälfte bei einem Hamburgbesuch auf eine neue kulinarische Ebene zu transportieren. Hierzu hatte ich das <ArticleLinkComponent href="https://thetable-hamburg.de/" text="The Table" /> von Kevin Fehling ins Auge gefasst, das gleich mit 3 Sternen aufwarten kann. Das spannende ist, dass das Restaurant nur über einen einzigen Tisch verfügt, an dem 20 Personen Platz finden. Leider war die Warteliste länger als bei einem Konzertbesuch in der Elbphilharmonie und mein Vorschlag stieß zu Hause auch nicht auf große Gegenliebe (siehe Kapitel <ArticleQuoteComponent text="hohe Kosten" />).
          </p>

          <p>
            Wie der Zufall es so wollte, ergab sich im gleichen Jahr erneut die Gelegenheit, einen Ausflug in die gehobene Gastronomie zu unternehmen, da ich - diesmal ohne bessere Hälfte - ein verlängertes Wochenende in München vebringen wollte. Schnell hatte ich mir einen passendes Sterneladen herausgesucht, das preislich noch bezahlbar schien und meine Reservierung ohne Hinweis auf eine Warteliste freundlich entgegennahm: das <ArticleLinkComponent href="https://www.showroom-restaurant.de/" text="Restaurant Showroom" />.
          </p>

          <p>
            Dominik Käppeler hat das Restaurant samt Stern Anfang 2017 von Andreas Schweiger übernommen, der einigen sicherlich von der TV-Serie <ArticleQuoteComponent text="Die Kochprofis" /> bekannt ist. Hier könnt ihr euch dreiminütige Biografie über den Koch anschauen:
          </p>

          <YouTubeVideoComponent url="https://www.youtube.com/embed/qEM-BkKDBpM" />

          <h2>Der große Abend</h2>

          <p>
            Der Tag der Reservierung war gekommen und meine Vorfreude war groß. Ich hatte mir vorsichtshalber doch etwas Feineres angezogen - man will ja nicht auffallen!
          </p>

          <p>
            Als ich das Restaurant betrat, wurde ich sofort freundlich empfangen und zu meinem Tisch begleitet. Ich wunderte mich ein wenig, dass außer meinem nur ein weiterer Tisch besetzt war, aber das verflog sehr schnell da ich direkt gefragt wurde, ob ich einen Aperitif möchte. Da ich ziemlich überrascht war, bejahte ich dies, ohne weiter nach dem Preis zu fragen. Die Frage des Kellners, ob ich eher in die Richtung <ArticleQuoteComponent text="Sekt" /> oder <ArticleQuoteComponent text="Gin Tonic" /> gehen möchte, beantwortete ich mit Zweiterem. Was mich aber dann doch überforderte, war die Frage nach der genauen Gin- und Tonicsorte. Ich sagte dem Kellner, dass es mir egal ist, woraufhin er erwiderte <ArticleQuoteComponent text="Dann hole ich den Gin aus der Flasche, in der noch am meisten drin ist!" /> 😀
          </p>

          <ArticleImageComponent
            src="/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/gintonic.jpg"
            alt="Der Apertif"
          />

          <p>
            Als nächstes musste ich mich entscheiden, ob ich 5, 6 der 7 Gänge essen wollte. Ich entschied mich für die goldene Mitte und bestellte gleich auch die passende Weinbegleitung dazu. Ab dann ging es Schlag auf Schlag: Bevor der erste Gang überhaupt serviert wurde, kamen kurz hintereinander drei <ArticleQuoteComponent text="Grüße aus der Küche" /> an meinem Tisch an. Außerdem wurde ein Brotkorb samt leckerem Butterschaum serviert mit den Worten <ArticleQuoteComponent text="Damit du auch satt wirst" />. Ihr merkt schon, dass hier ein recht lockerer Umgangston gepflegt wird. Das äußert sich auch darin, dass man von jedem geduzt wird, was zwar anfangs ungewohnt ist aber auch sehr dabei hilft, die Hürden zu dieser extravaganten Welt weiter abzubauen.
          </p>

          <ArticleImageComponent
            src="/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/brot-mit-butterschaum.jpg"
            alt="Brot mit Butterschaum"
          />

          <p>
            Zu jedem Gang wurde ein passender Wein inklusive einer kurzen Beschreibung à la <ArticleQuoteComponent text="Der Wein ist aus dem 17er Baujahr" /> serviert. Das fand ich sehr angenehm, allerdings war mir die Schlagzahl dann irgendwann doch zu hoch, weil zwischen zwei Gängen selten mehr als 10 Minuten vergingen. Gegen Ende hin wurde es dadurch nicht leichter, den Schilderungen des Sommeliers aufmerksam zu folgen.
          </p>

          <p>
            Als nach 4 Gängen immer noch gähnende Leere in dem Restaurant herrschte, beklagte sich eine Servicekraft darüber, dass sie dort sehr unter nicht abgesagten Reservierungen leiden würden. Andere Sternerestaurants sind teilweise sogar schon dazu übergegangen, eine Reservierungsgebühr zu verlangen, die im Falle des Nichterscheinens einbehalten wird. Immerhin betrat zu späterer Stunde dann doch noch ein Pärchen den Gastraum, so dass ich mich nicht ganz so einsam gefühlt habe. 
          </p>

          <p>
            Hier seht ihr, welche Köstlichkeiten mir an dem Abend alle serviert wurden:
          </p>

          <el-row>
            <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
              <SlideshowComponent :images="stepPhotos" />
            </el-col>
          </el-row>

          <p>
            Leider habe ich recht schnell den Überblick über die Gerichte verloren, was nicht nur an dem hohen Weinkonsum lag. Die Teller wurden zwar hochtrabend angekündigt (<ArticleQuoteComponent text="Hier haben wir konfierte rote Bete mit Bioeigelb und Parmesanspähnen" />), aber ich hatte keine Zeit um mich wirklich auf das Gericht einzulassen, denn schon kam der nächste Teller. An den Fleischgang kann ich mich noch gut erinnern: Hier wurde ein Ibericoschwein mit einer Haselnusscreme serviert, das ich sehr genossen habe.
          </p>

          <h2>Die Rechnung</h2>

          <p>
            Auch das längste 5-Gänge-Menü geht irgendwann zu Ende, im Fall vom <ArticleQuoteComponent text="Showroom" /> mit einem fantastisch angerichteten Dessert, gefolgt von einem finalen süßen Gruß aus der Küche. Nun war die Stunde der Wahrheit gekommen: Ich ließ die Rechnung kommen! Ich wusste zwar, wieviel das Menü samt Weinbegleitung kosten sollte, aber ob der vielen Speisen und Getränke blieb trotzdem eine gewisse Unsicherheit, was der Abend wohl kosten würde.
          </p>

          <ArticleImageComponent
            src="/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/rechnung.jpg"
            alt="Die Rechnung"
          />

          <h2>War es das Geld wert?</h2>

          <p>Der Preis ist meiner Ansicht nach gerechtfertigt, da sehr hochwertige Zutaten verarbeitet werden und die Zubereitung sehr aufwändig ist. Bei dem Niveau ist in der Vorbereitung gerne mal eine Person zwei oder mehr Stunden lang mit einem Gang beschäftigt. Das Servicepersonal ist in so einem Haus auch sehr gut ausgebildet und muss entsprechend bezahlt werden.</p>

          <p>
            Der einzigen Kritikpunkt bezüglich der Preise im Showroom war für mich die Intransparenz bei der Bestellung des Gin Tonics. Die 15,50 € haben mich am Schluss dann doch kurz aus den Socken gehauen, wenn auch die Flasche Wasser im Vergleich zu anderen Sternerestaurants recht günstig daherkam.
          </p>

          <h2>Fine Dining: mein Fazit</h2>

          <p>
            Das Essen war wirklich hervorragend und ich kann jedem empfehlen, den Besuch in einem Fine Dining Restaurant auf die persönliche Bucketliste aufzunehmen. Für mich selbst habe ich aber festgestellt, dass mir das Sterneessen nicht so viel gibt, wie ich erwartet hatte. Der hohe Preis schwingt hier natürlich auch mit, aber ich bin insgesamt einfach auch mit einem 15 € Burger zufriedenzustellen, wenn er geschmacklich überzeugt. Was mich auch abgeschreckt hat waren die vielen Gänge, bei denen man zwangsläufig den Überblick verlieren muss. Auch hier reichen sind mir ein oder zwei Gänge am Abend lieber, denn so kann ich mich später viel besser daran erinnern. Ich habe hierzu ein passendes Zitat von dem amerikanischen Sternekoch Grant Achatz gefunden, der vor allem wegen seiner Vorliebe zur molekularen Küche bekannt ist:
          </p>

          <BlockquoteComponent quote="I don't care if you're doing haute cuisine or burgers or pizza, just do it right." author="Grant Achatz" />

          <p>
            Wer jetzt Apettit auf die gehobene Gastronomie bekommen hat, dem möchte ich zum einen den <ArticleLinkComponent href="https://www.viamichelin.de/web/Suchen_Restaurants" text="Guide Michelin" /> ans Herz legen, mit dem man ganz einfach den nächstgelegenen Tempel der Kulinarik finden kann. Auch aus der Blogosphäre möchte ich euch eine Seite empfehlen: die <ArticleLinkComponent href="http://www.sternefresser.de/" text="Sternefresser" /> besuchen regelmäßig die besten Restaurants der Welt und schreiben detaillierte Erlebnisberichte darüber.
          </p>

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
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/1.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/2.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/3.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/4.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/5.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/6.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/7.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/8.jpg",
      "/images/articles/fine-dining-ausprobiert-mein-besuch-im-sternerestaurant/schritte/9.jpg",
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
