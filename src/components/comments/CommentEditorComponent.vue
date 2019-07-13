<template>

  <div class="comment-editor">

    <el-row v-show="! showPreview">
      <el-col :span="3" style="display: flex; justify-content: center;">
        <CommentAvatarComponent />
      </el-col>
        
      <el-col :span="21">
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
        >
          <el-row>
            <el-form-item prop="author">
              <el-input
                v-model="form.author"
                
                placeholder="Name"
                style="width: 40%"
              ></el-input>
            </el-form-item>
          </el-row>

          <el-row>
            <el-form-item prop="content">
              <el-input
                type="textarea"
                v-model="form.content"
                prop="content"
                :rows="5"
                placeholder="Kommentar"
              ></el-input>
            </el-form-item>
          </el-row>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-show="showPreview" style="min-height: 206px;">
      <CommentEntryComponent
        :comment="form"
      />
    </el-row>

    <el-row style="display: flex; justify-content: flex-end;">
      <el-button @click="showPreview = ! showPreview">
        <span v-if="showPreview">
          Vorschau ausblenden
        </span>
        <span v-else>
          Vorschau anzeigen
        </span>
      </el-button>

      <el-button type="primary" @click="save">
        Abschicken
      </el-button>
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import CommentAvatarComponent from "@/components/comments/CommentAvatarComponent.vue";
  import { Comment } from "@/interfaces/Comment";
  import CommentEntryComponent from "@/components/comments/CommentEntryComponent.vue";

  @Component({
    components: {
      CommentAvatarComponent,
      CommentEntryComponent,
    }
  })
  export default class CommentEditorComponent extends Vue {

    private form = {
      author: "",
      content: "",
      createdAt: new Date(),
    }

    private showPreview = false;

    private rules = {
      author: [
        { required: true, message: "Bitte gib einen Namen ein", trigger: "change" },
      ],
      content: [
        { required: true, message: "Bitte gib einen Text ein", trigger: "change" },
      ],
    };

    save() {
      // @ts-ignore
      this.$refs.form.validate((valid) => {
        if (valid) {
          let comment: Comment = {
            author: this.form.author,
            content: this.form.content,
          };

          this.$emit("save", comment);
        }
      });
    }

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .comment-editor input, .comment-editor textarea {
    font-size: 15px;
  }

  .comment-editor textarea {
    padding: 18x;
  }

</style>
