<template>

  <div>
    <el-row>
      <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
        <MainHeadingComponent
          text="Bildnachweise"
        />
        
        <el-table
          :data="images"
          highlight-current-row
          style="font-size: 17px; text-align: center;"
        >
          <el-table-column
            label="Bild"
          >
            <template slot-scope="scope">
              <a
                :href="scope.row.imageLink"
                target="_blank"
                rel="noopener"
                title="Bild anzeigen"
              >
                <el-image
                  :src="scope.row.imageLink"
                  fit="scale-down"
                  style="max-width: 70%;"
                ></el-image>
              </a>
            </template>
          </el-table-column>

          <el-table-column
            prop="author"
            label="Urheber"
            width="300"
          ></el-table-column>

          <el-table-column
            label="Webseite"
          >
            <template slot-scope="scope">
              <a :href="scope.row.extLink" target="_blank" rel="noopener" title="Quelle öffnen">
                {{ scope.row.extLinkTitle }} <FontAwesome :icon="['fas', 'external-link-alt']" />
              </a>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">
  
  import { Vue, Component, Prop } from "vue-property-decorator";
  import BaseStaticPage from "@/components/BaseStaticPage.vue";

  @Component
  export default class BildnachweisPage extends BaseStaticPage {

    private images = [
      {
        imageLink: "/images/logo.png",
        author: "David Perez",
        extLinkTitle: "kreativdesign-karlsruhe.de",
        extLink: "https://kreativdesign-karlsruhe.de/",
      },
      {
        imageLink: "/images/about/gugelhupf-kuchen.jpg",
        author: "Sarah Winter",
        extLinkTitle: "meinlichtspiel.com",
        extLink: "https://www.meinlichtspiel.com/",
      },
      {
        imageLink: "/images/about/kamera-auf-kuchen-gerichtet.jpg",
        author: "Sarah Winter",
        extLinkTitle: "meinlichtspiel.com",
        extLink: "https://www.meinlichtspiel.com/",
      },
      {
        imageLink: "/images/articles/moehren-quiche-mit-bergkaese/main.jpg",
        author: "Sarah Winter",
        extLinkTitle: "meinlichtspiel.com",
        extLink: "https://www.meinlichtspiel.com/",
      },
      {
        imageLink: "/images/about/michael-kochbuecher.jpg",
        author: "Sarah Winter",
        extLinkTitle: "meinlichtspiel.com",
        extLink: "https://www.meinlichtspiel.com/",
      },
      {
        imageLink: "/images/food-background.svg",
        author: "pikisuperstar",
        extLinkTitle: "de.freepik.com/pikisuperstar",
        extLink: "https://de.freepik.com/pikisuperstar",
      },
    ]

  }

</script>

<style lang="scss" scoped>

</style>