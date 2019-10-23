<template>

  <div style="margin-top: 40px;">

    <h3 id="comments" style="margin-bottom: 6px;">
      HINTERLASSE EINEN KOMMENTAR
    </h3>

    <hr class="hr">

    <CommentEditorComponent
      size="large"
      style="margin-top: 35px; margin-bottom: 10px;"
      :slug="slug"
      @commentAdded="$emit('commentAdded')"
    />
    
    <ul
      class="comments"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <li>
        <CommentEntryComponent
          :comment="comment"
          :slug="slug"
          @commentAdded="$emit('commentAdded')"
        />
      </li>
    </ul>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import CommentEditorComponent from "@/components/comments/CommentEditorComponent.vue";
  import CommentEntryComponent from "@/components/comments/CommentEntryComponent.vue";
  import { Comment, CommentWithChallenge } from "@/interfaces/Comment";
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
