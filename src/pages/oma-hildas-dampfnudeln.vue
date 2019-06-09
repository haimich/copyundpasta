<template>

  <el-row>
    My title: {{ article.title }}

    <Recipe :recipe="recipe" />
  </el-row>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import Recipe from "@/components/recipe/Recipe.vue";

  import articleObj from "@/articles/oma-hildas-dampfnudeln";
  import recipeObj from "@/recipes/oma-hildas-dampfnudeln";

  @Component({
    components: {
      Recipe
    },
    // @ts-ignore
    async asyncData({ $axios }) {
      // const response = await $axios.post(`/api/recipes/getRecipe`, {
      //   id: 1,
      // });

      // return { recipe: response.data };
    }
  })
  export default class OmaHildasDampfnudeln extends Vue {

    private recipe = recipeObj;

    get article() {
      return articleObj;
    }
      
    head: {
      title: "Oma Hildas Dampfnudeln"
    }

  }

</script>
