<template>

  <div
    v-if="recipe"
    class="recipe"
    :class="{border: ! isPrint}"
  >

    <el-row style="margin-bottom: 10px;">
      <el-col :span="16">
        <el-row>
          <h1 id="recipe" class="recipe-title">
            {{ recipe.title }}
          </h1>

          <el-rate
            v-model="ratingsInternal.average"
            text-color="#ff9900"
            show-score
            score-template="({value})"
            class="recipe-rating"
            @change="ratingChanged"
          />

          <div v-if="ratingsInternal != null" style="margin-top: 7px; font-size: 14px;">
            {{ ratingsInternal.numRatings }}
            Bewertung<span v-if="ratingsInternal.numRatings === 0 || ratingsInternal.numRatings >= 2">en</span>
          </div>
        </el-row>

        <el-row style="min-height: 89px; display: flex; align-items: flex-end;"> <!-- hack to align to image bottom -->
          <el-button
            style="margin-top: 20px;"
            @click="printRecipe"
            v-if="! isPrint"
          ><FontAwesome :icon="['fas', 'print']" style="margin-right: 4px;" /> Rezept drucken
          </el-button>
        </el-row>
      </el-col>

      <el-col :span="8" style="display: flex; justify-content: flex-end;">
        <el-image
          :src="recipe.previewImageUrl"
          alt="Rezeptfoto"
          class="recipe-image"
        ></el-image>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <h2 class="category-main-heading">
          Zutaten
        </h2>

        <el-row v-if="! isPrint" class="servings-container">
          <el-col :span="3">
            <el-button
              size="small"
              @click="servingsMultiplier -= servingsSteps"
              :disabled="servingsMultiplier <= minServings"
            >
              <i class="el-icon-minus"></i>
            </el-button>
          </el-col>

          <el-col :span="18" class="servings-text">
            {{ servings }}
          </el-col>

          <el-col :span="3">
            <el-button
              size="small"
              @click="servingsMultiplier += servingsSteps"
              :disabled="servingsMultiplier >= maxServings"
            >
              <i class="el-icon-plus"></i>
            </el-button>
          </el-col>
        </el-row>

        <el-row
          v-if="! isPrint && servingsMultiplier !== 1"
          style="display: flex; justify-content: center;"
        >
          <a
            href="#"
            role="button"
            class="servings-reset"
            @click.prevent="servingsMultiplier = 1"
          >
            Menge zurücksetzen
          </a>
        </el-row>

        <!-- Ingredients -->
        <ul
          class="ingredients-list"
          v-if="recipe != null"
        >
          <li
            v-for="(entry, index) in recipe.ingredients"
            :key="index"
            class="ingredient-main"
          >
            <span
              v-if="entry.isGroup"
            >
              <div class="category-heading">
                {{ entry.title }}:
              </div>

              <ul
                class="ingredients-list"
              >
                <li
                  v-for="(groupIngredient, groupIndex) in entry.ingredients"
                  :key="groupIndex"
                  class="ingredient-group"
                  v-html="formatIngredient(groupIngredient)"
                ></li>
              </ul>
            </span>

            <span v-else v-html="formatIngredient(entry)"></span>
          </li>
        </ul>
      </el-col>

      <el-col :span="16">
        <h2 class="category-main-heading">
          Zubereitung
        </h2>

        <!-- Directions -->
        <ul
          class="directions"
          v-if="recipe != null"
        >
          <li
            v-for="(step, index) in recipe.steps"
            :key="index"
            class="step-main"
          >
            <span
              v-if="step.isGroup"
            >
              <div class="category-heading">
                {{ step.title }}:
              </div>

              <ul
                class="directions"
              >
                <li
                  v-for="(groupStep, groupIndex) in step.steps"
                  :key="groupIndex"
                  class="step-group"
                >{{ groupStep.content }}</li>
              </ul>
            </span>

            <span v-else>
              {{ step.content }}
            </span>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row v-if="! isPrint" :gutter="20" style="margin-top: 15px;">
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

    <RecipeAnnotationComponent :recipe="recipe" :ratings="ratingsInternal" />

  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Recipe, RecipeStep, RecipeServings, RecipeIngredient, RecipeIngredientGroup, RecipeStepGroup } from "@/interfaces/Recipe";
  import { RecipeUnit, RecipeServingsUnit } from "@/interfaces/RecipeIngredients";
  import { Tag } from "@/interfaces/RecipeTags";
  import { $n } from "@/filters/numberFilter";
  import RecipeService from "../../services/RecipeService";
  import { RatingResponse } from "@/interfaces/Rating";
  import RecipeAnnotationComponent from "@/components/recipe/RecipeAnnotationComponent.vue"
  import RecipeUtil from "@/utils/RecipeUtil";

  @Component({
    components: {
      RecipeAnnotationComponent,
    }
  })
  export default class RecipeComponent extends Vue {

    @Prop()
    recipe: Recipe;

    @Prop()
    ratings: RatingResponse;

    @Prop()
    isPrint: boolean;

    private ratingsInternal: RatingResponse = {
      average: 0,
      numRatings: 0,
    };
    
    private servingsMultiplier = 1;

    private minServings = 0.5;

    private maxServings = 5;

    private servingsSteps = 0.5;

    get servings(): string {
      return RecipeUtil.formatServings(this.recipe, this.servingsMultiplier);
    }

    @Watch("ratings")
    ratingsChanged() {
      this.ratingsInternal = this.ratings;
    }

    async ratingChanged(newValue: number) {
      let response;

      try {
        response = await RecipeService.rateRecipe(this.$axios, this.recipe.slug, newValue);
      } catch (error) {
        console.log(error);
        return;
      }

      this.ratingsInternal = response.data;
    }
    
    formatIngredient(ingredient: RecipeIngredient): string {
      return RecipeUtil.formatIngredient(ingredient, this.servingsMultiplier);
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
      this.ratingsInternal = this.ratings;
    }

  }

</script>

<style lang="scss" scoped>

  .recipe {
    padding: 22px;
    border-radius: 4px;
    overflow: hidden;

    &.border {
      border: 1px solid #EBEEF5;
    }
  }

  .recipe-title {
    font-size: 39px;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 12px;
  }

  .recipe-rating /deep/ i {
    font-size: 20px;  
  }

  .recipe-rating /deep/ .el-rate__text {
    color: #424242 !important;
  }

  .recipe-image {
    max-width: 195px;
  }

  .ingredients-list, .directions {
    list-style: none;
    padding-left: 0;
  }

  .ingredients-list li {
    padding: 5px 0;
    font-size: 17px;
  }

  .servings-container {
    margin-bottom: 8px;
    
    .el-col {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 31px;
    }

    .servings-text {
      font-size: 15px;
      color: #58595a;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
    }

    button {
      background: #F5F7FA;
      padding: 0;
      height: 100%;
      width: 34px;
      z-index: 100;
    }
  }

  .servings-reset {
    margin-top: -2px;
    font-size: 14px;
  }

  .category-main-heading {
    color: #1d1d1d;
    font-weight: 300;
    font-size: 24px;
    border-bottom: 1px solid #1d1d1d;
    padding-bottom: 5px;
  }

  .category-heading {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .directions li {
    padding: 15px 0;

    &.step-main:first-child {
      padding: 0;
    }
  }

  .recipe /deep/ .el-tag {
    color: #404040;
  }

</style>
