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
            Ich müsste lügen, wenn ich sagen würde, dass Quiches schon immer zu meinen Lieblingsrezepten gezählt haben. Selbst als mir meine Mutter vor einigen Jahren eine original elsässiche Keramikform geschenkt hat, wollte das Quichefieber nicht so recht bei mir ausbrechen. Die Wende kam erst, als ich im letzten Jahr einen Cakepopkurs besucht habe, bei dem nach dem vielen Kugelformen neben einem Glas Sekt zur Stärkung zwei verschiedene Quichesorten serviert wurden.
          </p>

          <p>
            Zu Hause kramte ich dann die alte Form aus dem Küchenschrank und wenig später kam meine erste Quiche mit Frühlingszwiebeln und Speck dampfend aus dem Ofen. Erst da wurde mir richtig klar, wie vielseitig dieses französische Gericht ist.
          </p>

          <p>
            Der Teig besteht traditionell aus Mürbeteig, wobei auch eine Variante mit Blätterteig sehr lecker ist. Für die Füllung gibt es unzählige Möglichkeiten wie z. B. Spargel und Schinken, Lachs und Spinat oder Oliven und Feta. Hier zeigt sich auch das große Potenzial in Sachen Resteverwertung, da man für eine Quiche nicht unbedingt spezielle Zutaten einkaufen muss, sondern einfach verschiedene Reste verwenden kann. Für die Bindung wird die Füllung mit einer Mischung aus Sahne und Ei übergossen, wobei hier je nach Rezept auch andere Milchprodukte wie Creme Fraîche verwendet werden können.
          </p>

          <p>
            Mit dem Rezept für die Möhren-Quiche habe ich euch eine Variante mit einer leckeren Gemüsefüllung zusammengestellt, die ihr vegetarisch genießen oder nach Belieben noch mit Speck anreichern könnt. 
          </p>

          <p>
            Die Quiche eignet sich übrigens wunderbar auch als Partyfood oder um den Kollegen auf der Arbeit eine Freude zu machen. Letzteres werde ich morgen früh übrigens selbst machen, zusammen mit einem leckeren Kuchen, den ich heute nächste Woche hier vorstellen werde 🤓
          </p>

          <h2>Welches Zubehör brauche ich?</h2>

          <p>
            Am Authentischsten ist natürlich eine Quicheform aus Keramik oder Metall, man kann aber auch genauso gut eine normale Back- oder Auflaufform verwenden. Daneben braucht ihr ein Nudelholz und getrocknete Hülsenfrüchte wie z. B. Kichererbsen zum Blindbacken (siehe unten).
          </p>

          <h2>Blindbacken</h2>

          <p>
            Wenn ihr bei YouTube <ArticleQuoteComponent text="Blindbacken" /> eingebt, werden zahlreiche Suchergebnissen angezeigt, bei denen der Begriff allzu wörtlich genommen wird und diverse YouTube-Stars mit verbundenen Augen einen Kuchen backen. Das könnt ihr zu Hause natürlich auch gerne mal ausprobieren, aber an dieser Stelle ist mit dem Begriff gemeint, dass der Mürbeteig vor dem eigentlichen Backprozess vorgebacken ist.
          </p>

          <p>
            Dazu wird Backpapier auf den Teig gelegt, welches mit getrockneten Hülsenfrüchten oder speziellen Blindbackkugeln aus Keramik beschwert wird. Nach ca. 20 Minuten im Ofen ist der Teig soweit gefestigt, dass er beim späteren Backprozess nicht durchweicht.
          </p>

          <p>
            Aus meiner Sicht kann man diesen Schritt auch mal überspringen, wenn man wenig Zeit hat. Hierfür könnt ihr die Temperatur einfach auf 200°C Ober-/Unterhitze erhöhen (Gesamtbackzeit: 40 min.), dann wird der Boden von außen trotzdem knusprig und weicht nur wenig durch.
          </p>

          <h2>Kann ich auch Fertigteig nehmen?</h2>

          <p>
            Wenn ihr mal ganz wenig Zeit habt, könnt ihr auch auf Fertigteig aus dem Supermarkt zurückgreifen. Das Produkt nennt sich hier meist <ArticleQuoteComponent text="Quiche- und Tarteteig" />. Alternativ könnt ihr auch fertigen Blätterteig (z. B. tiefgekühlt) verwenden, wobei der Teig am Boden wegen der schweren Füllung nicht so stark aufgehen kann.
          </p>


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
          <li>wer möchte, kann in die Sahnemischung noch 2 Zehen feingeriebenen Knoblauch geben</li>
          <li>Zum Anrichten könnt ihr noch Petersilie oder Schnittlauch verwenden</li>
          <li>statt Weizenmehl könnt ihr auch mal Dinkelmehl verwenden</li>
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
