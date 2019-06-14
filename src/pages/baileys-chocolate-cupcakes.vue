<template>

  <el-row>
    <el-col :span="16" :offset="4">

      <MainHeadingComponent
        :text="article.title"
        image="https://livforcake.com/wp-content/uploads/2015/02/IMG_5007-Version-21.jpg"
      />

      <p>
        I never really need an excuse to bake something, but it’s always nice to have a reason. A recent dinner invite to my good friend Dave’s was the perfect opportunity for me to try out something new. I stuck with cupcakes because they are fairly easy, and since I had my first cake order due the same day, I didn’t want to take on too big a project. Plus, let’s face it, who doesn’t like a good cupcake??
      </p>

      <ArticleImageComponent
        src="https://livforcake.com/wp-content/uploads/2015/02/IMG_49822.jpg"
        alt="Cupcake"
      />

      <p>
        The cupcake recipe is straight up from my <ArticleLinkComponent href="https://www.marthastewart.com/355559/devils-food-cupcakes" text="Martha Stewart’s Cupcakes book" />, but the frosting is my own creation.
      </p>

      <RecipeComponent :recipe="recipe" />

    </el-col>
  </el-row>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  import article from "@/content/articles/baileys-chocolate-cupcakes";
  import recipe from "@/content/recipes/baileys-chocolate-cupcakes";

  @Component({
    head: {
      title: article.title,
    }
  })
  export default class extends Vue {

    get recipe() {
      return recipe;
    }

    get article() {
      return article;
    }

  }

</script>
