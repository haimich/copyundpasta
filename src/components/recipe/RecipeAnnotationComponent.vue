<template>
  <script v-html="jsonld" type="application/ld+json"></script>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeServingsUnit } from "@/interfaces/Recipe";
  import { RatingResponse } from "@/interfaces/Rating";

  @Component
  export default class RecipeAnnotatinoComponent extends Vue {

    @Prop()
    recipe: Recipe;

    @Prop()
    recipeRating: RatingResponse;

    get jsonld(): string {
      if (this.recipe == null) {
        return "{}";
      }

      let ingredients = [];

      for (let ingredient of this.recipe.ingredients) {
        if (ingredient.isGroup) {
          for (let groupIngredient of ingredient.ingredients) {
            ingredients.push(groupIngredient.amount + " " + groupIngredient.ingredient.name);
          }
        } else {
          ingredients.push(ingredient.amount + " " + ingredient.ingredient.name);
        }
      }
      
      let steps = [];

      for (let step of this.recipe.steps) {
        if (step.isGroup) {
          for (let groupStep of step.steps) {
            steps.push({
              "@type": "HowToStep",
              "text": groupStep.content,
            });
          }
        } else {
          steps.push({
            "@type": "HowToStep",
            "text": step.content,
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
        "description": this.recipe.description,
        "keywords": "",
        "recipeYield": servings,
        "recipeCategory": this.recipe.categoryId,
        "recipeIngredient": ingredients,
        "recipeInstructions": steps,
      };

      if (this.recipeRating != null) {
        jsonld.aggregateRating = {
          "@type": "AggregateRating",
          "ratingValue": "" + this.recipeRating.average,
          "ratingCount": "" + this.recipeRating.numRatings,
        };
      }

      return JSON.stringify(jsonld);
    }

  }

</script>