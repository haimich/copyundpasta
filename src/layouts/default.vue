<template>
  <div class="container">

    <nav>
      <el-row>
        <el-col
          :xl="xl"
          :lg="lg"
          :md="md"
          :sm="sm"
          :xs="xs"
        >
          <span class="header-social-icons hidden-xs-only">
            <ul>
              <li>
                <a href="https://www.pinterest.de/copyundpasta" target="_blank" title="Copy & Pasta bei Pinterest">
                  <font-awesome-icon :icon="['fab', 'pinterest-p']" />
                </a>
              </li>
              <li>
                <a href="https://www.google.de" target="_blank" title="Newsletter abonnieren">
                  <font-awesome-icon :icon="['far', 'envelope']" />
                </a>
              </li>
              <li>
                <a href="/feed/rss.xml" target="_blank" title="RSS-Feed abonnieren">
                  <font-awesome-icon :icon="['fas', 'rss']" />
                </a>
              </li>
            </ul>
          </span>

        </el-col>
      </el-row>

      <el-row>
        <el-col
          class="header-nav"
          :xl="xl"
          :lg="lg"
          :md="md"
          :sm="sm"
          :xs="xs"
          style="position: relative;"
        >
          <!-- Logo -->
          <nuxt-link to="/" title="HOME">
            <img class="logo" src="/images/logo.svg" alt="Logo" @click="menuItemChanged('home')">
          </nuxt-link>

          <!-- Menu -->
          <el-menu
            :default-active="activeIndex"
            :mode="menuMode"
            v-show="menuVisible"
            @select="menuItemChanged"
          >
            <el-menu-item index="home">
              <nuxt-link to="/">HOME</nuxt-link>
            </el-menu-item>

            <el-menu-item index="about">
              <nuxt-link to="/about">ÜBER MICH</nuxt-link>
            </el-menu-item>

            <el-menu-item index="kontakt">
              <nuxt-link to="/kontakt">KONTAKT</nuxt-link>
            </el-menu-item>

            <el-menu-item index="suche">
              <font-awesome-icon :icon="['fas', 'search']" style="font-size: 15px;" />
            </el-menu-item>
          </el-menu>

          <!-- Search box -->
          <TypeaheadComponent
            :isVisible="showSearch"
            @close="hideSearch()"
          />
        </el-col>
      </el-row>
    </nav>
    
    <main>
      <el-row>
        <el-col
          :xl="xl"
          :lg="lg"
          :md="md"
          :sm="sm"
          :xs="xs"
        >
          <!-- Main Container -->
          <nuxt />
        </el-col>
      </el-row>
    </main>

    <ArticleScrollToTopComponent />
    
    <footer>
      <el-row>
        <img src="/images/appbase.svg" alt="Appbase" style="margin-bottom: 10px; width: 163px;">
      </el-row>

      <el-row>
        <el-col>
          © 2019 <nuxt-link to="/" title="HOME" style="color: white;">Copy & Pasta</nuxt-link>
          · Impressum
          · Datenschutz
          · <a href="/sitemap.xml" target="_blank">Sitemap</a>
        </el-col>
      </el-row>
    </footer>
    
  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import TypeaheadComponent from "../components/TypeaheadComponent.vue";

  enum Pages {
    HOME = "home",
    REZEPTE = "rezepte",
    ABOUT = "about",
    KONTAKT = "kontakt",
    SUCHE = "suche",
  }

  @Component({
    components: {
      TypeaheadComponent,
    }
  })
  export default class DefaultLayoutComponent extends Vue {

    private activeIndex = Pages.HOME;

    private showSearch = false;

    private xl = {
      span: 20,
      offset: 2,
    };

    private lg = {
      span: 22,
      offset: 1,
    };

    private md = {
      span: 24,
      offset: 0,
    };

    private sm = {
      span: 24,
      offset: 0,
    };

    private xs = {
      span: 24,
      offset: 0,
    };

    private menuVisible = false;

    private menuMode = "horizontal";

    @Watch("$route.path")
    routeChanged() {
      //select correct menu item
      switch (this.$route.path) {
        case "/": {
          this.activeIndex = Pages.HOME;
          break;
        }

        case "/rezepte": {
          this.activeIndex = Pages.REZEPTE;
          break;
        }

        case "/about": {
          this.activeIndex = Pages.ABOUT;
          break;
        }

        case "/kontakt": {
          this.activeIndex = Pages.KONTAKT;
          break;
        }
      }
    }

    menuItemChanged(key: Pages) {
      if (this.activeIndex === Pages.SUCHE && key === Pages.SUCHE) {
        this.toggleSearch();
        return;
      }

      this.activeIndex = key;
      let routeToNavigate = "";

      if (key === Pages.SUCHE) {
        this.openSearch()
      } else {
        this.showSearch = false;

        if (key === Pages.HOME) {
          routeToNavigate = "/";
        } else {
          // make sure we navigate to the page even when the use clicked besides the nuxt link
          routeToNavigate = "/" + key;
        }
      }

      if (routeToNavigate !== this.$router.currentRoute.path) {
        // only navigate if not already on the page
        this.$router.push(routeToNavigate);
      }
    }

    hideSearch() {
      this.showSearch = false;
    }

    toggleSearch() {
      this.showSearch = ! this.showSearch;
    }

    openSearch() {
      this.showSearch = true;
    }
  
    toggleMenu() {
      this.menuVisible = ! this.menuVisible;
    }

    determineMenuMode() {
      let currentWidth = window.innerWidth || document.body.clientWidth;

      this.menuMode = currentWidth < 768 ? "vertical" : "horizontal";

      if (this.menuMode === "horizontal") {
        this.menuVisible = true;
      } else {
        this.menuVisible = false;
      }
    }

    mounted() {
      this.determineMenuMode();

      window.onresize = this.determineMenuMode;
    }

    created() {
      this.routeChanged();
    }

  }

</script>

<style lang="scss">

  @import "~/scss/base.scss";

  @font-face {
      font-family: 'Happy Fox';
      src: url('/fonts/HappyFox-Condensed.eot');
      src: url('/fonts/HappyFox-Condensed.eot?#iefix') format('embedded-opentype'),
           url('/fonts/HappyFox-Condensed.woff2') format('woff2'),
           url('/fonts/HappyFox-Condensed.woff') format('woff'),
           url('/fonts/HappyFox-Condensed.ttf') format('truetype'),
           url('/fonts/HappyFox-Condensed.svg#HappyFox-Condensed') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  .header-social-icons {
    display: flex;
    justify-content: flex-end;
    padding-top: 9px;

    a, a:visited {
      color: rgb(107, 107, 107);
      transition: color .2s ease;
    }

    a:hover {
      color: $color-primary;
    }
    
    ul {
      list-style: none;
      
      li {
        padding: 0 2px;
        display: inline-block;
      }

      li:last-child {
        padding-right: 0;
      }
    }
  }

  .hamburger-icon {
    display: flex;
    justify-content: flex-end;
    padding-top: 9px;
  }

  .header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo {
      width: 275px;
      margin-top: 8px;
      margin-bottom: 26px;
    }

    @media all and (min-width: $breakpoint-xs) {
      .el-menu {
        display: flex;
        justify-content: center;
        width: 72%;
        border-top: solid 1px #e6e6e6;

        .el-menu-item {
          font-size: 14.5px;
          margin: 0 1.5rem 0 1.2rem;
          height: 55px;
          line-height: 55px;
        }
      }
    }

    @media all and (max-width: $breakpoint-xs - 1) {
      .el-menu {
        width: 100%;
        border: none;
        text-align: center;
      }
    }
  }

  main {
    min-height: 600px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  footer {
    padding: 34px 0;
    background-color: #363838;
    color: #ececec;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
  }

  .curly-divider {
    width: 100%;
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .curly-divider::before {
    width: 100%;
    height: 9px;
    background-image: url(/images/divider/curly.png);
    background-position: center center;
    background-repeat: repeat;
    position: absolute;
    top: 4px;
    left: 0;
    z-index: 1;
    content: '';
  }

  .curly-divider span {
    position: relative;
    z-index: 5;
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0;
    line-height: 1;
    color: #212121;
    background-color: #ffffff;
    padding: 0 14px;
    display: inline-block;
  }

  .curly-line {
    height: 6px;
    background: url(/images/divider/curly-small.png) repeat-x 0 0;
    border: 0;
  }

</style>
