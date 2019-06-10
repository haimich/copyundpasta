<template>

  <el-row>
    My title: {{ article.title }}

    <RecipeComponent :recipe="recipe" />
  </el-row>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  import article from "@/content/articles/oma-hildas-dampfnudeln";
  import recipe from "@/content/recipes/oma-hildas-dampfnudeln";

  @Component({
    head: {
      title: article.title,
    }
  })
  export default class OmaHildasDampfnudeln extends Vue {

    get recipe() {
      return recipe;
    }

    get article() {
      return article;
    }

  }

</script>
