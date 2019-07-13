<template>

  <div>

    <!-- Single Comment -->
    <el-row>
      <el-col :span="3" style="display: flex; justify-content: center;">
        <CommentAvatarComponent />
      </el-col>

      <el-col :span="21" class="comment-container">
        <SingleCommentComponent :comment="comment" />

        <el-row style="display: flex; justify-content: flex-end">
          <el-button
            v-if="! hasParent()"
            size="small"
            round
            @click="showEditor = ! showEditor"
          >
            <span v-if="showEditor">
              Antwort ausblenden
            </span>
            <span v-else>
              Antworten
            </span>
          </el-button>
        </el-row>

        <el-row v-show="showEditor">
          <CommentEditorComponent
            @save="saveComment"
            style="margin-top: 35px; margin-bottom: 10px;"
          />
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
  import CommentEditorComponent from "@/components/comments/CommentEditorComponent.vue";
  import SingleCommentComponent from "@/components/comments/SingleCommentComponent.vue";

  @Component({
    components: {
      CommentAvatarComponent,
      CommentEditorComponent,
      SingleCommentComponent
    }
  })
  export default class CommentEntryComponent extends Vue {

    @Prop()
    comment: Comment;

    @Prop({
      required: false,
    })
    avatarImage: string;

    private showEditor = false;

    hasChildren(): boolean {
      return this.comment.children != null && this.comment.children.length >= 1;
    }

    hasParent(): boolean {
      return this.comment.parentCommentId !== undefined && this.comment.parentCommentId !== null;
    }

    saveComment() {

    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .comment-container {
    border: 1px solid rgb(191, 191, 191);
    border-radius: 4px;
    padding: 12px 18px;
  }

</style>
