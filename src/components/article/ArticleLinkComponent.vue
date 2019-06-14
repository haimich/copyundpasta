<template>

  <a :href="href" target="_blank">{{ text }}</a>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ArticleLinkComponent extends Vue {

      @Prop()
      private href: string;

      @Prop()
      private text: string;

  }

</script>

<style scoped>

</style>
