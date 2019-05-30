<template>
  <div v-if="recipe">

    <el-row>
      <el-col :span="24">
        <h1>{{ recipe.title }}</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-rate
          v-model="rating"
          show-score
          text-color="#ff9900"
          score-template="{value} points"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Zutaten</span>
          </div>
          <ul v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredients-list">
            <li>
              {{ formatIngredient(ingredient) }}
            </li>
          </ul>
        </el-card>

      </el-col>
      <el-col :span="24" :md="16">
        <el-card class="box-card">
          <ul v-for="(step, index) in recipe.directions.steps" :key="index">
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
  import { Recipe, RecipeUnit } from "@/api/interfaces/Recipe";

  @Component
  export default class RecipeComponent extends Vue {

    @Prop()
    recipe: Recipe;
    
    private rating = 0;

    @Watch("recipe")
    recipeUpdated() {
        this.calculateRating()
    }
    
    formatIngredient(ingredient) {
      let amount = ingredient.amount != null ? ingredient.amount : "";
      let preparation = ingredient.preparation != null ? ", " + ingredient.preparation : "";
      let unit;
    
      switch (ingredient.unit) {
        case RecipeUnit.gram:
          unit = "g";
          break;
        case RecipeUnit.liter:
          unit = "l";
          break;
        default:
          unit = "";
      }
      return `${amount} ${unit} ${ingredient.name}${preparation}`
    }

    calculateRating() {
      if (this.recipe == null) {
        return;
      }

      let ratingCount = 0;
      for (const rating of this.recipe.ratings) {
        ratingCount += rating.value;
      }
      this.rating = ratingCount / this.recipe.ratings.length
    }

    mounted() {
      this.calculateRating()
    }

  }

</script>

<style scoped>

  .ingredients-list {
    list-style: none;
  }

</style>
