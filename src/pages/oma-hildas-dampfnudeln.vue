<template>

  <el-row>
    My title: {{ article.title }}

    <RecipeComponent :recipe="recipe" />
  </el-row>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  import articleObj from "@/articles/oma-hildas-dampfnudeln";
  import recipe from "@/recipes/oma-hildas-dampfnudeln";

  @Component({
    // @ts-ignore
    async asyncData({ $axios }) {
      // const response = await $axios.post(`/api/recipes/getRecipe`, {
      //   id: 1,
      // });

      // return { recipe: response.data };
    }
  })
  export default class OmaHildasDampfnudeln extends Vue {

    get recipe() {
      return recipe;
    }

    get article() {
      return articleObj;
    }
      
    head: {
      title: "Oma Hildas Dampfnudeln"
    }

  }

</script>
