<template>

  <footer>

    <el-row class="footer-newsletter">
      <el-col>
        asdas
      </el-col>
    </el-row>

    <el-row style="margin-top: 30px; margin-bottom: 30px; text-align: center;">
      <el-col>
        <a href="https://appbase.io/" target="_blank">
          <img src="/images/appbase.svg" alt="Appbase" style="width: 163px;">
        </a>
      </el-col>
    </el-row>

    <el-row class="link-row">
      <el-col :span="6" style="display: flex; align-items: center;">
        <span style="margin-right: 5px;">
          © {{ getCopyrightYears() }}
        </span>

        <nuxt-link to="/" title="HOME">Copy & Pasta</nuxt-link>

        <nuxt-link to="/" title="HOME">
          <img src="/favicon-32x32.png" style="width: 24px;"> 
        </nuxt-link>
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

  @import "~/scss/variables.scss";

  footer {
    padding: 0 0 34px 0;
    background-color: #363838;
    color: #ececec;
    font-size: 18px;
    font-weight: 300;

    .link-row {
      padding-left: 10px;
      padding-right: 10px;
    }

    a {
      color: #ececec;
    }
  }

  .footer-newsletter {
    background-color: $color-primary;
  }

</style>