<template>

  <vueper-slides :slide-ratio="slideRatio" :arrows-outside="true">
    <vueper-slide
      v-for="(url, index) in images"
      :key="index"
      :image="url"
    ></vueper-slide>
  </vueper-slides>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";

  @Component({
    components: { VueperSlides, VueperSlide },
  })
  export default class SlideshowComponent extends Vue {

      @Prop()
      private images: string[];
      
      @Prop({
        required: false,
        default: 0.75,
      })
      private slideRatio: number;

  }

</script>