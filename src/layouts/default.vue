<template>
  <div class="page-component__scroll el-scrollbar">

    <el-row>
      <el-col :offset="4" :span="16">
        <nuxt />
      </el-col>
    </el-row>

    <el-backtop target=".page-component__scroll"></el-backtop>
    
  </div>
</template>

<style>

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
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

  /* Element UI marker for button to go to top of page */
  .page-component__scroll {
      height: 100%;
  }

</style>
