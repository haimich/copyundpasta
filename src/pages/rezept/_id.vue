<template>

  <div>
    <RecipeComponent
      :recipe="recipe"
      :ratings="ratings"
      :isPrint="isPrint"
    />
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import RecipeService from "@/services/RecipeService";
  import { setTimeout } from "timers";
  import { Recipe } from "@/interfaces/Recipe";
  import { RatingResponse } from "../../interfaces/Rating";

  @Component({
    layout: "print",
    // @ts-ignore
    async asyncData({ $axios, params, error }) {
      let results = await Promise.all([
        RecipeService.getRecipe($axios, params.id),
        RecipeService.getRating($axios, params.id),
      ]);
      
      return {
        recipe: results[0].data,
        ratings: results[1].data,
      };
    },
    head: {
      title: "Rezeptansicht",
    }
  })
  export default class RecipePage extends Vue {

    private recipe: Recipe;

    private ratings: RatingResponse;

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
