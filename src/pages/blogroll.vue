<template>

  <div>
    <el-row>
      <el-col :span="14" :offset="5">
        <MainHeadingComponent
          text="Blogroll"
          subtitle="Hier findet ihr meine liebsten Foodblogs :-)"
        />
        
        <ul class="link-list">
          <li
            v-for="(blog, index) in blogroll"
            :key="index"
            title="Link öffnen"
          >
            <el-row :gutter="20">
              <el-col :span="7">
                <el-image
                  :src="blog.image"
                  :title="blog.name"
                  class="blog-image"
                  @click="openLink(blog.url)"
                ></el-image>
              </el-col>
              
              <el-col :span="17">
                <a
                  :href="blog.url"
                  style="font-size: 19px;"
                  rel="noopener"
                  target="_blank"
                >
                  {{ blog.name }}
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
        name: "Küchenchaotin",
        description: `Ich bin der vegetarischen Küche durchaus offen gegenüber und das verdanke ich nicht zuletzt der &bdquo;Küchenchaotin&ldquo;.
<br/>Egal welches Rezept ich von Mia ausprobiere, es erntet stets großes Lob und wird in meine Rezeptsammlung aufgenommen.`,
        image: "/images/blogroll/kuechenchaotin.jpg",
        url: "https://kuechenchaotin.de/",
      },
      {
        name: "Eat this",
        description: `Wer auf vegane Küche steht, wird sicher im Blog &bdquo;Eat this&ldquo; fündig. Beim Anblick der perfekt abgelichteten Rezeptfotos läuft einem das Wasser im Mund zusammen.
<br/>Hier kommen auch Nichtveganer im wahrsten Sinne des Wortes auf ihren Geschmack!`,
        image: "/images/blogroll/eatthis.jpg",
        url: "https://www.eat-this.org/",
      },
      {
        name: "Sallys Welt",
        description: "Über Sally muss man glaube ich nicht mehr viel sagen, da ihre Produkte es mittlerweile sogar in viele Supermarktregale geschafft haben. Sie ist die mit Abstand (und zurecht) Deutschlands erfolgreichste Foodbloggerin.",
        image: "/images/blogroll/sallysblog.jpg",
        url: "https://sallys-blog.de/",
      },
      {
        name: "Plötzblog",
        description: "Selbst gutes Brot backen",
        image: "/images/blogroll/ploetzblog.jpg",
        url: "https://www.ploetzblog.de/",
      },
      {
        name: "Arthurs Tochter Kocht",
        description: "",
        image: "/images/blogroll/arthurstochter.jpg",
        url: "https://www.arthurstochterkochtblog.com/",
      },
      {
        name: "Die Frau am Grill",
        description: "Das BBQ & FOOD Magazin",
        image: "/images/blogroll/frauamgrill.jpg",
        url: "https://die-frau-am-grill.de/",
      },
      {
        name: "Sizzle Brothers",
        description: "BBQ- und Grillrezepte - Grillblog der Sizzle Brothers",
        image: "/images/blogroll/sizzlers.jpg",
        url: "https://sizzlebrothers.de/",
      },
      {
        name: "Französisch kochen",
        description: "Rezepte aus Frankreich - Online Shop - Bücher - Kurse - by Aurélie Bastian",
        image: "/images/blogroll/franzoesischkochen.jpg",
        url: "https://www.franzoesischkochen.de/",
      },
      {
        name: "Petit Appetit",
        description: "Petit Appetit",
        image: "/images/blogroll/petitappetit.jpg",
        url: "https://www.petitappetit.de",
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
      transition: all .2s;

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
