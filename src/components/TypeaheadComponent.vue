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
      @select="handleSelect"
    >
      <el-button
        slot="append"
        icon="el-icon-close"
        style="font-size: 18px;"
        @click="$emit('close')"
      ></el-button>

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

  @Component
  export default class TypeaheadComponent extends Vue {

    @Prop()
    private isVisible: boolean;

    private timeout = null;

    private searchterm = "";

    async searchArticles(searchterm: string, cb) {
      if (searchterm == null || searchterm === "") {
        return 
      }

      try {
        let res = await SearchService.searchArticles(this.$axios, searchterm);
        
        cb(res.data);
      } catch (error) {
        return [];
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
    z-index: 10;
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
  }

  .match-title {
    font-weight: bold;
  }

  .match-description {
    font-size: 12px;
    margin-top: -11px;
  }

</style>
