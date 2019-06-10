<template>

  <div>

    <h1 class="article-heading" style="text-transform: uppercase">
      {{ text }}
    </h1>

    <hr class="blue-line">

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class MainHeadingComponent extends Vue {

      @Prop()
      private text: string;

  }

</script>

<style scoped>

</style>
