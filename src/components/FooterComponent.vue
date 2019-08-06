<template>

  <footer>
    <el-row style="margin-bottom: 15px; text-align: center;">
      <el-col style="padding-left: 10px;">
        <img src="/images/appbase.svg" alt="Appbase" style="margin-bottom: 10px; width: 163px;">
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" style="padding-left: 10px; display: flex; align-items: center;">
        <span style="margin-right: 5px;">
          © {{ getCopyrightYears() }}
        </span>

        <nuxt-link to="/" title="HOME">Copy & Pasta</nuxt-link>

        <img src="/favicon-32x32.png" style="width: 24px;"> 
      </el-col>

      <el-col :span="12" style="text-align: center;">
        <nuxt-link to="/impressum">Impressum</nuxt-link> ·
        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link> ·
        <a href="/sitemap.xml" target="_blank">Sitemap</a>
      </el-col>

      <el-col :span="6">
      </el-col>
    </el-row>
  </footer>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class FooterComponent extends Vue {

    getCopyrightYears() {
      let foundingYear = 2019;
      let currentYear = new Date().getFullYear();

      if (foundingYear === currentYear) {
        return foundingYear;
      } else {
        return `${foundingYear} - ${currentYear}`;
      }
    }

  }

</script>

<style lang="scss" scoped>

  footer {
    padding: 34px 0;
    background-color: #363838;
    color: #ececec;
    font-size: 18px;
    font-weight: 300;

    a {
      color: #ececec;
    }
  }

</style>