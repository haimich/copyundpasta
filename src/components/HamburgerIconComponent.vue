<template>

  <div class="hamburger-container">
    <div class="navIcon">
      <div class="naviconUpper"></div>
      <div class="innerNavicon"></div>
      <div class="naviconLower"></div>
    </div>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class HamburgerIconComponent extends Vue {

    

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .hamburger-container {
    position: relative;
    transition: all 0.5s Ease;
  }

  .navIcon > * {
    width: 30px;
  }

  .navIcon {
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  .naviconUpper {
    border-top: 3px solid black;
    cursor: pointer;
    transition: all 0.2s;
  }

  .innerNavicon {
    margin-top: 5px;
    border-top: 3px solid black;
    cursor: pointer;
    transition: all 0.3s;
  }

  .naviconLower {
    border-bottom: 3px solid black;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 5px;
  }

  .naviconUpper.on {
    transform:
      rotate(360deg);
    border-top: 3px solid white;
    
    opacity: 0;
  }

  .innerNavicon.on {
    transform: rotate(45deg);
    border-top: 3px solid white;
  }

  .naviconLower.on {
    transform: translateY(-8px) rotate(-45deg);
    border-bottom: 3px solid white;
  }

</style>
