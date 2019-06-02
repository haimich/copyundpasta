<template>

  <div class="error-container">
    <img src="@/assets/images/macerror.png" style="margin-top: 100px; margin-bottom: 15px;" />

    <div class="text-container">
      <h2>
        {{ message }}
      </h2>
    </div>

    <div class="link-container">
      <i class="el-icon-s-home" role="button"></i>
      
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
      console.log(this.error);

      if (this.statusCode === 404) {
        return "404, page not found.";
      } else {
        return "Es ist ein Fehler aufgetreten";
      }
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

  .text-container {
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    font-size: 26px;
    margin: 0;
  }

  .link-container {
    margin-top: 60px;
    color: white;
    
    a:visited {
      color: white;
    }
  }

</style>
