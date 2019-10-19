<template>

  <div class="main-heading-container">

    <el-page-header
      @back="goHome"
      title="Zurück"
      class="global-back-button hidden-xs-only"
    ></el-page-header>

    <h1 class="article-heading " style="text-transform: uppercase">
      {{ text }}
    </h1>

    <hr class="blue-line">

    <el-row
      type="flex"
      justify="center"
      class="main-heading-sub"
      v-if="hasComments() || hasSubtitle()"
    >
      <a
        v-if="hasComments()"
        href="#comments"
        title="Zu Kommentaren springen"
      >
        <FontAwesome :icon="['far', 'comment']" style="margin-right: 4px;" />
        {{ commentCount }}
        
        <span v-if="commentCount === 1">
          Kommentar
        </span>
        <span v-else>
          Kommentare
        </span>
      </a>

      <span
        v-if="hasSubtitle()"
      >
        {{ subtitle }}
      </span>
    </el-row>

    <el-row
      type="flex"
      justify="center"
    >
      <el-image
        v-if="image != null && image !== ''"
        :src="image"
        fit="cover"
        style="min-height: 300px; margin-top: 16px; margin-bottom: 60px;"
        alt="Titelbild"
      ></el-image>
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class MainHeadingComponent extends Vue {

      @Prop()
      private text: string;

      @Prop({
        required: false,
      })
      private subtitle: string;

      @Prop()
      private image: string;

      @Prop()
      private commentCount: number;

      hasComments() {
        return this.commentCount >= 1;
      }

      hasSubtitle() {
        return this.subtitle != null && this.subtitle !== "";
      }

      goHome() {
        this.$router.push({
          path: "/",
        })
      }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";
  @import "~/scss/base.scss";

  .global-back-button {
    margin-top: -18px;
    color: #313131;
  }

  .main-heading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media all and (max-width: $breakpoint-xs) {
      .article-heading {
        margin-top: 0;
      }
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
