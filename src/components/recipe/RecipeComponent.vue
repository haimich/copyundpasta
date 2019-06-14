<template>

  <div v-if="recipe" style="margin-top: 20px;">

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
            v-for="(ingredient, index) in getIngredientList()"
            :key="index"
            class="ingredients-list"
          >
            <li v-html="ingredient"></li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>Zubereitung</span>
          </div>
          <ul
            v-for="(step, index) in getStepList()"
            :key="index"
            class="directions"
          >
            <li v-html="step"></li>
          </ul>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientGroup, RecipeStepGroup } from "@/interfaces/Recipe";
  import { RecipeUnit } from "@/interfaces/RecipeIngredients";
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

    getIngredientList(): string[] {
      if (this.recipe == null) {
        return [];
      }

      let ingredientStrings = [];

      for (let entry of this.recipe.ingredients) {
        if ('isGroup' in entry) {
          entry = entry as RecipeIngredientGroup;
          ingredientStrings.push("<strong>" + entry.title + ":</strong>");

          for (let ingredient of entry.ingredients) {
            ingredientStrings.push(this.formatIngredient(ingredient));
          }

          ingredientStrings.push("");
        } else {
          entry = entry as RecipeIngredient;
          ingredientStrings.push(this.formatIngredient(entry));
        }
      }

      return ingredientStrings;
    }
    
    formatIngredient(ingredient: RecipeIngredient): string {
      let amount = this.formatAmount(ingredient);
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

    formatAmount(ingredient: RecipeIngredient): string {
      if (this.isNumberDefined(ingredient.amount)) {
        if (ingredient.amount === 0.25) {
          return "&frac14;";
        } else if (ingredient.amount === 0.5) {
          return "&frac12;";
        } else if (ingredient.amount === 0.75) {
          return "&frac34;";
        } else {
          // just format the number nicely
          return $n(ingredient.amount);
        }
      } else if (this.isNumberDefined(ingredient.amountFrom) && this.isNumberDefined(ingredient.amountTo)) {
          return $n(ingredient.amountFrom) + "-" + $n(ingredient.amountTo);
      } else {
        return "";
      }
    }

    formatIngredientName(ingredient: RecipeIngredient) {
      if (ingredient != null && ingredient.ingredient != null) {
        if ((this.isNumberDefined(ingredient.amount) && ingredient.amount >= 2) ||
            (this.isNumberDefined(ingredient.amountFrom) && this.isNumberDefined(ingredient.amountTo))) {
          if (ingredient.ingredient.namePlural != null) {
            return ingredient.ingredient.namePlural;
          } else {
            return ingredient.ingredient.name;
          }
        } else {
          return ingredient.ingredient.name;
        }
      } else {
        return "";
      }
    }

    getStepList(): string[] {
      if (this.recipe == null) {
        return [];
      }

      let stepStrings = [];

      for (let entry of this.recipe.steps) {
        if ('isGroup' in entry) {
          entry = entry as RecipeStepGroup;
          stepStrings.push("<strong>" + entry.title + ":</strong>");

          for (let step of entry.steps) {
            stepStrings.push(this.formatStep(step));
          }

          stepStrings.push("");
        } else {
          entry = entry as RecipeStep;
          stepStrings.push(this.formatStep(entry));
        }
      }

      return stepStrings;
    }

    formatStep(step: RecipeStep): string {
      return step.content;
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

    isNumberDefined(n: number): boolean {
      return n !== null && n !== undefined;
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
