<template>

  <el-dialog
    title=""
    :visible="visible"
    @close="close" 
    width="30%"
    class="emoji-dialog"
  >
    <ul
      v-for="(emojis, category) in emojiList"
      :key="category"
      class="emojiCategories"
    >
      <li>
        <h4>{{ category }}</h4>

        <ul
          v-for="(icon, key) in emojis"
          :key="key"
          class="emojis"
        >
          <li
            @click="selectEmoji(icon)"
            style="cursor: pointer;"
            :title="key"
          >
            {{ icon }}
          </li>
        </ul>
      </li>
    </ul>
  </el-dialog>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import EmojiUtil from "@/utils/EmojiUtil";

  @Component
  export default class EmojiDialog extends Vue {

    @Prop()
    visible: boolean;

    get emojiList() {
      return EmojiUtil.getEmojisByCategory();
    }

    selectEmoji(emoji: string) {
      this.$emit("selectEmoji", emoji);
      this.$emit("close");
    }

    close() {
      this.$emit("close");
    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .emoji-dialog /deep/ .el-dialog__body {
    padding-top: 8px;
    max-height: 350px;
    overflow-x: scroll; 
  }

  .emojiCategories {
    list-style: none;
    padding-left: 0;

    h4 {
      margin-bottom: 8px;
      color: #b1b1b1;
      text-transform: uppercase;
    }

    > li {
      padding: 0;
      margin-bottom: 12px;
    }
  }

  .emojis {
    list-style: none;
    padding-left: 0;
    display: inline-block;

    li {
      padding: 0;
      display: inline-block;
      padding: 2.5px;
    }
  }

</style>
