<template>

  <div class="main-heading-container">

    <h1 class="article-heading" style="text-transform: uppercase">
      {{ text }}
    </h1>

    <hr class="blue-line">

    <img
      v-if="image != null && image !== ''"
      :src="image"
      style="margin-top: 16px; margin-bottom: 60px;"
      alt="Titelbild"
    >

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class MainHeadingComponent extends Vue {

      @Prop()
      private text: string;

      @Prop()
      private image: string;

  }

</script>

<style scoped>

  .main-heading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>
