<template>

  <div>
    
    <article>
      <el-row>
        <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">

          <MainHeadingComponent
            :text="article.title"
            :image="article.previewImageUrl"
            :commentCount="commentCount"
          />
          
          <p class="entry-paragraph">
            “Hello World” - das sind typischerweise die ersten Worte, die man von einer selbst geschriebenen Software ausgeben lässt, wenn man eine neue Programmiersprache lernt.
          </p>
          
          <p>
            Auf die gleiche Weise möchte ich euch heute gerne auf meinem neuen Foodblog “Copy & Pasta” willkommen heißen! In diesem Artikel möchte ich euch erzählen, wie es zu der Idee gekommen ist, wie der Name entstand und was euch auf diesem Blog thematisch erwartet.
          </p>

          <h2>Softwareentwickler haben doch keine Hobbys?!</h2>

          <p>
            Entwickler genießen ja nicht unbedingt den besten Ruf: Den typischen Nerd stellt man sich gerne übergewichtig, langhaarig und mit dicken Brillengläsern vor. Er sitzt in einem dunklen Keller vor drei extrabreiten Monitoren, über die permanent seltsame Hieroglyphen rattern, während er in einem Affenzahn auf seiner Tastatur rumhämmert. In der Freizeit geht er nicht viel aus dem Haus, lässt sich dafür umso lieber Pizza liefern und zockt den ganzen Tag Computerspiele.
          </p>

          <p>
            Ich will nicht leugnen, dass es diese Spezies gibt, aber die Mehrzahl der Entwickler in meinem Umfeld sind sehr umgänglich und haben durchaus auch kreative Hobbys, in dem der Computer keine Rolle spielt.
          </p>

          <p>
            Meine große Leidenschaft ist das Kochen. Schon in jungen Jahren habe ich ein ausgeprägtes Interesse dafür entwickelt und habe immer mal wieder neue Gerichte ausprobiert. Kochen war für mich also immer schon mehr als nur Mittel zum Zweck, aber erst vor einem Jahr wurde ich so richtig von dem “Foodie-Virus” angesteckt.
          </p>

          <p>
            Ich war bei Freunden zum Raclette-Essen eingeladen und die Gastgeberin hatte ein tolles selbst gebackenes Brot vorbereitet. Natürlich wollte ich sofort das Rezept haben und habe es ein paar Tage später selbst zu Hause ausprobiert. Das Ergebnis kam leider geschmacklich nicht an das Original ran, also habe ich das Rezept etwas verändert und einen zweiten Versuch gestartet. Ich war leider immer noch nicht zufrieden und habe mich gefragt, warum das Rezept bei mir nicht so funktioniert wie bei der Urheberin des Rezepts. Schnell kam ich darauf, dass mir einfach das Wissen über das Brotbacken fehlt fehlte. Ich habe mir daher ein Buch (TODO LINK) über das Thema gekauft und mich immer tiefer in die Materie eingelesen. Nach dem vierten Versuch konnte sich mein eigenes Brot schon wirklich sehen lassen und wurde gelobt.
          </p>

          <p>
            Seit dem vergeht kein Tag, an dem ich keine neuen Gerichte in der Küche ausprobiere oder mir neues Kochwissen durch Bücher, Kurse oder Blogs aneigne. Das hat mich irgendwann zu der Frage gebracht: Was tun mit der gesammelten Erfahrung in der Küche? Eine Umschulung zum Koch schien mir zu drastisch, aber einen eigenen Blog könnte ich gut in meiner Freizeit betreiben und hätte dadurch die Möglichkeit, mich noch intensiver mit meinem Hobby auseinanderzusetzen.
          </p>

          <h2>Die Namensfindung</h2>

          <p>
            Die Entscheidung, einen eigenen Food Blog zu starten, war also gefallen. Aber wie sollte ich das Projekt nennen? Es ist mir nicht leicht gefallen, mich für einen Namen zu entscheiden. Über 50 Ideen hatte ich gesammelt, bis letztendlich ein Freund den Namen “Copy & Pasta” vorgeschlagen hat. Der Name stellt für mich eine schöne Verbindung meiner beiden Leidenschaften dar, dem Computer und der Kochkunst. Außerdem liebe ich Pasta :-)
          </p>

          <h2>Die Umsetzung</h2>

          <p>
            Nachdem der Name gefunden war, konnte ich endlich mit der Umsetzung starten. Bei einem Treffen mit der erfahrenen Foodbloggerin Juliane von schoenertagnoch.de wurden viele meiner Fragen beantwortet - vielen Dank dafür! <br />
            Das Logo hat David Perez von <ArticleLinkComponent href="https://kreativdesign-karlsruhe.de/" text="Kreativdesign KA">kreativdesign-karlsruhe.de</ArticleLinkComponent> für mich gestaltet. So sah übrigens ein erster Entwurf aus:
          </p>

          <ArticleImageComponent
            src="/images/articles/hello-world/logo-entwurf.jpg"
            alt="Cupcake"
          />

          <p>
            Blieb nur noch die technische Umsetzung: hier war mir sehr schnell klar, dass ich den Blog von Grund auf selbst programmieren würde. Ich bin sehr glücklich mit dieser Entscheidung, denn es gibt mir größtmögliche Freiheit bei der Umsetzung und es macht auch noch Spaß :-) Der Code ist übrigens <ArticleLinkComponent href="https://github.com/haimich/copyundpasta" text="Source Code von Copy & Pasta">öffentlich verfügbar</ArticleLinkComponent>!
          </p>

          <h2>Geht es hier nur um Pasta?</h2>

          <p>
            Ich mag Pasta zwar sehr, aber ich interessiere mich für so viele kulinarische Themen, dass ich mich unmöglich auf nur einen Bereich konzentrieren kann. Vielmehr möchte ich die ganze Bandbreite abdecken: von dem Rezept für perfekten Pizzateig über leckeren Kuchen bis hin zu thailändischer Currypaste. TODO Hier vielleicht noch: Dabei gehe ich aber nicht unbedingt methodisch vor, sondern lasse mich gerne von besonderen Urlaubserlebnissen, Ideen anderer begeisterten Hobbyköchen oder von ausgefallenen Zutaten inspirieren, die ich gerne eher früher als später in meiner Küche umsetze. 
          </p>

          <h2>Wie kann ich den Blog abonnieren?</h2>

          <p>
            Wenn du über neue Artikel automatisch informiert werden möchtest, hast du zwei Möglichkeiten:
          </p>

          <ul>
            <li>trage dich in den <ArticleLinkComponent href="https://gmx.us20.list-manage.com/subscribe/post?u=1c249484bbe9d6816f42135ee&id=8d55aeb1b7" text="Newsletter"> Newsletter ein</ArticleLinkComponent></li>
            <li>abonniere den <ArticleLinkComponent href="/feed/rss.xml" text="RSS Feed">RSS-Link</ArticleLinkComponent> mit einem geeigneten Programm (z. B. Feedly)</li>
            <li>folge mir auf <ArticleLinkComponent href="https://www.pinterest.de/copyundpasta" text="Copy & Pasta bei Pinterest">Pinterest</ArticleLinkComponent></li>
          </ul>

          <p>
            Ich plane derzeit, den Newsletter zwei mal pro Monat zu verschicken. Wenn ihr den Blog über RSS abonniert, hat das den Vorteil, dass neue Artikel sofort in eurem Reader auftauchen.<br />
            Eine dritte Möglichkeit gibt es natürlich auch noch: Schaut einfach gelegentlich mal auf der Seite vorbei, um zu sehen, ob es etwas Neues gibt. 
          </p>

          <p>
            Ich würde mich freuen, wenn ihr das ein oder andere Rezept nachkocht und einen Kommentar oder eine Bewertung hinterlasst!

            <strong>Bis dahin, viel Spaß beim Lesen :)</strong>
          </p>

          <p>
            Cristis Vorschläge:

letzten Satz noch überarbeiten: “…um zu sehen, welche kulinarischen Erlebnisse ich in letzter Zeit neu für mich entdeckt habe.” (oder so was)
den Ausdruck “Nerd am Herd” vielleicht noch irgendwo einbauen, aber ohne darauf hinzuweisen, dass dies der ursprüngliche Name war. Einfach als flotter Spruch.
“Eine Umschulung zum Koch schien mir zu drastisch,…” - hier würde ich vielleicht auch erwähnen, dass Du Deinen aktuellen Beruf sowieso sehr magst und nicht darauf verzichten würdest.
Zwischen den Abschnitt “Hello World” und “Softwareentwickler haben doch keine Hobbys?!” oder am Anfang dieses zweiten Kapitels würde ich zuerst mit einem halben Satz Deinen Beruf erwähnen. Sonst kommt der Sprung zu plötzlich: Wer Dich nicht kennt, fragt sich, was es auf einmal mit dem Witz über die Softwareentwickler auf sich hat, wo der Bezug liegt.
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
