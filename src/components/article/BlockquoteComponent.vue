<template>

  <el-card class="blockquote-container">
    <div class="article-card-body blockquote">
      <el-row>
        <FontAwesome class="blockquote-icon" :icon="['fas', 'quote-right']" />
      </el-row>

      <el-row>
        <blockquote class="blockquote-quote">
          {{ quote }}
        </blockquote>
      </el-row>

      <el-row class="blockquote-author">
        - {{ author }}
      </el-row>
    </div>
  </el-card>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class BlockquoteComponent extends Vue {

      @Prop()
      private quote: string;

      @Prop()
      private author: string;

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .blockquote-container {
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 22px;
  }

  .blockquote {
    font-weight: 100;
    color: #1b1b1b;

    .blockquote-icon {
      font-size: 20px;
      color: #888;
    }

    .blockquote-quote {
      font-size: 25px;
    }

    .blockquote-author {
      font-size: 15px;
      text-align: right;
    }
  }

</style>
