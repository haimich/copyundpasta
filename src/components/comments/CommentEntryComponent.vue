<template>

  <div>

    <!-- Single Comment -->
    <el-row>
      <el-col :span="3" style="display: flex; justify-content: center;">
        <CommentAvatarComponent />
      </el-col>

      <el-col :span="21">
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
  import CommentAvatarComponent from "@/components/comments/CommentAvatarComponent.vue";

  @Component({
    components: {
      CommentAvatarComponent,
    }
  })
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
