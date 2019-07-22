<template>

  <div>
    <el-row class="comment-author">
      <a
        v-if="comment.website != null && comment.website !== ''"
        :href="comment.website"
        target="_blank"
      >
        {{ comment.author }}
      </a>
      <span v-else>
      {{ comment.author }}
      </span>
    </el-row>

    <el-row class="comment-created">
      <FontAwesome :icon="['far', 'clock']" />
      <timeago :datetime="dateTime"></timeago>
    </el-row>

    <el-row class="comment-content">
      {{ comment.content }}
    </el-row>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import { Comment } from "@/interfaces/Comment";
  import moment from "moment-timezone";

  @Component
  export default class SingleCommentComponent extends Vue {

    @Prop()
    comment: Comment;

    get dateTime(): string {
      return moment(this.comment.createdAt).tz("Europe/Berlin").format();
    }

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

.comment-author {
    font-size: 14px;
    color: #353535;
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
