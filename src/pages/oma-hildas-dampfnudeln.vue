<template lang="md">
    <recipe :recipeData="recipe" />
</template>

<script>
import Recipe from "~/components/Recipe.vue";

export default {
  components: {
    Recipe,
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
