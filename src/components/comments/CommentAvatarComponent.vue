<template>

  <div>
    <el-avatar
      :size="45"
      class="comment-avatar"
      :src="avatarImage"
    >
      <FontAwesome :icon="['fas', 'user-circle']" />
    </el-avatar>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class CommentAvatarComponent extends Vue {

    @Prop({
      required: false,
    })
    avatarImage: string;

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .comment-avatar {
    background-color: white;
    color: #c0c4cc;
    font-size: 45px;
  }

</style>
