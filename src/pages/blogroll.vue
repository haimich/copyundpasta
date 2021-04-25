<template>

  <div>
    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <MainHeadingComponent
          text="Blogroll"
          subtitle="Hier findet ihr meine Lieblings-Foodblogs 😀"
        />
        
        <ul class="link-list">
          <li
            v-for="(blog, index) in blogroll"
            :key="index"
          >
            <el-row :gutter="20">
              <el-col :span="7" class="hidden-xs-only">
                <el-image
                  :src="blog.image"
                  :title="blog.name"
                  class="blog-image"
                  @click="openLink(blog.url)"
                ></el-image>
              </el-col>
              
              <el-col :xs="24" :span="17">
                <a
                  :href="blog.url"
                  style="font-size: 19px; display: flex; align-items: baseline;"
                  rel="noopener"
                  target="_blank"
                  title="Link öffnen"
                >
                  {{ blog.name }} <FontAwesome :icon="['fas', 'external-link-alt']" style="font-size: 14px; margin-left: 5px;" />
                </a>

                <div class="blog-description" v-html="blog.description"></div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class extends Vue {

    private xl = {
      span: 16,
      offset: 4,
    };

    private lg = {
      span: 16,
      offset: 4,
    };

    private md = {
      span: 22,
      offset: 1,
    };

    private sm = {
      span: 22,
      offset: 1,
    };

    private xs = {
      span: 22,
      offset: 1,
    };

    private blogroll = [
      {
        name: "Schöner Tag noch!",
        description: `Bevor ich in die Region Karlsruhe gezogen bin, hätte ich es wohl selbst nicht für möglich gehalten, dass man hierzulande in der Bäckerei wirklich mit den Worten &bdquo;Schöner Tag noch!&ldquo; verabschiedet wird. 
<br/>Korrekte Grammatik hin oder her - Julianes Blog empfehle ich sehr gerne weiter, denn ich habe schon viele ihrer Rezepte erfolgreich nachgekocht!`,
        image: "/images/blogroll/schoenertagnoch.jpg",
        url: "https://schoenertagnoch.de/",
      },
      {
        name: "Schlaraffenwelt",
        description: `Dieser Blog stellt sowohl inhaltlich als auch designtechnisch ein großes Vorbild für mich dar. Die Gerichte sind äußerst ansprechend fotografiert und die Rezepte der &bdquo;Schlaraffenwelt&ldquo; beleuchten ein Thema oft sehr detailreich, wie zum Beispiel der Beitrag <a href="https://schlaraffenwelt.de/perfektes-wiener-schnitzel-rezept/">Das Perfekte Schnitzel</a> zeigt.`,
        image: "/images/blogroll/schlaraffenwelt.jpg",
        url: "https://schlaraffenwelt.de/",
      },
      {
        name: "Delispot",
        description: `Das selbsternannte &bdquo;Kompendium der entspannten Küche&ldquo; wird seinem Namen mehr als gerecht: Ralf Schmid hat hier ganze Arbeit geleistet und eine unüberschaubare Menge an sehr lesenswerten Wissensbeiträgen und Rezepten zum Thema Kochen verfasst. <br />Die Seite könnte man wie ich finde so wie sie ist als Buch drucken, nur dass sie dann sehr viel Platz im Regal wegnehmen würde und man auf die tolle Suchfunktion verzichten müsste :-)`,
        image: "/images/blogroll/delispot.jpg",
        url: "https://www.delispot.net/",
      },
      {
        name: "Küchenchaotin",
        description: `Ich bin der vegetarischen Küche durchaus offen gegenüber und das verdanke ich nicht zuletzt der &bdquo;Küchenchaotin&ldquo;.
<br/>Egal welches Rezept ich von Mia ausprobiere, es erntet stets großes Lob und wird in meine Rezeptsammlung aufgenommen.`,
        image: "/images/blogroll/kuechenchaotin.jpg",
        url: "https://kuechenchaotin.de/",
      },
      {
        name: "Eat this",
        description: `Wer auf vegane Küche steht, wird im Blog &bdquo;Eat this&ldquo; sicherlich fündig. Beim Anblick der perfekt abgelichteten Rezeptfotos läuft einem förmlich das Wasser im Mund zusammen.
<br/>Hier kommen auch Nichtveganer im wahrsten Sinne des Wortes auf ihren Geschmack!`,
        image: "/images/blogroll/eatthis.jpg",
        url: "https://www.eat-this.org/",
      },
      {
        name: "Sallys Welt",
        description: `Sally muss ich glaube ich nicht mehr vorstellen, da ihre Produkte mittlerweile sogar im Supermarktregal zu finden sind. Sie betreibt Deutschlands mit Abstand größten Foodchannel auf YouTube und ist gerade dabei, auch das Fernsehen für sich zu erobern.
<br/>Ich liebe Sally's Backbücher und kann auch ihren <a href="https://sallys-shop.de/" rel="noopener">Onlineshop</a> sehr empfehlen.`,
        image: "/images/blogroll/sallysblog.jpg",
        url: "https://sallys-blog.de/",
      },
      {
        name: "Plötzblog",
        description: `Wer zu Hause Brot backen will, kommt heutzutage an Lutz Geissler nicht mehr vorbei. Seine Bücher kann ich uneingeschränkt weiterempfehlen und ich würde nur zu gerne mal an einem seiner Brotbackkurse teilnehmen.
<br/>Seine Geschichte ist erstaunlich, denn er hat als gelernter Geologe eher zufällig die Liebe fürs Brotbacken entdeckt. Nachdem er viele Bäckereien besucht und sich dort weitergebildet hat, berät er sie mittlerweile selbst und bietet sogar im fernen Japan Kurse an.`,
        image: "/images/blogroll/ploetzblog.jpg",
        url: "https://www.ploetzblog.de/",
      },
      {
        name: "Arthurs Tochter Kocht",
        description: `Ich muss gestehen, dass ich diesen Blog erst recht spät entdeckt habe, obwohl &bdquo;Arthurs Tochter&ldquo; schon seit 2004 die Blogosphäre mit Ihren Rezepten und persönlich geschriebenen Artikeln bereichert.
<br/>Wem es genauso geht, empfehle ich ihr Buch &bdquo;Arthurs Tochter Kocht - Mein B_Logbuch&ldquo;, das ich mit großer Freude gelesen habe. Hier erzählt sie sehr offen aus ihrem Leben und lässt unterhaltsame Episoden aus ihrer Erfahrung als Bloggerin Revue passieren.`,
        image: "/images/blogroll/arthurstochter.jpg",
        url: "https://www.arthurstochterkochtblog.com/",
      },
      {
        name: "Die Frau am Grill",
        description: `Der Name ist Programm, denn Anja präsentiert zusammen mit ihrer Redaktion jede Woche neue Rezepte rund um das Grillen. Besonders gut gefällt mir, dass in den Artikel nicht zur Rezepte präsentiert, sondern auch zahlreiche Tipps & Tricks vermittelt werden.`,
        image: "/images/blogroll/frauamgrill.jpg",
        url: "https://die-frau-am-grill.de/",
      },
      {
        name: "Sizzle Brothers",
        description: "Auf die &bdquo;Sizzle Brothers&ldquo; bin ich nicht etwa durch ihren erfolgreichen YouTube-Kanal, sondern durch ihren Podcast NICE.TO.MEAT.YOU aufmerksam geworden. Hier liefern sie einen Blick hinter die Kulissen und machen richtig Lust darauf, sich die neuesten Grillvideos anzuschauen.",
        image: "/images/blogroll/sizzlers.jpg",
        url: "https://sizzlebrothers.de/",
      },
      {
        name: "Französisch kochen",
        description: `Auf den Blog von Aurélie Bastian bin ich erst gestoßen, nachdem ich in ihrem Onlineshop einige Zutaten für Macarons bestellt habe. Ihr Konzept ist, dass sie in Frankreich übliche Lebensmittel auch in Deutschland verfügbar macht. Sehr gerne bestelle ich bei z. B. Kuvertüre und Mandelmehl.
<br/>Aber sie geht noch weiter: Neben ihrer eigenen Kochsendung im Fernsehen hat sie bereits mehrere Bücher geschrieben und gibt ihr Wissen über französisches Gebäck in ihrem eigenen Podcast weiter.`,
        image: "/images/blogroll/franzoesischkochen.jpg",
        url: "https://www.franzoesischkochen.de/",
      },
    ];

    openLink(url) {
      window.open(url, "_blank");
    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/base.scss";

  .link-list {
    list-style: none;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 40px;

    li {
      border-left: 10px solid $color-primary;
      padding: 12px 16px;
      color: #121212;
      background-color: #f5f5f5;
      margin-bottom: 20px;
      transition: all .15s;

      .blog-image {
        min-height: 155px;
        cursor: pointer;
      }

      &:hover {
        font-size: 19px;
        border-left: 13px solid $color-primary;
      }
    }
  }

  .blog-description {
    margin-top: 8px;
    font-size: 16px;
    color: #252525;
  }

</style>
