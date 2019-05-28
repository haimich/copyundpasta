<template lang="md">
    <recipe-component :recipeData="recipe" />
</template>

<script>
import RecipeComponent from "~/components/RecipeComponent.vue";

export default {
  components: {
    RecipeComponent,
  },
  data() {
    return { recipe: null }
  },
  async asyncData({ params, $axios }) {
    const response = await $axios.post(`/api/recipes/getRecipe`, {
      id: 1,
    });
    return { recipe: response.data };
  },
  head: {
    title: "Oma Hildas Dampfnudeln"
  }
}

</script>
