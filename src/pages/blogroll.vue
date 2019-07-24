<template>

  <div>

    <MainHeadingComponent
      text="Blogroll"
      subtitle="Meine liebsten Foodblogs :)"
    />

    <el-row style="margin-top: 40px;">
      <el-col :span="12" :offset="6">
        <ul class="link-list">
          <li
            v-for="(blog, index) in blogroll"
            :key="index"
            @click="openLink(blog.url)"
            title="Link öffnen"
          >
            <a :href="blog.url" rel="noopener" target="_blank">
              {{ blog.name }}
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class extends Vue {

    private blogroll = [
      {
        name: "Schöner Tag Noch",
        url: "https://schoenertagnoch.de/",
      },
      {
        name: "Schlaraffenwelt",
        url: "https://schlaraffenwelt.de/",
      },
      {
        name: "Eat this",
        url: "https://www.eat-this.org/",
      },
      {
        name: "Sallys Welt",
        url: "https://sallys-blog.de/",
      },
      {
        name: "Plötzblog",
        url: "https://www.ploetzblog.de/",
      },
      {
        name: "Arthurs Tochter Kocht",
        url: "https://www.arthurstochterkochtblog.com/",
      },
      {
        name: "Die Frau am Grill",
        url: "https://die-frau-am-grill.de/",
      },
      {
        name: "Sizzle Brothers",
        url: "https://sizzlebrothers.de/",
      },
      {
        name: "Petit Appetit",
        url: "https://www.petitappetit.de",
      },
    ];

    openLink(url) {
      window.open(url, "_blank");
    }

  }

</script>

<style lang="scss" scoped>

  @import "~/scss/base.scss";

  .link-list {
    list-style: none;
    padding: 0;

    li {
      border-left: 10px solid $color-primary;
      padding: 20px 42px;
      color: #121212;
      background-color: #f5f5f5;
      margin-bottom: 20px;
      transition: all .2s;
      cursor: pointer;

      &:hover {
        font-size: 19px;
      }
    }
  }

</style>
