<template>
  <el-row style="display: flex; justify-content: center; margin-top: 20px;">

    <iframe
      width="560"
      height="315"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

  </el-row>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class YouTubeVideoComponent extends Vue {

      @Prop()
      private url: string;

  }

</script>