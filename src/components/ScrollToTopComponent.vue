<template>

  <el-row>
    <div
      class="backtop-button"
      @click="scrollToTop"
      v-show="scrollPos >= 400"
    >
      <i class="el-icon-caret-top"></i>
    </div>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class ScrollToTopComponent extends Vue {

    private scrollPos = 0;

    scrollToTop() {
      let top = document.querySelector('.container');
      
      if (top != null && top.scrollIntoView != null) {
        top.scrollIntoView({ 
          behavior: 'auto' 
        });
      }
    }

    mounted() {
      if (process.browser) {
        window.onscroll = () => {
          this.scrollPos = window.scrollY;
        };
      }
    }

  }

</script>

<style lang="scss" scoped>

  .backtop-button {
    position: fixed;
    right: 40px;
    bottom: 75px;
    cursor: pointer;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 1000;
  }

</style>
