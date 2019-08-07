<template>

  <footer>

    <el-row class="footer-newsletter" v-if="showNewsletterForm()">
      <el-row>
        <h3 class="footer-newsletter-heading">
          Lass dir neue Rezepte bequem per E-Mail zuschicken.
        </h3>
      </el-row>

      <el-row style="display: flex; justify-content: center;">
        <NewsletterComponent
          :wideButton="true"
          style="width: 20%;"
        />
      </el-row>
    </el-row>

    <el-row style="padding-top: 30px; margin-bottom: 30px; text-align: center;">
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

        <img src="/favicon-32x32.png" style="width: 24px;"> 
      </el-col>

      <el-col :span="12" style="text-align: center;">
        <nuxt-link to="/impressum">Impressum</nuxt-link> ·

        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link> ·
   
        <nuxt-link to="/bildnachweise">Bildnachweise</nuxt-link> ·
        
        <a href="/sitemap.xml" target="_blank">Sitemap</a>
      </el-col>

      <el-col :span="6">
      </el-col>
    </el-row>
  </footer>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import NewsletterComponent from "@/components/NewsletterComponent.vue";

  @Component({
    components: {
      NewsletterComponent,
    }
  })
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

    showNewsletterForm() {
      return this.$route.path !== "/";
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
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer-newsletter {
    background-image: url("/images/food-background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 0;
    text-align: center;

    .footer-newsletter-heading {
      color: white;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }

</style>