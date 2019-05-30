<template lang="md">
  <el-row>
    <recipe-component :recipe="recipe" />
  </el-row>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import RecipeComponent from "@/components/RecipeComponent.vue";

  @Component({
    components: {
      RecipeComponent
    },
    // @ts-ignore
    async asyncData({ $axios }) {
      const response = await $axios.post(`/api/recipes/getRecipe`, {
        id: 1,
      });
      return { recipe: response.data };
    }
  })
  export default class OmaHildasDampfnudeln extends Vue {
    
    private recipe = null;
  
    head: {
      title: "Oma Hildas Dampfnudeln"
    }

  }

</script>
