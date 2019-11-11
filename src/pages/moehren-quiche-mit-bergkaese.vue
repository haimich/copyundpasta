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
            Ich müsste lügen, wenn ich behaupten würde, dass Quiche schon immer zu meinen Lieblingsrezepten gezählt hat. Selbst als mir meine Mutter vor einigen Jahren eine original elsässiche Backform geschenkt hat, wollte das Quichefieber nicht so recht bei mir ausbrechen. Die Wende kam erst, als ich vor einiger Zeit einen Cakepopkurs besucht habe, bei dem nebst einem Glas Sekt zwei verschiedene Quiches serviert wurden.
          </p>

          <p>
            Ich kramte die alte Form aus dem Küchenschrank

            Erst jetzt wurde mir richtig klar, wie vielseitig diese französische Speise ist. Der Teig besteht in der Regel aus Mürbeteig, wobei auch eine Variante mit Blätterteig sehr lecker sein kann. Bei der Füllung kann man kreativ beliebige Gemüsesorten kombinieren und nach Belieben z. B. mit Speck kombinieren. Hier bietet sich auch ein großes Potenzial in Sachen Resteverwertung auf, da man für eine Quiche nicht unbedingt spezielle Zutaten einkaufen muss, sondern einfach verschiedene Reste aufbrauchen kann. Für die Bindung wird die Gemüsemischung mit einer Mischung aus Sahne und Ei übergossen, wobei hier auch andere Milchprodukte wie Creme Fraîche in Frage kommen.
          </p>

          <h2>Welches Zubehör brauche ich?</h2>

          <ul>
            <li>am Authentischsten ist eine Quicheform, man kann aber auch eine Backform oder Auflaufform nehmen</li>
            <li>Nudelholz</li>
            <li>Hülsenfrüchte zum Blindbacken (optional)</li>
          </ul>

          <h2>Blindbacken</h2>

          <ul>
            <li>In einigen Rezepten wird der Teigboden, ohne Füllung oder Belag, Blind vorgebacken. Er wird mit Backpapier ausgekleidet und mit getrockneten Hülsenfrüchten belegt. Dies verhindert, dass der Teig durchweicht. Bei meinem Rezept ist das Blindbacken nicht nötig. Denn ausschlaggebend für ein knuspriges äußeres, ist die Höhe der Backtemperatur von 200° C. (https://lissis-passion.de/herzhafte-moehren-quiche)</li>
            <li>man kan auch weiße Bohnen nehmen</li>
            <li>Blind vorbacken: Backpapier auf den Boden legen und auf das Backpapier Hülsenfrüchte (trockenen Linsen, Erbsen oder auch Reis) verteilen – so wird der Boden beschwert und kann nicht hochgehen</li>
            <li>Kugeln aus Keramik</li>
          </ul>

          <h2>Was kann schon schiefgehen?</h2>

          <ul>
            <li>wenn sich der Teig beim Backen in der Mitte hebt, hast du wahrscheinlich vergessen, ihn mit einer Gabel einzustechen</li>
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
          <li>wenn man keine Zeit zum Backen hat, kann man auch einen fertigen Quicheteig verwenden</li>
          <li>statt Mürbeteig eignet sich auch ein Blätterteig (z. B. tiefgekühlt)</li>
          <li>bei der Füllung sind der Fantasie keine Grenzen gesetzt</li>
          <li>gute Kombinationen sind: Spargel</li>
          <li>wer möchte, kann in die Sahnemischung noch 2 Zehen feingeriebenen Knoblauch geben</li>
          <li>Dinkelmehl verwenden</li>
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

  import article from "@/content/articles/moehren-quiche-mit-bergkaese";
  import recipe from "@/content/recipes/moehren-quiche-mit-bergkaese";

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
