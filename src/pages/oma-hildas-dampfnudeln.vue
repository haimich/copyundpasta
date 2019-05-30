<template lang="md">
  <el-row>
    <recipe-component :recipeData="recipe" />
  </el-row>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import RecipeComponent from "@/components/RecipeComponent.vue";

  @Component({
    components: {
      RecipeComponent
    }
  })
  export default class YourComponent extends Vue {
    
    private recipe = null;
    
    async asyncData({ $axios }) {
      const response = await $axios.post(`/api/recipes/getRecipe`, {
        id: 1,
      });
      return { recipe: response.data };
    }
    
    head: {
      title: "Oma Hildas Dampfnudeln"
    }
  }

</script>
