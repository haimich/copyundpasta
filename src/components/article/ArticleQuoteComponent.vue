<template>

  <span>&bdquo;{{ text }}&ldquo;</span>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ArticleQuoteComponent extends Vue {

      @Prop()
      private text: string;

  }

</script>