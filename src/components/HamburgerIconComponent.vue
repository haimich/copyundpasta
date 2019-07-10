<template>

  <div class="hamburger-container" @click="handleClick">
    <div class="navIcon">
      <div class="naviconUpper" :class="{'on': isMenuVisible}"></div>
      <div class="innerNavicon" :class="{'on': isMenuVisible}"></div>
      <div class="naviconLower" :class="{'on': isMenuVisible}"></div>
    </div>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class HamburgerIconComponent extends Vue {

    @Prop()
    isMenuVisible = false;

    handleClick() {
      this.$emit("toggle");
    }

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
    transform: rotate(360deg);
    
    opacity: 0;
  }

  .innerNavicon.on {
    transform: rotate(45deg);
  }

  .naviconLower.on {
    transform: translateY(-8px) rotate(-45deg);
  }

</style>
