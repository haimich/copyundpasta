<template>

  <div class="main-heading-container">

    <el-page-header @back="goHome" title="Zurück" style="margin-top: -18px;"></el-page-header>

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

      goHome() {
        this.$router.push({
          path: "/",
        })
      }

  }

</script>

<style scoped>

  .main-heading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>
