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
            Wenn es um Rezepte für Karottenkuchen - englisch Carrot Cake - geht, wird der <strong>Starbucks Carrot Cake</strong> von vielen als absolute Referenz angesehen. Vor einiger Zeit bin ich auf ein tolles Rezept von <ArticleLinkComponent href="https://schlaraffenwelt.de/der-beste-carrotcake-der-welt-besser-als-bei-starbucks/" text="Schlaraffenwelt" /> gestoßen, das für sich sogar beansprucht, besser als das Starbucks-Original zu sein 😀
          </p>

          <p>
            Seit dem habe ich das Rezept viele Male ausprobiert und dabei immer wieder Verbesserungen vorgenommen. Starbucks hin oder her, der Teig ist einfach super saftig und die verschiedenen Komponenten ergänzen sich wunderbar. Letzte Woche habe ich den Carrot Cake zusammen mit der <ArticleLinkComponent href="/moehren-quiche-mit-bergkaese" text="Möhren-Quiche" /> für meine Kollegen gebacken und bekam sehr gutes Feedback, probiert es also unbedingt mal aus!
          </p>

          <h2>Warum ist der Carrot Cake so saftig?</h2>

          <p>
            Die Karotten bringen natürlich für sich schon sehr viel Feuchtigkeit mit in den Teig. Daneben sorgt aber auch das Pflanzenöl dafür, dass der Teig länger feucht bleibt. In klassischen Rezepten mit Butter wird diese beim Abkühlen des Kuchens wieder fest wird, Öl bleibt aber auch bei Raumtemperatur flüssig. <br/>Der Nachteil von Öl in Kuchenrezepten ist, dass man es nicht wie Butter aufschlagen kann, wodurch der Kuchenteig weniger luftig wird. Außerdem fehlt solchen Kuchen der typische Buttergeschmack, was aber in diesem Rezept durch andere Gewürze und Aromen mehr als ausgeglichen wird.
          </p>

          <h2>Muss ich die Nüsse anrösten?</h2>

          <p>
            In meinem Rezept werden die Walnüsse für den Teig und auch die Pistazien für das Topping angeröstet. Dieser Schritt ist nicht zwingend notwendig, aber die Röstaromen machen den Kuchen einfach nochmal ein Stück besser.
          </p>

          <h2>Dekoration</h2>

          <p>
            Bei der Dekoration des Kuchens könnt ihr eurer Kreativität freien Lauf lassen. Was z. B. gut aussieht: platziert auf jedes Kuchenstück an den Rand eine halbe Walnuss oder eine Marzipanmöhre. <br />Geschmacklich sehr gut passen auch Pistazien in Verbindung mit Zimt, den ihr in die Mitte des Kuchens streut:
          </p>

          <ArticleImageComponent
            src="/images/articles/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting/carrot-cake-mit-pistazien-und-zimt.jpg"
            alt="Carrot Cake mit Pistazien und Zimt"
          />

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
          <li>statt Walnüssen könnt ihr auch Pecannüsse für den Teig verwenden</li>
          <li>eine bekannte Version des <ArticleLinkComponent href="https://kunterbuntweissblau.de/2017/03/27/carrot-cake-nach-jamie-oliver/" text="Carrot Cakes von Jamie Oliver" /> verwendet Limetten</li>
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

  import article from "@/content/articles/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";
  import recipe from "@/content/recipes/saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";

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
