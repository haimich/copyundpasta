<template>

  <el-row>
    <Recipe :recipe="recipe" />
  </el-row>
  
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import Recipe from "@/components/recipe/Recipe.vue";

  @Component({
    components: {
      Recipe
    },
    // @ts-ignore
    async asyncData({ $axios }) {
      const response = await $axios.post(`/api/recipes/getRecipe`, {
        id: 1,
      });
      return { recipe: response.data };
    }
  })
  export default class OmaHildasDampfnudeln extends Vue {
    
    private recipe = null;
  
    head: {
      title: "Oma Hildas Dampfnudeln"
    }

  }

</script>
