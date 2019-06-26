<template>

  <div>
    <RecipeComponent
      :recipe="recipe"
      :isPrint="isPrint"
    />
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import RecipeService from "@/services/RecipeService";
  import { setTimeout } from "timers";

  @Component({
    layout: "print",
    // @ts-ignore
    async asyncData({ $axios, params, error }) {
      const response = await RecipeService.getRecipe($axios, params.id);

      return {
        recipe: response.data,
      }
    },
    head: {
      title: "Rezeptansicht",
    }
  })
  export default class RecipePage extends Vue {

    get isPrint() {
      return this.$route.query.print === "true";
    }

    mounted() {
      if (this.isPrint) {
        // make sure the page is loaded completely
        setTimeout(() => {
          window.print();
        }, 400);
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
