<template>
  <div v-if="recipe">

    <el-row>
      <el-col :span="24">
        <h2>{{ recipe.title }}</h2>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 10px">
      <el-col>
        <el-rate
          v-model="rating"
          show-score
          text-color="#ff9900"
          score-template="{value} Sterne"
        />
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>Zutaten</span>
          </div>
          <ul
            v-for="(ingredient, index) in recipe.ingredients"
            :key="index"
            class="ingredients-list"
          >
            <li v-html="formatIngredient(ingredient)">
            </li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>Zubereitung</span>
          </div>
          <ul
            v-for="(step, index) in recipe.directions"
            :key="index"
            class="directions"
          >
            <li>
              {{ step.content }}
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeUnit } from "@/interfaces/Recipe";
  import { $n } from "@/filters/formatNumber";

  @Component
  export default class RecipeComponent extends Vue {

    @Prop()
    recipe: Recipe;
    
    private rating = 0;

    @Watch("recipe")
    recipeUpdated() {
        this.calculateRating()
    }
    
    formatIngredient(ingredient: RecipeIngredient): string {
      let amount = this.formatAmount(ingredient.amount);
      let preparation = ingredient.preparation != null ? ", " + ingredient.preparation : "";
      let ingredientName = this.formatIngredientName(ingredient)
      let unit;
    
      switch (ingredient.unit) {
        case RecipeUnit.gram:
          unit = "g";
          break;
        case RecipeUnit.liter:
          unit = "l";
          break;
        case RecipeUnit.el:
          unit = "EL";
          break;
        case RecipeUnit.tl:
          unit = "TL";
          break;
        case RecipeUnit.einige:
          unit = "einige";
          break;
        default:
          unit = "";
      }

      if (amount != null && amount !== "") {
        amount += " "; // we need a space here
      }

      return `${amount}${unit} ${ingredientName}${preparation}`
    }

    formatAmount(amount: number): string {
      if (amount !== null && amount !== undefined) {
        if (amount === 0.25) {
          return "&frac14;";
        } else if (amount === 0.5) {
          return "&frac12;";
        } else if (amount === 0.75) {
          return "&frac34;";
        } else {
          // just format the number nicely
          return $n(amount);
        }
      } else {
        return "";
      }
    }

    formatIngredientName(ingredient: RecipeIngredient) {
      if (ingredient != null && ingredient.ingredient != null) {
        if (ingredient.amount >= 2 && ingredient.ingredient.namePlural != null) {
          return ingredient.ingredient.namePlural;
        } else {
          return ingredient.ingredient.name;
        }
      } else {
        return "";
      }
    }

    calculateRating() {
      if (this.recipe == null) {
        return;
      } else if (this.recipe.ratings == null || this.recipe.ratings.length === 0) {
        return;
      }

      let ratingCount = 0;
      for (const rating of this.recipe.ratings) {
        ratingCount += rating.value;
      }
      this.rating = ratingCount / this.recipe.ratings.length
    }

    reset() {
      this.rating = 0;
    }

    mounted() {
      this.reset();

      this.calculateRating()
    }

  }

</script>

<style scoped>

  .ingredients-list, .directions {
    list-style: none;
    padding-left: 0;
  }

  .ingredients-list li, .directions li {
    padding: 4px 0;
  }

  .directions li {
    margin: 0 0 10px 0;
  }

</style>
