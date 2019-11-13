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
            Ich müsste lügen, wenn ich sagen würde, dass Quiche schon immer zu meinen Lieblingsrezepten gezählt hat. Selbst als mir meine Mutter vor einigen Jahren eine original elsässiche Backform geschenkt hat, wollte das Quichefieber nicht so recht bei mir ausbrechen. Die Wende kam erst, als ich im letzten Jahr einen Cakepopkurs besucht habe, bei dem neben einem Glas Sekt zur Stärkung gleich zwei leckere Quichesorten serviert wurden.
          </p>

          <p>
            Zu Hause kramte ich dann die alte Form aus dem Küchenschrank und wenig später stand meine erste Quiche mit Frühlingszwiebeln und Speck dampfend auf dem Küchentisch. Erst jetzt wurde mir richtig klar, wie vielseitig dieses französische Gericht ist.
          </p>

          <p>
            Der Teig besteht traditionell aus Mürbeteig, wobei auch eine Variante mit Blätterteig sehr lecker ist. Für die Füllung gibt es unzählige Möglichkeiten wie z. B. Spargel und Schinken, Lachs und Spinat oder Oliven und Feta. Hier zeigt sich auch das große Potenzial in Sachen Resteverwertung, da man für eine Quiche nicht unbedingt spezielle Zutaten einkaufen muss, sondern einfach verschiedene Reste verwenden kann. Für die Bindung wird die Füllung mit einer Mischung aus Sahne und Ei übergossen, wobei hier je nach Rezept auch andere Milchprodukte wie Creme Fraîche verwendet werden.
          </p>

          <p>
            Mit dem Rezept für die Möhren-Quiche habe ich euch eine Variante mit einer leckeren Gemüsefüllung zusammengestellt, die ihr vegetarisch genießen oder nach Belieben noch mit Speck anreichern könnt. 
          </p>

          <h2>Welches Zubehör brauche ich?</h2>

          <p>
            Am Authentischsten ist eine Quicheform aus Keramik oder Metall, man kann aber auch genauso gut eine normale Back- oder Auflaufform verwenden. Daneben braucht ihr ein Nudelholz und getrocknete Hülsenfrüchte wie z. B. Kichererbsen zum Blindbacken (siehe unten).
          </p>

          <h2>Blindbacken</h2>

          <p>
            Wenn ihr bei YouTube <ArticleQuoteComponent text="Blindbacken" /> eingebt, werden zahlreiche Suchergebnissen angezeigt, bei denen der Begriff allzu wörtlich genommen wird und diverse YouTube-Stars mit verbundenen Augen einen Kuchen backen. Das könnt ihr zu Hause natürlich auch gerne mal probieren, aber an dieser Stelle ist mit dem Begriff gemeint, dass der Mürbeteig vor dem eigentlichen Backprozess vorgebacken ist.
          </p>

          <p>
            Dazu wird Backpapier auf den Teig gelegt, welches mit getrockneten Hülsenfrüchten oder speziellen Blindbackkugeln aus Kermaik beschwert wird. Nach ca. 20 Minuten im Ofen ist der Teig soweit gefestigt, dass er beim späteren Backprozess nicht durchweicht.
          </p>

          <p>
            Aus meiner Sicht kann man diesen Schritt auch mal überspringen, wenn man wenig Zeit hat. Hierfür könnt ihr die Temperatur einfach auf 200°C Ober-/Unterhitze erhöhen (Gesamtbackzeit: 40 min.), dann wird der Boden von außen trotzdem knusprig und weicht nur wenig durch.
          </p>

          <h2>Muss ich den Teig selberbacken?</h2>

          <p>

          </p>

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
      `/images/articles/${article.slug}/schritte/9.jpeg`,
      `/images/articles/${article.slug}/schritte/10.jpeg`,
      `/images/articles/${article.slug}/schritte/11.jpeg`,
      `/images/articles/${article.slug}/schritte/12.jpeg`,
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
