<template>

  <div>

    <h3 style="margin-bottom: 6px;">
      HINTERLASSE EINEN KOMMENTAR
    </h3>

    <hr class="hr">

    <CommentEditorComponent
      @save="saveComment"
      size="large"
      style="margin-top: 35px; margin-bottom: 10px;"
    />
    
    <ul
      class="comments"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <li>
        <CommentEntryComponent
          :comment="comment"
          @saveComment="saveComment"
        />
      </li>
    </ul>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import CommentEditorComponent from "@/components/comments/CommentEditorComponent.vue";
  import CommentEntryComponent from "@/components/comments/CommentEntryComponent.vue";
  import { Comment } from "@/interfaces/Comment";
  import ArticleService from "@/services/ArticleService";
  import ArticleSearchRepo from "../../api/search/ArticleSearchRepo";

  @Component({
    components: {
      CommentEditorComponent,
      CommentEntryComponent,
    }
  })
  export default class CommentComponent extends Vue {

    @Prop()
    slug: string;

    @Prop()
    comments: Comment[];

    async saveComment(comment: Comment) {
      comment.slug = this.slug;

      try {
        await ArticleService.createComment(this.$axios, comment);

        this.$notify({
          title: "",
          message: 'Vielen Dank für deinen Kommentar!',
          type: "success",
        });

        this.$emit("commentAdded");
      } catch (error) {
        console.log(error);

        this.$notify({
          title: "",
          message: 'Beim Speichern ist ein Fehler aufgetreten',
          type: "warning"
        });
      }
    }
  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .comments {
    list-style: none;
    padding: 0;

    li {
      padding: 18px 0;
    }
  }

  .hr {
    border-top: 1.8px solid #353535;
    margin-bottom: 10px;
  }

</style>
