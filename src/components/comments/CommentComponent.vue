<template>

  <div>
    
    <ul
      class="comments"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <li>
        <CommentEntryComponent :comment="comment" />
      </li>
    </ul>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import CommentEntryComponent from "@/components/comments/CommentEntryComponent.vue";

  @Component({
    components: {
      CommentEntryComponent,
    }
  })
  export default class CommentComponent extends Vue {

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

</style>
