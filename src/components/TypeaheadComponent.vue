<template>

  <div
    class="typeahead"
    :class="{'visible': isVisible}"
    v-show="isVisible"
  >

    <el-autocomplete
      v-model="searchterm"
      :fetch-suggestions="searchArticles"
      :trigger-on-focus="false"
      placeholder="Suche"
      autofocus
      ref="autocomplete"
      @select="handleSelect"
    >
      <el-button
        slot="suffix"
        style="font-size: 20px; color: #adb5bd;"
        type="text"
        @click="$emit('close')"
      >
        <font-awesome-icon
          :icon="['fas', 'times-circle']"
        />
      </el-button>

      <template slot-scope="{ item }">
        <div class="match-title">{{ item._source.title }}</div>
        <div class="match-description">{{ item._source.shortDescription }}</div>
      </template>
    </el-autocomplete>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import SearchService from "../services/SearchService";
  import { setTimeout } from "timers";

  @Component
  export default class TypeaheadComponent extends Vue {

    @Prop()
    private isVisible: boolean;

    private timeout = null;

    private searchterm = "";

    @Watch("isVisible")
    isVisibleChanged() {
      let body = document.querySelector("body");

      if (this.isVisible) {
        body.classList.add("overlay");

        setTimeout(() => {
          let input = document.querySelector(".typeahead input") as HTMLElement
          input.focus();

          input.onkeydown = (event) => {
            if (event.keyCode === 27) {
                this.$emit("close");
            }
          }

          // we need to wait a bit, otherwise bodyClicked() doesn't work
          body.addEventListener("click", this.bodyClicked)
        }, 100);
      } else {
        body.classList.remove("overlay");

        body.removeEventListener("click", this.bodyClicked);

        //sometimes the suggestions stay visible after a search
        let suggestBox = document.querySelector(".typeahead .el-autocomplete-suggestion");
        
        if (suggestBox != null) {
          suggestBox.remove();
        }
      }
    }

    bodyClicked(event) {
      if (! this.isVisible) {
        return;
      }

      let targetElement = event.target || event.srcElement;
      
      if (targetElement.tagName === "INPUT") {
        return;
      } else {
        this.$emit("close");
      }
    }

    async searchArticles(searchterm: string, cb) {
      if (searchterm == null || searchterm === "") {
        return;
      }

      try {
        let res = await SearchService.searchArticles(this.$axios, searchterm);
        
        cb(res.data);
      } catch (error) {
        cb(null);
      }
    }

    handleSelect(item) {
      this.$router.push({
        path: "/" + item._id
      });

      this.$emit("close");
    }

  }

</script>

<style lang="scss">

</style>

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

  .typeahead {
    position: absolute;
    opacity: 0;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3000;
    width: 72%;
    height: 55px;
    transition: all .1s ease 0s;

    &.visible {
      bottom: -55px;
      opacity: 1;
    }

    & /deep/ > div, & /deep/ .el-input, , & /deep/ input {
      width: 100%;
      height: 100%;
      font-size: 18px;
    }

    & /deep/ input {
      padding-right: 43px;
      border-width: 1.5px;

      &:focus {
        outline: none;
        border-color: #9ecaed;
        box-shadow: 0 0 2px #9ecaed;
      }
    }

    & /deep/ button {
      padding: 17px 9px;

      & svg:hover {
        color: #f56c6c;
      }
    }
  }

  .match-title {
    font-weight: bold;
  }

  .match-description {
    font-size: 12px;
    margin-top: -11px;
  }

</style>
