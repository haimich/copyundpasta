<template>

  <el-dialog
    title=""
    :visible="visible"
    @close="close" 
    width="30%"
  >

    <div class="wrapper">
      <textarea class="regular-input" v-model="input"></textarea>

      <emoji-picker @emoji="append" :search="search">
        <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
          <div class="emoji-picker" :style="{ top: display.y + 'px', left: display.x + 'px' }">
            <div class="emoji-picker__search">
              <input type="text" v-model="search" v-focus>
            </div>
            <div>
              <div v-for="(emojiGroup, category) in emojis" :key="category">
                <h5 style="margin-top: 10px; margin-bottom: 8px;">
                  {{ translate(category) }}
                </h5>

                <div class="emojis">
                  <span
                    v-for="(emoji, emojiName) in emojiGroup"
                    :key="emojiName"
                    @click="insert(emoji)"
                    :title="emojiName"
                  >{{ emoji }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </emoji-picker>
    </div>

  </el-dialog>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import EmojiPicker from "vue-emoji-picker";

  @Component({
    components: {
      EmojiPicker,
    }
  })
  export default class EmojiDialog extends Vue {

    @Prop()
    visible: boolean;

    private input = "";
    
    private search = "";

    append(emoji) {
      this.input += emoji;
    }

    translate(category: string) {
      console.log(category);
      if (category.toLowerCase() === "frequently used") {
        return "Häufig verwendet";
      } else if (category.toLowerCase() === "people") {
        return "Menschen";
      } else if (category.toLowerCase() === "nature") {
        return "Natur";
      } else if (category.toLowerCase() === "objects") {
        return "Objekte";
      } else if (category.toLowerCase() === "places") {
        return "Orte";
      } else if (category.toLowerCase() === "symbols") {
        return "Symbole";
      } else {
        return category;
      }
    }

    close() {
      this.$emit("close");
    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .wrapper {
    position: relative;
    display: inline-block;
  }

  .regular-input {
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    width: 20rem;
    height: 12rem;
  }

  .emoji-invoker {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
  }
  .emoji-invoker:hover {
    transform: scale(1.1);
  }
  .emoji-invoker > svg {
    fill: #b1c6d0;
  }

  .emoji-picker {
    z-index: 1;
    font-family: Montserrat;
    border: 1px solid #ccc;
    width: 15rem;
    height: 20rem;
    overflow: scroll;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 1px 1px 8px #c7dbe6;
  }

  .emoji-picker__search {
    display: flex;
  }

  .emoji-picker__search > input {
    flex: 1;
    border-radius: 10rem;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    outline: none;
  }

  .emoji-picker h5 {
    margin-bottom: 0;
    color: #b1b1b1;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: default;
  }

  .emoji-picker .emojis {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .emoji-picker .emojis:after {
    content: "";
    flex: auto;
  }

  .emoji-picker .emojis span {
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 5px;
  }

  .emoji-picker .emojis span:hover {
    background: #ececec;
    cursor: pointer;
  }

</style>
