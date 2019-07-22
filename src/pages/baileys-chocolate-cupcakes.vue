<template>

  <div>
    <article>
      <el-row>
        <el-col :span="16" :offset="4">

          <MainHeadingComponent
            :text="article.title"
            image="https://livforcake.com/wp-content/uploads/2015/02/IMG_5007-Version-21.jpg"
            :commentCount="commentCount"
          />
          
          <ArticleJumpToRecipeComponent />

          <p class="entry-paragraph">
            I never really need an excuse to bake something, but it’s always nice to have a reason. A recent dinner invite to my good friend Dave’s was the perfect opportunity for me to try out something new. I stuck with cupcakes because they are fairly easy, and since I had my first cake order due the same day, I didn’t want to take on too big a project. Plus, let’s face it, who doesn’t like a good cupcake??
          </p>

          <ArticleImageComponent
            src="https://livforcake.com/wp-content/uploads/2015/02/IMG_49822.jpg"
            alt="Cupcake"
          />

          <p>
            The cupcake recipe is straight up from my 

            <ArticleLinkComponent href="https://www.marthastewart.com/355559/devils-food-cupcakes" text="Martha Stewart’s Cupcakes book" />,

            but the frosting is my own creation.
          </p>

          <p>
            Martha’s recipe makes 32 cupcakes. I didn’t need quite that many (read: if I make that many I’ll eat them all), so for the sake of our waistlines, I halved it. Her recipe says to fill the liners 3/4 full, which is a lot, but I thought maybe they wouldn’t bake up so high. The cupcakes came out a little larger than I expected – I should have gone with my gut! They were quite domed when they came out of the oven, and I actually used a tea towel to press them down a bit so they wouldn’t be so puffy. Next time I’ll only fill the liners 2/3 full as usual, and make a few more cupcakes instead.
          </p>

          <h2>Wieso schmilzt der Käse nicht?</h2>

          <p>
            Das Gulasch klassisch kann nun mit der Beilage auf den Tisch. Das Fleisch dürfte butterzart sein und die Soße wird, insbesondere, wenn ihr getrocknete Waldpilze mit dabei habt, ihresgleichen suchen. Experimentiert ruhig ein wenig rum. Man kann dieses Rezept auch gut um weitere Gemüsesorten oder auch Champions erweitern. Erlaubt ist was schmeckt! Sollten Reste bleiben, könnt ihr diese gut einfrieren und bei Bedarf wieder warm machen.
          </p>

          <ArticleImageComponent
            src="https://livforcake.com/wp-content/uploads/2015/02/IMG_50131.jpg"
            alt="Cupcake"
          />

          <p>
            The buttercream, on the other hand, didn’t turn out quite how I expected. I was going for a Baileys flavour, but that didn’t come through as much as I wanted even though I used 2 tablespoons of it in the buttercream! The chocolate overpowered it (maybe because I used Dutch processed cocoa powder) and you couldn’t really taste the Baileys.
          </p>

          <br>

          <p>
            I couldn’t decide if I wanted to drizzle melted chocolate over top of these guys, so I only did it to half of them. I prefer the plain ones myself, but thought the drizzled ones looked a bit fancier. Interestingly enough, the first ones to be snatched up post-dinner were the plain ones. I thought for sure everyone would go for the chocolate drizzle! Why all the drizzle hate? I’m going to stick to plain and simple from now on.
          </p>
        </el-col>
      </el-row>
    </article>

    <el-row id="recipe" style="margin-top: 20px;">
      <el-col :span="16" :offset="4">
        <RecipeComponent :recipe="recipe" style="margin-top: 40px;" />
      </el-col>
    </el-row>

    <el-row id="comments" style="margin-top: 40px;">
      <el-col :span="16" :offset="4">
        <CommentComponent :comments="comments" :slug="article.slug" @commentAdded="refreshComments" />
      </el-col>
    </el-row>

  </div>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import BaseArticle from "@/components/BaseArticle.vue";

  import article from "@/content/articles/baileys-chocolate-cupcakes";
  import recipe from "@/content/recipes/baileys-chocolate-cupcakes";

  @Component({
    head: {
      title: article.title,
    },
  })
  export default class extends BaseArticle {

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
