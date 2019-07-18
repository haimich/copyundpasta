<template>

  <div v-if="recipe" class="recipe">

    <el-row style="margin-bottom: 20px;">
      <el-col :span="16">
        <h2>{{ recipe.title }}</h2>

        <div style="margin-bottom: 10px;">
          {{ getServings() }}
        </div>

        <el-rate
          v-model="ratingResponse.average"
          show-score
          text-color="#ff9900"
          score-template="{value} Sterne"
          @change="ratingChanged"
        />

        <div v-if="ratingResponse != null" style="margin-top: 6px; font-size: 13px;">
          {{ ratingResponse.numRatings }}
          Stimme<span v-if="ratingResponse.numRatings === 0 || ratingResponse.numRatings >= 2">n</span>
        </div>

        <el-button
          style="margin-top: 20px;"
          @click="printRecipe"
          v-if="! isPrint"
        >Rezept drucken
        </el-button>
      </el-col>

      <el-col :span="8" style="display: flex; justify-content: flex-end;">
        <el-image
          :src="recipe.previewImageUrl"
          alt="Rezeptfoto"
          style="max-width: 220px;"
        ></el-image>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <h3 style="margin-bottom: 20px;">Zutaten</h3>

            <div v-if="! isPrint">
              <div style="margin-bottom: 8px;">
                Menge:
              </div>
              
              <el-input-number
                v-model="servingsMultiplier"
                :min="0.5"
                :max="5"
                :step="0.5"
                size="small"
                placeholder="1"
              ></el-input-number>
            </div>
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
            <h3>Zubereitung</h3>
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

    <el-row :gutter="20" style="margin-top: 15px;">
      <el-col :span="8">
        <el-tag
          v-for="tag in getTags()"
          :key="tag.id"
          effect="plain"
          style="text-transform: lowercase"
        >
          #{{ tag.name }}
        </el-tag>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientGroup, RecipeStepGroup } from "@/interfaces/Recipe";
  import { RecipeUnit, RecipeServingsUnit } from "@/interfaces/RecipeIngredients";
  import { Tag } from "@/interfaces/RecipeTags";
  import { $n } from "@/filters/numberFilter";
  import RecipeService from "../../services/RecipeService";
  import NumberUtil from "../../utils/NumberUtil";
import { RatingResponse } from "../../interfaces/Rating";

  @Component
  export default class RecipeComponent extends Vue {

    @Prop()
    recipe: Recipe;

    @Prop()
    isPrint: boolean;

    private ratingResponse: RatingResponse = {
      average: 0,
      numRatings: 0,
    };
    
    private servingsMultiplier = 1;

    async fetchRating() {
      let response;

      try {
        response = await RecipeService.getRating(this.$axios, this.recipe.slug);
      } catch (error) {
        console.log(error);
        return;
      }

      this.ratingResponse = response.data;
    }

    async ratingChanged(newValue: number) {
      let response;

      try {
        response = await RecipeService.rateRecipe(this.$axios, this.recipe.slug, newValue);
      } catch (error) {
        console.log(error);
        return;
      }

      this.ratingResponse = response.data;
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
      if (NumberUtil.isNumberDefined(ingredient.amount)) {
        let amount = ingredient.amount * this.servingsMultiplier;

        if (amount === 0.25) {
          return "&frac14;";
        } else if (amount === 0.5) {
          return "&frac12;";
        } else if (amount === 0.75) {
          return "&frac34;";
        } else if (amount === 1.5) {
          return "1 &frac12;";
        } else {
          // just format the number nicely
          return $n(amount);
        }
      } else if (NumberUtil.isNumberDefined(ingredient.amountFrom) && NumberUtil.isNumberDefined(ingredient.amountTo)) {
        let amountFrom = ingredient.amountFrom * this.servingsMultiplier;
        let amountTo = ingredient.amountTo * this.servingsMultiplier;

        return $n(amountFrom) + "-" + $n(amountTo);
      } else {
        return "";
      }
    }

    formatIngredientName(ingredient: RecipeIngredient) {
      if (ingredient != null && ingredient.ingredient != null) {
        if ((NumberUtil.isNumberDefined(ingredient.amount) && ingredient.amount >= 2) ||
            (NumberUtil.isNumberDefined(ingredient.amountFrom) && NumberUtil.isNumberDefined(ingredient.amountTo))) {
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

    getServings(): string {
      if (this.recipe == null || this.recipe.servings == null) {
        return "";
      }

      let amount = this.recipe.servings.amount * this.servingsMultiplier;
      let unit;
    
      switch (this.recipe.servings.unit) {
        case RecipeServingsUnit.quantity:
          unit = "Stück";
          break;
        default:
          unit = "";
      }

      return amount + " " + unit;
    }

    getTags(): Tag[] {
      if (this.recipe == null || this.recipe.tags == null) {
        return [];
      }

      return this.recipe.tags;
    }

    printRecipe() {
      let newWindow = window.open("/rezept/" + this.recipe.slug + "?print=true", this.recipe.title, "height=900, width=800");
      newWindow.moveTo(400, 0);
    }

    mounted() {
      this.fetchRating();
    }

  }

</script>

<style lang="scss" scoped>

  .recipe {
    padding: 22px;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    overflow: hidden;
  }

  .ingredients-list, .directions {
    list-style: none;
    padding-left: 0;
  }

  .ingredients-list li, .directions li {
    padding: 4px 0;
  }

  .directions li {
    margin: 0 0 4px 0;
  }

</style>
