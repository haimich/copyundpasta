<template>
  <div class="container page-component__scroll el-scrollbar">

    <nav>
      <el-row>
        <el-col class="header-nav" :span="22" :offset="1">

          <!-- Logo -->
          <nuxt-link to="/" title="HOME" @click="activeIndex='home'">
            <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
          </nuxt-link>

          <!-- Menu -->
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="menuItemChanged"
          >
            <el-menu-item index="home">
              <nuxt-link to="/">HOME</nuxt-link>
            </el-menu-item>

            <el-menu-item index="rezepte">
              <nuxt-link to="/rezepte">REZEPTE</nuxt-link>
            </el-menu-item>

            <el-menu-item index="about">
              <nuxt-link to="/about">ÜBER MICH</nuxt-link>
            </el-menu-item>

            <el-menu-item index="kontakt">
              <nuxt-link to="/kontakt">KONTAKT</nuxt-link>
            </el-menu-item>

            <el-menu-item index="suche">
              <i class="el-icon-search" role="button"></i>
            </el-menu-item>
          </el-menu>

        </el-col>
      </el-row>
    </nav>
    
    <main>
      <el-row>
        <el-col :span="22" :offset="1">
          <nuxt />
        </el-col>
      </el-row>
    </main>
    
    <footer>
      Footer
    </footer>

    <el-backtop target=".page-component__scroll"></el-backtop>
    
  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  enum Pages {
    HOME = "home",
    REZEPTE = "rezepte",
    ABOUT = "about",
    KONTAKT = "kontakt",
  }

  @Component
  export default class DefaultLayoutComponent extends Vue {

    private activeIndex = Pages.HOME;

    menuItemChanged(key) {
      this.activeIndex = key;
      let routeToNavigate = "";

      if (key === "suche") {
        this.openSearch()
      } else if (key === Pages.HOME) {
        routeToNavigate = "/";
      } else {
        // make sure we navigate to the page even when the use clicked besides the nuxt link
        routeToNavigate = "/" + key;
      }

      if (routeToNavigate !== this.$router.currentRoute.path) {
        // only navigate if not already on the page
        this.$router.push(routeToNavigate);
      }
    }

    openSearch() {
      console.log("Search");
    }

    created() {
      // preselect correct menu item
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

  }

</script>

<style lang="scss">

  html {
    font-family: "Merriweather Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    background-color: #ffffff;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo {
      width: 256px;
      margin-top: 20px;
    }

    .el-menu-item {
      height: 53px;
    }

    a {
      text-decoration: none;
    }
  }

  main {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  footer {
    background-color: #B3C0D1;
  }
  
  /* Element UI marker for button to go to top of page */
  .page-component__scroll {
    height: 100%;
  }

</style>
