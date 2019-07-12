<template>

  <div>

    <!-- Single Comment -->
    <el-row>
      <el-col :span="3" style="display: flex; justify-content: center;">
        <el-avatar
          :size="45"
          class="comment-avatar"
          :src="avatarImage"
        >
          <FontAwesome :icon="['fas', 'user-circle']" />
        </el-avatar>
      </el-col>

      <el-col :span="21">
        <el-row class="comment-author">
          {{ comment.author }}
        </el-row>

        <el-row class="comment-created">
          <FontAwesome :icon="['far', 'clock']" /> {{ comment.createdAt | formatAsDate }}
        </el-row>

        <el-row class="comment-content">
          {{ comment.content }}
        </el-row>
      </el-col>
    </el-row>

    <!-- Children -->
    <el-row v-if="hasChildren()" style="margin-top: 15px; margin-left: 30px;">
      <CommentEntryComponent
        v-for="(comment, index) in comment.children"
        :key="index"
        :comment="comment"
        style="margin-bottom: 15px;"
      />
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Comment } from "@/interfaces/Comment";

  @Component
  export default class CommentEntryComponent extends Vue {

    @Prop()
    comment: Comment;

    @Prop({
      required: false,
    })
    avatarImage: string;

    hasChildren(): boolean {
      return this.comment.children != null && this.comment.children.length >= 1;
    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .comment-avatar {
    background-color: white;
    color: #c0c4cc;
    font-size: 45px;
  }

  .comment-author {
    font-size: 14px;
    color: #2f2f2f;
    text-transform: uppercase;
  }

  .comment-created {
    margin-top: 8px;
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
