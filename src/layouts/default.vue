<template>
  <div class="container page-component__scroll el-scrollbar">

    <nav>
      <el-row>
        <el-col class="header-nav" :span="22" :offset="1">

          <!-- Logo -->
          <img src="@/assets/images/logo.png" style="width: 256px;" alt="Logo" />

          <!-- Menu -->
          <el-menu
            default-active="home"
            mode="horizontal"
          >
            <el-menu-item index="home">
              HOME
            </el-menu-item>

            <el-menu-item index="recipes">
              <nuxt-link to="/rezepte">REZEPTE</nuxt-link>
            </el-menu-item>

            <el-menu-item index="about">
              <nuxt-link to="/about">ÜBER MICH</nuxt-link>
            </el-menu-item>

            <el-menu-item index="contact">
              <nuxt-link to="/kontakt">KONTAKT</nuxt-link>
            </el-menu-item>

            <el-menu-item index="search" @click="openSearch()">
              <i class="el-icon-search" role="button"></i>
            </el-menu-item>
          </el-menu>

        </el-col>
      </el-row>
    </nav>
    
    <main>
      <nuxt />
    </main>
    
    <footer>
      Footer
    </footer>

    <el-backtop target=".page-component__scroll"></el-backtop>
    
  </div>
</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class DefaultLayoutComponent extends Vue {

    openSearch() {
      console.log("Search");
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

    a {
      text-decoration: none;
    }
  }

  footer {
    background-color: #B3C0D1;
  }
  
  /* Element UI marker for button to go to top of page */
  .page-component__scroll {
    height: 100%;
  }

</style>
