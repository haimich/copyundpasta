<template>

  <footer>
    <el-row>
      <img src="/images/appbase.svg" alt="Appbase" style="margin-bottom: 10px; width: 163px;">
    </el-row>

    <el-row>
      <el-col>
        © {{ getCopyrightYears() }} <nuxt-link to="/" title="HOME" style="color: white;">Copy & Pasta</nuxt-link>
        · <nuxt-link to="/impressum">Impressum</nuxt-link>
        · Datenschutz
        · <a href="/sitemap.xml" target="_blank">Sitemap</a>
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