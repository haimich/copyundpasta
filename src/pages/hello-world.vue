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
          
          <p class="entry-paragraph">
            Hello World - das sind typischerweise die ersten Worte, die man von seiner Software ausgeben lässt, wenn man eine neue Programmiersprache erlernt. Ich bin Softwareentwickler von Beruf und habe daher selbst schon viele <ArticleQuoteComponent text="Hello World" />-Programme geschrieben.
          </p>
          
          <p>
            Auf die gleiche Weise möchte ich euch heute gerne auf meinem neuen Foodblog <ArticleQuoteComponent text="Copy & Pasta" /> willkommen heißen! In diesem Artikel möchte ich euch erzählen, wie es zu der Idee gekommen ist, wie der Name entstand und was euch auf diesem Blog thematisch erwartet.
          </p>

          <h2>Softwareentwickler haben doch keine Hobbys?!</h2>

          <p>
            Entwickler genießen ja nicht unbedingt den besten Ruf: Den typischen Nerd stellt man sich gerne übergewichtig, langhaarig und mit dicken Brillengläsern vor &hellip; oder aber so wie den hier unten abgebildeten Herrn. Er sitzt in einem dunklen Keller vor drei extrabreiten Monitoren, über die permanent seltsame Hieroglyphen rattern, während er in einem Affenzahn auf seiner Tastatur rumhämmert. In der Freizeit geht er nicht viel aus dem Haus, lässt sich dafür umso lieber Pizza liefern und zockt den ganzen Tag Computerspiele.
          </p>

          <ArticleImageComponent
            src="/images/articles/hello-world/coder.gif"
            alt="Software Entwickler"
          />

          <p>
            Ich will nicht leugnen, dass es diese Spezies gibt, aber die Mehrzahl der Entwickler in meinem Umfeld sind sehr umgänglich und haben durchaus auch kreative Hobbys, in dem der Computer keine Rolle spielt.
          </p>

          <p>
            Meine große Leidenschaft ist das Kochen. Schon in jungen Jahren habe ich ein ausgeprägtes Interesse dafür entwickelt und habe häufig neue Gerichte ausprobiert. Kochen war für mich also immer schon mehr als nur Mittel zum Zweck, aber erst vor einem Jahr wurde ich so richtig von dem <ArticleQuoteComponent text="Foodie-Virus" /> angesteckt.
          </p>

          <p>
            Ich war bei Freunden zum Raclette-Essen eingeladen und die Gastgeberin hatte ein tolles selbst gebackenes Brot vorbereitet. Natürlich wollte ich sofort das Rezept haben und habe es ein paar Tage später selbst zu Hause ausprobiert. Das Ergebnis kam leider geschmacklich nicht an das Original ran, also habe ich das Rezept etwas verändert und einen zweiten Versuch gestartet. Ich war immer noch nicht zufrieden und habe mich gefragt, warum das Rezept bei mir nicht so funktioniert wie bei der Urheberin. Schnell kam ich darauf, dass mir einfach das Wissen über das Brotbacken fehlt. Ich habe mir daher ein <ArticleLinkComponent href="https://www.brotbackbuch.de/brot-backen-in-perfektion/buch/" text="Brotbackbuch" /> gekauft und mich immer tiefer in die Materie eingelesen. Nach dem vierten Versuch konnte sich mein eigenes Brot schon wirklich sehen lassen und wurde gelobt.
          </p>

          <p>
            Seit dem vergeht kein Tag, an dem ich keine neuen Gerichte in der Küche ausprobiere oder mir neues Kochwissen durch Bücher, Kurse oder Blogs aneigne. Das hat mich irgendwann zu der Frage gebracht: Was tun mit der gesammelten Erfahrung in der Küche? Eine Umschulung zum Koch schien mir zu drastisch, aber einen eigenen Blog könnte ich gut in meiner Freizeit betreiben und hätte dadurch die Möglichkeit, mich noch intensiver mit meinem Hobby auseinanderzusetzen.
          </p>

          <h2>Die Namensfindung</h2>

          <p>
            Die Entscheidung, einen eigenen Food Blog zu starten, war also gefallen, aber wie sollte ich das Projekt nennen? Über die Zeit kamen so kreative Namen zustande wie <br /><br />

            <ArticleQuoteComponent text="Taste Hunter" />, <ArticleQuoteComponent text="Schlemmerblog" />, <ArticleQuoteComponent text="Captain Cook" />, <ArticleQuoteComponent text="Peter Pan" /> und nicht zu vergessen <ArticleQuoteComponent text="Breaking Bread" />.<br /><br />

            Über 50 Ideen hatte ich gesammelt, bis letztendlich ein Freund <ArticleQuoteComponent text="Copy & Pasta" /> vorschlug. Der Name stellt für mich eine schöne Verbindung meiner beiden Leidenschaften dar, dem Computer und der Kochkunst. Außerdem liebe ich Pasta :-)
          </p>

          <h2>Die Umsetzung</h2>

          <p>
            Nachdem der Name gefunden war, konnte ich endlich mit der Umsetzung starten. Bei einem Treffen mit der erfahrenen Foodbloggerin Juliane von <ArticleLinkComponent href="https://schoenertagnoch.de/" text="schoenertagnoch.de" /> wurden viele meiner Fragen beantwortet - vielen Dank dafür! <br />
          </p>

          <p>
            Das Logo, mit dem ich sehr zufrieden bin, hat David Perez von <ArticleLinkComponent href="https://kreativdesign-karlsruhe.de/" text="kreativdesign-karlsruhe.de" /> für mich gestaltet. So sah ein erster Entwurf aus:
          </p>

          <ArticleImageComponent
            src="/images/articles/hello-world/logo-entwurf.jpg"
            alt="Cupcake"
          />

          <p>
            Des Weiteren möchte ich mich bei Sarah von <ArticleLinkComponent href="https://www.meinlichtspiel.com/" text="www.meinlichtspiel.com" /> bedanken, die unter anderem das Coverfoto von diesem Artikel und die Fotos im Bereich "Über Mich" gemacht hat. Sprachlich unterstützte mich <ArticleLinkComponent href="https://marketing.triacom.com/" text="Thea Döhler" />, damit meine Texte sich leichter lesen lassen und ansprechend klingen. Auch Dir ein herzliches Dankeschön!
          </p>

          <p>
            Da nun auch das Design feststand blieb nur noch die technische Umsetzung: Hier war mir sehr schnell klar, dass ich den Blog von Grund auf selbst programmieren würde. Ich bin sehr glücklich mit dieser Entscheidung, denn es gibt mir größtmögliche Freiheit bei der Gestaltung und es macht auch noch Spaß :-) Der Code ist übrigens <ArticleLinkComponent href="https://github.com/haimich/copyundpasta" text="öffentlich verfügbar" />.
          </p>

          <h2>Geht es hier nur um Pasta?</h2>

          <p>
            Ich mag Pasta zwar sehr, aber ich interessiere mich für so viele kulinarische Themen, dass ich mich unmöglich auf nur einen Bereich konzentrieren kann. Vielmehr möchte ich die ganze Bandbreite abdecken: von dem Rezept für perfekten Pizzateig über leckeren Kuchen bis hin zu thailändischer Currypaste.
          </p>

          <h2>Wie kann ich den Blog abonnieren?</h2>

          <p>
            Wenn du über neue Artikel automatisch informiert werden möchtest, hast du drei Möglichkeiten:
          </p>

          <ul>
            <li>trage dich in den <ArticleLinkComponent href="https://gmx.us20.list-manage.com/subscribe/post?u=1c249484bbe9d6816f42135ee&id=8d55aeb1b7" text="Newsletter ein" /></li>
            <li>abonniere den <ArticleLinkComponent href="/feed/rss.xml" text="RSS-Link" /> mit einem geeigneten Programm (z. B. Feedly)</li>
            <li>folge mir auf <ArticleLinkComponent href="https://www.pinterest.de/copyundpasta" text="Pinterest" /></li>
          </ul>

          <p>
            Ich plane derzeit, den Newsletter 2 mal pro Monat zu verschicken. Wenn ihr den Blog über RSS abonniert, hat das den Vorteil, dass neue Artikel sofort in eurem Reader auftauchen.<br />
            Eine vierte Möglichkeit gibt es natürlich auch noch: Schaut einfach gelegentlich mal auf der Seite vorbei, um zu sehen, welche kulinarischen Erlebnisse ich in letzter Zeit für mich entdeckt habe. 
          </p>

          <p>
            Ich würde mich freuen, wenn ihr das ein oder andere Rezept nachkocht und einen Kommentar oder eine Bewertung hinterlasst!
            <br /><br />
            <strong style="font-size: 19px;">Bis dahin, viel Spaß beim Lesen :)</strong>
          </p>

        </el-col>
      </el-row>
    </article>

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

  import article from "@/content/articles/hello-world";

  @Component({
    head: ArticleUtil.defaultHead(article),
    asyncData: ArticleUtil.defaultAsyncData(article),
  })
  export default class extends BaseArticlePage {

    private ratings: RatingResponse;

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
