<template>

  <div class="error-container">
    <img src="@/assets/images/macerror.png" style="margin-top: 100px; margin-bottom: 15px;" />

    <div class="text-container">
      <h2 v-if="error.statusCode === 404">
        404, page not found.
      </h2>
      <h2 v-else>
        Es ist ein Fehler aufgetreten
      </h2>

    </div>

    <div style="margin-top: 25px;">
      <nuxt-link to="/">
        Zur Startseite
      </nuxt-link>
    </div>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class ErrorComponent extends Vue {

    @Prop()
    error: any;

    get statusCode() {
        return (this.error && this.error.statusCode) || 500;
    }

    get message() {
      return (this.error && this.error.message) || "";
    }

    head() {
      return {
        title: this.message,
      };
    }

  }

</script>

<style lang="scss" scoped>

  /* @see https://codepen.io/selcukcura/pen/XeQpEv */
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  .error-container {
    min-height: 600px;
    background-color: #95b1b0;
    text-align: center;
  }

  // helper
  .text-container {
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    font-size: 28px;
    margin: 0;
  }

</style>
