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
          :size="elementSize"
          ref="form"
          v-show="! showPreview"
        >
          <el-row class="name-row">
            <el-col
              :lg="12"
              :md="10"
              :sm="24"
              :xs="24"
            >
              <el-row>
                <el-form-item prop="author">
                  <el-input
                    v-model="form.author"
                    placeholder="Name"
                  ></el-input>
                </el-form-item>
              </el-row>

              <el-row>
                <el-form-item prop="website">
                  <el-input
                    v-model="form.website"
                    type="url"
                    placeholder="Webseite (optional)"
                  ></el-input>
                </el-form-item>
              </el-row>
            </el-col>

            <el-col
              :lg="12"
              :md="14"
              :sm="24"
              :xs="24"
              class="recaptcha-container"
            >
              <vue-recaptcha
                :sitekey="recaptchaKey"
                @verify="recaptchaVerified"
                ref="recaptcha"
              ></vue-recaptcha>
            </el-col>
          </el-row>

          <el-row>
            <el-form-item prop="content">
              <el-input
                type="textarea"
                v-model="form.content"
                prop="content"
                :rows="textareaRows"
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

    <el-row>
      <el-col
        :xl="xlAgb"
        :lg="lgAgb"
        :md="mdAgb"
        :sm="smAgb"
        :xs="xsAgb"
        class="agb-text"
      >
        Mit der Abgabe deines Kommentars erklärst du dich mit der Speicherung und Verarbeitung deiner Daten durch diese Website einverstanden.

        <el-popover
          placement="bottom"
          width="400"
          style="cursor: pointer"
          trigger="click"
        >
          <div slot="default">
            Dein Name und die Webseite werden lediglich zur Anzeige bei deinem Kommentar gespeichert und auf deinen Wunsch hin gelöscht.<br />
            Eine ausführliche Erläuterungen zur Speicherung und Verarbeitung von personenbezogenen Daten kannst du in den <a href="/datenschutz">Datenschutzbestimmungen</a> nachlesen.
          </div>

          <FontAwesome
            slot="reference"
            :icon="['far', 'question-circle']"
          ></FontAwesome>
        </el-popover>
      </el-col>

      <el-col 
        :xl="xlButtons"
        :lg="lgButtons"
        :md="mdButtons"
        :sm="smButtons"
        :xs="xsButtons"
        style="display: flex; justify-content: flex-end;"
      >
        <el-button
          @click="showPreview = ! showPreview"
          :size="elementSize"
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
          :size="elementSize"
          @click="save"
        >
          Abschicken
        </el-button>
      </el-col>
    </el-row>

    <EmojiDialog
      :visible="emojiDialogVisible"
      @selectEmoji="insertEmoji"
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
  import VueRecaptcha from "vue-recaptcha";

  @Component({
    components: {
      CommentAvatarComponent,
      SingleCommentComponent,
      EmojiDialog,
      VueRecaptcha,
    }
  })
  export default class CommentEditorComponent extends Vue {

    @Prop()
    size: "small" | "large";

    private recaptchaKey = "6LfEoa0UAAAAAKePA_8uLzgBTI9LIoJKebCQFDOZ";

    private recaptchaChallenge = "";

    private form = {
      author: "",
      website: "",
      content: "",
      createdAt: new Date(), // only used for preview
    }

    private showPreview = false;

    private formValidationEnabled = true;

    private emojiDialogVisible = false;

    private xlAgb = {
      span: 12,
      offset: 3,
    };

    private lgAgb = {
      span: 12,
      offset: 3,
    };

    private mdAgb = {
      span: 21,
      offset: 3,
    };

    private smAgb = {
      span: 21,
      offset: 3,
    };

    private xsAgb = {
      span: 21,
      offset: 3,
    };

    private xlButtons = {
      span: 9,
      offset: 0,
    };

    private lgButtons = {
      span: 9,
      offset: 0,
    };

    private mdButtons = {
      span: 21,
      offset: 3,
    };

    private smButtons = {
      span: 21,
      offset: 3,
    };

    private xsButtons = {
      span: 21,
      offset: 3,
    };

    get elementSize() {
      if (this.size === "small") {
        return "medium";
      } else {
        return "";
      }
    }

    get textareaRows() {
      if (this.size === "small") {
        return 4;
      } else {
        return 5;
      }
    }

    get rules() {
      let rules = {};

      if (this.formValidationEnabled) {
        rules = {
          author: [
            { required: true, message: "Bitte gib einen Namen ein", trigger: "change" },
          ],
          website: [
            { validator: this.validateUrl, trigger: "blur" },
          ],
          content: [
            { required: true, message: "Bitte gib einen Text ein", trigger: "change" },
          ],
        };
      }

      return rules;
    };

    validateUrl(rule, value, callback) {
      let re = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

      if (value == null || value === "") {
        // the field is not required
        callback();
      } else if (re.test(value)) {
        callback();
      } else {
        callback(new Error("Bitte gib eine gültige Webseite ein."));
      }
    }

    formIsEmpty(): boolean {
      return (this.form.author == null || this.form.author === "") && (this.form.content == null || this.form.content === "");
    }

    recaptchaVerified(challenge: string) {
      this.recaptchaChallenge = challenge;
    }

    save() {
      // @ts-ignore
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.recaptchaChallenge == null || this.recaptchaChallenge === "") {
            this.$notify({
              title: "",
              message: "Bitte wähle die reCAPTCHA-Checkbox aus",
              type: "warning"
            });

            return;
          }

          let comment: Comment = {
            author: this.form.author,
            website: this.form.website,
            content: this.form.content,
          };

          this.$emit("save", {
            comment,
            recaptchaChallenge: this.recaptchaChallenge
          });

          // temporarily disable form validation or it shows an error after save
          this.formValidationEnabled = false;

          this.form.author = "";
          this.form.website = "";
          this.form.content = "";

          // reset captcha
          this.recaptchaChallenge = "";
          
          if (this.$refs.recaptcha != null) {
            // @ts-ignore
            this.$refs.recaptcha.reset();
          }

          setTimeout(() => {
            this.formValidationEnabled = true;
          }, 1000);
        }
      });
    }

    insertEmoji(emoji: string) {
      this.form.content += emoji;
    }

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .recaptcha-container {
    display: flex;
    justify-content: center;
    margin-bottom: 17px;
  }

  @media all and (min-width: $breakpoint-md) {
    .recaptcha-container {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media all and (min-width: $breakpoint-lg) {
    .name-row {
      display: flex;
      align-items: center;
    }
  }

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

  .agb-text {
    color: #5d5d5d;
    font-size: 14px;
    line-height: 17px;
  }

</style>
