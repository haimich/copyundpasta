<template>

  <footer>

    <el-row class="footer-newsletter" v-if="showNewsletterForm()">
      <el-row>
        <h3 class="footer-newsletter-heading">
          Lass dir neue Rezepte bequem per E-Mail zuschicken
        </h3>
      </el-row>

      <el-row style="display: flex; justify-content: center;">
        <NewsletterComponent
          :wideButton="true"
          class="footer-newsletter-component"
        />
      </el-row>
    </el-row>

    <el-row style="padding-top: 30px; margin-bottom: 30px; text-align: center;">
      <el-col>
        <a href="https://appbase.io/" target="_blank" rel="noopener">
          <img src="/images/appbase.svg" alt="Appbase Search Technology" style="width: 163px;">
        </a>
      </el-col>
    </el-row>

    <el-row class="link-row">
      <el-col :xs="24" :sm="24" :md="6" :lg="6" class="link-row-copyright">
        <span style="margin-right: 5px;">
          © {{ getCopyrightYears() }}
        </span>

        <nuxt-link to="/" title="HOME">
          Copy & Pasta
        </nuxt-link>

        <img
          src="/favicon-32x32.png"
          class="mouse-icon"
          alt="Maus-Icon"
        >
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" style="text-align: center;">
        <nuxt-link to="/impressum">Impressum</nuxt-link> ·

        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
        
        <span class="hidden-md-and-down">
          ·&nbsp;<nuxt-link to="/bildnachweise">Bildnachweise</nuxt-link>
        </span>

        <span class="hidden-sm-and-down">
          ·&nbsp;<a href="/sitemap.xml" target="_blank">Sitemap</a>
        </span>
      </el-col>

      <el-col :span="6" class="hidden-sm-and-down" style="display: flex; justify-content: flex-end;">
        <a href="mailto:hello@copyundpasta.de" title="Schreib mir eine Mail!">
          <FontAwesome :icon="['far', 'envelope']" style="margin-right: 1px; font-size: 17px;" />
          hello@copyundpasta.de
        </a>
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
    font-size: 17.5px;
    font-weight: 300;

    .mouse-icon {
      width: 24px;
      transition: all .1s ease-in;

      &:hover {
        transform: rotate(-15deg);
      }
    }

    .link-row {
      padding-left: 10px;
      padding-right: 20px;
    }

    .link-row-copyright {
      display: flex;
      align-items: center;
    }

    a {
      color: #ececec;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media all and (max-width: $breakpoint-md) {
    footer {
      .link-row {
        display: flex;
        flex-direction: column-reverse; // switch Copyright and imprint links
      }

      .link-row-copyright {
        justify-content: center;
        margin-top: 23px;
      }
    }
  }

  .footer-newsletter {
    background-image: url("/images/food-background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 92px 0;
    text-align: center;

    .footer-newsletter-heading {
      color: white;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
      text-shadow: 1px 1px 4px #8c8c8c;
    }
  }

  footer {
    .footer-newsletter-component {
      width: 25%;
    }

    @media all and (max-width: $breakpoint-lg) {
      .footer-newsletter-component {
        width: 35%;
      }
    }

    @media all and (max-width: $breakpoint-md) {
      .footer-newsletter-component {
        width: 50%;
      }
    }

    @media all and (max-width: $breakpoint-xs) {
      .footer-newsletter-component {
        width: 70%;
      }
    }

    @media all and (max-width: 420px) {
      .footer-newsletter-component {
        width: 90%;
      }
    }
  }


</style>