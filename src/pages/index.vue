<template>

  <el-row>
    <el-col :span="24">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in carouselItems" :key="item">
          <img :src="item" alt="hero image" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class IndexPage extends Vue {

    private carouselItems = [
      "@/assets/images/logo.png",
    ];

  }

</script>

<style lang="scss" scoped>

</style>
