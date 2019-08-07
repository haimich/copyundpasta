<template>

  <div>

    <MainHeadingComponent
      text="Bildnachweise"
    />

    <el-row style="margin-top: 20px;">
      <el-col :span="14" :offset="5">
        
        <el-table
          :data="images"
          highlight-current-row
          style="font-size: 17px; text-align: center;"
        >
          <el-table-column
            label="Bild"
            width="220"
          >
            <template slot-scope="scope">
              <a :href="scope.row.intLink" target="_blank" rel="noopener" title="Bild anzeigen">
                <el-image
                  :src="scope.row.imageLink"
                  fit="scale-down"
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

  @Component
  export default class BildnachweisPage extends Vue {

    private images = [
      {
        imageLink: "/images/logo.png",
        author: "David Perez",
        extLinkTitle: "kreativdesign-karlsruhe.de",
        extLink: "https://kreativdesign-karlsruhe.de/",
        intLink: "/",
      },
      {
        imageLink: "/images/about/presenting-cake.jpg",
        author: "Sarah Winter",
        extLinkTitle: "meinlichtspiel.com",
        extLink: "https://www.meinlichtspiel.com/",
        intLink: "/",
      },
      {
        imageLink: "/images/food-background.svg",
        author: "pikisuperstar",
        extLinkTitle: "de.freepik.com/pikisuperstar",
        extLink: "https://de.freepik.com/pikisuperstar",
        intLink: "/",
      },
    ]

  }

</script>

<style lang="scss" scoped>

</style>