<template>

  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <MainHeadingComponent
          text="Blogroll"
          subtitle="Hier findet ihr meine liebsten Foodblogs :)"
        />
        
        <ul class="link-list">
          <li
            v-for="(blog, index) in blogroll"
            :key="index"
            @click="openLink(blog.url)"
            title="Link öffnen"
          >
            <el-row :gutter="20">
              <el-col :span="8">
                <el-image
                  :src="blog.image"
                  :title="blog.name"
                  class="blog-image"
                ></el-image>
              </el-col>
              
              <el-col :span="16">
                <a
                  :href="blog.url"
                  style="font-size: 19px;"
                  rel="noopener"
                  target="_blank"
                >
                  {{ blog.name }}
                </a>

                <div style="margin-top: 8px; font-size: 15px;">
                  {{ blog.description }}
                </div>
              </el-col>
            </el-row>
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
        name: "Schöner Tag noch!",
        description: "Der Food-Blog aus Karlsruhe",
        image: "/images/blogroll/schoenertagnoch.jpg",
        url: "https://schoenertagnoch.de/",
      },
      {
        name: "Schlaraffenwelt",
        description: "Expedition Genuss - Ein Magazin für weltoffene Genießer",
        image: "/images/blogroll/schlaraffenwelt.jpg",
        url: "https://schlaraffenwelt.de/",
      },
      {
        name: "Eat this",
        description: "Foodblog | Gesunde, vegane Rezepte • Food Fotografie • Stories",
        image: "/images/blogroll/eatthis.jpg",
        url: "https://www.eat-this.org/",
      },
      {
        name: "Sallys Welt",
        description: "Über Sally muss man glaube ich nicht mehr viel sagen, da ihre Produkte mittlerweile sogar in vielen Supermärkten zu finden ist. Sie ist die mit Abstand erfolgreichste Foodbloggerin Deutcshlands.",
        image: "/images/blogroll/sallysblog.jpg",
        url: "https://sallys-blog.de/",
      },
      {
        name: "Plötzblog",
        description: "Selbst gutes Brot backen",
        image: "/images/blogroll/ploetzblog.jpg",
        url: "https://www.ploetzblog.de/",
      },
      {
        name: "Arthurs Tochter Kocht",
        description: "",
        image: "/images/blogroll/arthurstochter.jpg",
        url: "https://www.arthurstochterkochtblog.com/",
      },
      {
        name: "Die Frau am Grill",
        description: "Das BBQ & FOOD Magazin",
        image: "/images/blogroll/frauamgrill.jpg",
        url: "https://die-frau-am-grill.de/",
      },
      {
        name: "Sizzle Brothers",
        description: "BBQ- und Grillrezepte - Grillblog der Sizzle Brothers",
        image: "/images/blogroll/sizzlers.jpg",
        url: "https://sizzlebrothers.de/",
      },
      {
        name: "Französisch kochen",
        description: "Rezepte aus Frankreich - Online Shop - Bücher - Kurse - by Aurélie Bastian",
        image: "/images/blogroll/franzoesischkochen.jpg",
        url: "https://www.franzoesischkochen.de/",
      },
      {
        name: "Petit Appetit",
        description: "Petit Appetit",
        image: "/images/blogroll/petitappetit.jpg",
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
    margin-top: 30px;
    margin-bottom: 40px;

    li {
      border-left: 10px solid $color-primary;
      padding: 12px 16px;
      color: #121212;
      background-color: #f5f5f5;
      margin-bottom: 20px;
      transition: all .2s;
      cursor: pointer;

      &:hover {
        font-size: 19px;
        border-left: 13px solid $color-primary;
      }
    }
  }

  .blog-image {
    min-height: 155px;
  }

</style>
