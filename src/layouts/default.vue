<template>
  <div class="container">

    <nav>
      <el-row>
        <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
          <span class="header-social-icons hidden-xs-only">
            <ul>
              <li>
                <el-tooltip content="Copy & Pasta bei Pinterest" placement="bottom">
                  <a href="https://www.pinterest.de/copyundpasta" target="_blank" rel="noopener">
                    <FontAwesome :icon="['fab', 'pinterest-p']" />
                  </a>
                </el-tooltip>
              </li>

              <li>
                <el-tooltip content="Schreib mir eine Mail :)" placement="bottom">
                  <a href="mailto:hello@copyundpasta.de" rel="noopener">
                    <FontAwesome :icon="['far', 'envelope']" />
                  </a>
                </el-tooltip>
              </li>

              <li>
                <el-tooltip content="RSS-Feed abonnieren" placement="bottom">
                  <a href="/feed/rss.xml" target="_blank" rel="noopener">
                    <FontAwesome :icon="['fas', 'rss']" />
                  </a>
                </el-tooltip>
              </li>
            </ul>
          </span>
          
          <span class="hamburger-icon hidden-sm-and-up">
            <HamburgerIconComponent
              :isMenuVisible="menuVisible"
              @toggle="toggleMenu()"
            />
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
        >
        
          <!-- Logo -->
          <nuxt-link to="/" title="HOME">
            <img class="logo" src="/images/logo.svg" alt="Logo" @click="determineMenuMode()">
          </nuxt-link>

          <!-- Menu -->
          <transition name="slide-fade">
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

              <el-menu-item index="blogroll">
                <nuxt-link to="/blogroll">BLOGROLL</nuxt-link>
              </el-menu-item>

              <el-menu-item index="home" class="hidden-sm-and-up">
                <a href="mailto:hello@copyundpasta.de" title="Schreib mir eine Mail!">
                  KONTAKT
                </a>
              </el-menu-item>
              
              <el-menu-item index="suche">
                <div class="menu-item-search hidden-sm-and-up">
                  SUCHE
                </div>

                <el-tooltip content="Copy & Pasta durchsuchen" placement="bottom">
                  <FontAwesome
                    :icon="['fas', 'search']"
                    class="hidden-xs-only"
                    style="font-size: 15px;"
                  />
                </el-tooltip>
              </el-menu-item>
            </el-menu>
          </transition>

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
        <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
          <!-- Main Container -->
          <nuxt />
        </el-col>
      </el-row>
    </main>

    <ScrollToTopComponent />
    
    <FooterComponent />
    
  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import TypeaheadComponent from "../components/TypeaheadComponent.vue";
  import HamburgerIconComponent from "../components/HamburgerIconComponent.vue";
  import FooterComponent from "../components/FooterComponent.vue";
  import ScrollToTopComponent from "@/components/ScrollToTopComponent.vue";

  enum Pages {
    HOME = "home",
    REZEPTE = "rezepte",
    ABOUT = "about",
    BLOGROLL = "blogroll",
    SUCHE = "suche",
    OTHER = "other",
  }

  @Component({
    components: {
      TypeaheadComponent,
      HamburgerIconComponent,
      FooterComponent,
      ScrollToTopComponent,
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

    private previousWindowWidth = null;

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

        case "/blogroll": {
          this.activeIndex = Pages.BLOGROLL;
          break;
        }

        default: this.activeIndex = Pages.OTHER;
      }
    }

    menuItemChanged(key: Pages) {
      if (this.menuMode === "vertical") {
        this.menuVisible = false;
      }

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

      if (this.previousWindowWidth !== null && this.previousWindowWidth === currentWidth) {
        // nothing changed
        return;
      } else {
        this.previousWindowWidth = currentWidth;
      }

      this.menuMode = currentWidth < 794 ? "vertical" : "horizontal"; // this should be 768 but I had to correct it manually to work

      if (this.menuMode === "horizontal") {
        this.menuVisible = true;
      } else {
        this.menuVisible = false;
      }
    }

    initCookieConsent() {
      // @ts-ignore
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#edeff5",
            "text": "#838391"
          },
          "button": {
            "background": "#1eb5da",
            "text": "#ffffff"
          }
        },
        "theme": "classic",
        "position": "bottom-right",
        "content": {
          "message": "Wir verwenden Cookies, um unsere Webseite möglichst benutzerfreundlich zu gestalten. Wenn Sie fortfahren, stimmen Sie der Verwendung von Cookies zu.",
          "dismiss": "Schließen",
          "link": "Weitere Informationen",
          "href": "https://www.copyundpasta.de/datenschutz"
        }
      });
    }

    mounted() {
      if (process.client) {
        this.initCookieConsent();
        this.determineMenuMode();
        
        // watch for resolution changes
        window.onresize = this.determineMenuMode;
      }
    }

    created() {
      this.routeChanged();
    }

  }

</script>

<style lang="scss">

  @import "~/scss/base.scss";

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

  @media all and (max-width: $breakpoint-lg) {
    .header-social-icons {
      padding-top: 0;
      margin-right: 10px;
    }
  }

  @media all and (max-width: $breakpoint-md) {
    .header-social-icons {
      padding-top: 0;
      margin-right: 10px;
    }
  }

  .hamburger-icon {
    display: flex;
    justify-content: flex-end;
    padding: 20px 25px;
  }

  .header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .logo {
      width: 280px;
      margin-top: -26px;
      margin-bottom: 34px;
    }

    @media all and (max-width: $breakpoint-lg) {
      .logo {
        width: 260px;
      }
    }

    @media all and (max-width: $breakpoint-md) {
      .logo {
        width: 260px;
      }
    }

    @media all and (max-width: $breakpoint-xs) {
      .logo {
        width: 225px;
        margin-bottom: 10px;
      }
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

      .menu-item-search {
        color: $color-primary;
      }
    }
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  main {
    min-height: 600px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media all and (max-width: $breakpoint-xs) {
    main {
      margin-top: 10px;
    }
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