<template>

  <div>
    <el-row class="comment-author">
      {{ comment.author }}
    </el-row>

    <el-row class="comment-created">
      <FontAwesome :icon="['far', 'clock']" />
      <timeago :datetime="comment.createdAt"></timeago>
    </el-row>

    <el-row class="comment-content">
      {{ comment.content }}
    </el-row>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Comment } from "@/interfaces/Comment";

  @Component
  export default class SingleCommentComponent extends Vue {

    @Prop()
    comment: Comment;

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

.comment-author {
    font-size: 14px;
    color: #353535;
    text-transform: uppercase;
  }

  .comment-created {
    margin-top: 10px;
    font-size: 13px;
    color: #757575;
  }

  .comment-content {
    margin-top: 10px;
    line-height: 30px;
    color: #101010;
    font-weight: 300;
    letter-spacing: 0.3px;
    word-spacing: 0px;
  }

</style>
