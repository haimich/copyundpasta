<template>

  <div class="main-heading-container">

    <el-page-header
      @back="goHome"
      title="Zurück"
      style="margin-top: -18px; color: #313131"
    ></el-page-header>

    <h1 class="article-heading" style="text-transform: uppercase">
      {{ text }}
    </h1>

    <hr class="blue-line">

    <el-row
      type="flex"
      justify="center"
      class="main-heading-sub"
      v-if="commentCount >= 1"
    >
      <a href="#comments" title="Zu Kommentaren springen">
        <FontAwesome :icon="['far', 'comment']" style="margin-right: 4px;" />
        {{ commentCount }}
        
        <span v-if="commentCount === 1">
          Kommentar
        </span>
        <span v-else>
          Kommentare
        </span>
      </a>
    </el-row>

    <el-image
      v-if="image != null && image !== ''"
      :src="image"
      style="margin-top: 16px; margin-bottom: 60px;"
      alt="Titelbild"
    ></el-image>

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

      @Prop()
      private commentCount: number;

      goHome() {
        this.$router.push({
          path: "/",
        })
      }

  }

</script>

<style lang="scss" scoped>

  .main-heading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .main-heading-sub {
    font-size: 15px;
    color: #424242;
    margin-top: 8px;

    a, a:visited {
      color: #424242;
    }
  }

</style>
