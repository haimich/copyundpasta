<template>
  <div class="container">
    <main>
      <el-row>
        <!-- Main Container -->
        <nuxt />
      </el-row>
    </main>
  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class PrintLayoutComponent extends Vue {

  }

</script>

<style lang="scss">

  @import "~/scss/base.scss";

</style>
