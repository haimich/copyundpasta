<template>
  <div v-if="recipeData">

    <el-row>
      <el-col :span="24">
        <h1>{{ recipeData.title }}</h1>
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
          <ul v-for="(ingredient, index) in recipeData.ingredients" :key="index" class="ingredients-list">
            <li>
              {{ formatIngredient(ingredient) }}
            </li>
          </ul>
        </el-card>

      </el-col>
      <el-col :span="24" :md="16">
        <el-card class="box-card">
          <ul v-for="(step, index) in recipeData.directions.steps" :key="index">
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
export default {
  props: {
    recipeData: Object,
  },
  data() {
    return {
      rating: 0
    }
  },
  watch: {
    recipeData: () => {
      this.calculateRating()
    }
  },
  methods: {
    formatIngredient(ingredient) {
      let unit;
      const amount = ingredient.amount ? ingredient.amount : "";
      switch (ingredient.unit) {
        case "gram":
          unit = "g";
          break;
        case "liter":
          unit = "l";
          break;
        default:
          unit = "";
      }
      return `${amount} ${unit} ${ingredient.name}`
    },
    calculateRating() {
      if (this.recipeData == null) {
        return;
      }

      let ratingCount = 0;
      for (const rating of this.recipeData.ratings) {
        ratingCount += rating.value;
      }
      this.rating = ratingCount / this.recipeData.ratings.length
    }
  },
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
