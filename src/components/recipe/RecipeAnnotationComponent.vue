<template>
  <script v-html="jsonld" type="application/ld+json"></script>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeServings, RecipeIngredient, RecipeIngredientGroup, RecipeStep, RecipeStepGroup } from "@/interfaces/Recipe";
  import { RecipeServingsUnit } from "@/interfaces/RecipeIngredients";
  import { RatingResponse } from "@/interfaces/Rating";
  import RecipeUtil from "@/utils/RecipeUtil";

  @Component
  export default class RecipeAnnotationComponent extends Vue {

    @Prop()
    recipe: Recipe;

    @Prop()
    ratings: RatingResponse;

    /**
     * @see https://developers.google.com/search/docs/data-types/recipe
     */
    get jsonld(): string {
      if (this.recipe == null) {
        return "{}";
      }

      let ingredients = [];

      for (let entry of this.recipe.ingredients) {
        if (entry.isGroup) {
          entry = entry as RecipeIngredientGroup;

          for (let groupIngredient of entry.ingredients) {
            ingredients.push(RecipeUtil.formatIngredient(groupIngredient));
          }
        } else {
          entry = entry as RecipeIngredient;

          ingredients.push(RecipeUtil.formatIngredient(entry));
        }
      }
      
      let steps = [];

      for (let entry of this.recipe.steps) {
        if (entry.isGroup) {
          entry = entry as RecipeStepGroup;

          for (let groupStep of entry.steps) {
            steps.push({
              "@type": "HowToStep",
              "text": groupStep.content,
            });
          }
        } else {
          entry = entry as RecipeStep;

          steps.push({
            "@type": "HowToStep",
            "text": entry.content,
          });
        }
      }

      let servings = this.recipe.servings.amount + " ";
      
      if (this.recipe.servings.unit === RecipeServingsUnit.quantity) {
        servings += "Stück";
      }
      
      let jsonld: any = {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": this.recipe.title,
        "image": [
          "https://www.copyundpasta.de/" + this.recipe.previewImageUrl,
        ],
        "author": {
          "@type": "Person",
          "name": "Michael Müller"
        },
        "datePublished": this.recipe.createdAt,
        // "description": this.recipe.description, only articles have description
        "keywords": "",
        "recipeYield": servings,
        "recipeCategory": this.recipe.categoryId,
        "recipeIngredient": ingredients,
        "recipeInstructions": steps,
      };

      if (this.ratings != null) {
        jsonld.aggregateRating = {
          "@type": "AggregateRating",
          "ratingValue": "" + this.ratings.average,
          "ratingCount": "" + this.ratings.numRatings,
        };
      }

      return JSON.stringify(jsonld);
    }

  }

</script>