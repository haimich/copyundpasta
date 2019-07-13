<template>

  <div class="comment-editor">

    <el-row>
      <el-col :span="3" style="display: flex; justify-content: center;">
        <CommentAvatarComponent />
      </el-col>
        
      <el-col :span="21">
        <el-form
          :model="form"
          :rules="rules"
          :validateOnRuleChange="false"
          ref="form"
          v-show="! showPreview"
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
                style="position: relative;"
              ></el-input>

              <!-- Emoji button -->
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                class="emoji-button"
                @click="emojiDialogVisible = true"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </el-form-item>
          </el-row>
        </el-form>

        <SingleCommentComponent 
          v-show="showPreview"
          :comment="form"
          style="min-height: 206px;"
        />
      </el-col>
    </el-row>

    <el-row style="display: flex; justify-content: flex-end;">
      <el-button
        @click="showPreview = ! showPreview"
        :disabled="formIsEmpty()"
      >
        <span v-if="showPreview">
          Vorschau ausblenden
        </span>
        <span v-else>
          Vorschau anzeigen
        </span>
      </el-button>

      <el-button
        type="primary"
        @click="save"
      >
        Abschicken
      </el-button>
    </el-row>

    <EmojiDialog
      :visible="emojiDialogVisible"
      @close="emojiDialogVisible = false"
    />

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import CommentAvatarComponent from "@/components/comments/CommentAvatarComponent.vue";
  import { Comment } from "@/interfaces/Comment";
  import SingleCommentComponent from "@/components/comments/SingleCommentComponent.vue";
  import EmojiDialog from "@/components/dialogs/EmojiDialog.vue";

  @Component({
    components: {
      CommentAvatarComponent,
      SingleCommentComponent,
      EmojiDialog,
    }
  })
  export default class CommentEditorComponent extends Vue {

    private form = {
      author: "",
      content: "",
      createdAt: new Date(),
    }

    private showPreview = false;

    private formValidationEnabled = true;

    private emojiDialogVisible = false;

    get rules() {
      let rules = {};

      if (this.formValidationEnabled) {
        rules = {
          author: [
            { required: true, message: "Bitte gib einen Namen ein", trigger: "change" },
          ],
          content: [
            { required: true, message: "Bitte gib einen Text ein", trigger: "change" },
          ],
        };
      }

      return rules;
    };

    formIsEmpty(): boolean {
      return (this.form.author == null || this.form.author === "") && (this.form.content == null || this.form.content === "");
    }

    save() {
      // @ts-ignore
      this.$refs.form.validate((valid) => {
        if (valid) {
          let comment: Comment = {
            author: this.form.author,
            content: this.form.content,
          };

          this.$emit("save", comment);

          // temporarily disable form validation or it shows an error after save
          this.formValidationEnabled = false;

          this.form.author = "";
          this.form.content = "";

          setTimeout(() => {
            this.formValidationEnabled = true;
          }, 1000);
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

  .emoji-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    fill: #b1c6d0;

    &:hover {
      transform: scale(1.1);
    }
  }

</style>
