<template>

  <div
    class="typeahead"
    :class="{'visible': isVisible}"
    v-show="isVisible"
  >

    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
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
        <div class="value">{{ item.value }}</div>
        <span class="link">{{ item.link }}</span>
      </template>
    </el-autocomplete>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class TypeaheadComponent extends Vue {

    @Prop()
    private isVisible: boolean;

    private links = [];
    private state = '';
    private timeout = null;

    loadAll() {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
    }

    querySearchAsync(queryString, cb) {
      let links = this.links;
      let results = queryString ? links.filter(this.createFilter(queryString)) : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    }

    createFilter(queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    }

    handleSelect(item) {
      console.log(item);
    }

    mounted() {
      this.links = this.loadAll();
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

</style>
