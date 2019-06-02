<template>

  <div>

    <MainHeading
      text="Der Nerd am Herd: Das bin ich."
    ></MainHeading>

    <ArticleImage
      src="/images/about/presenting-cake.jpg"
      alt="Gugelhupfkuchen"
    ></ArticleImage>
    
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="6">
        <p class="entry-paragraph">
          Mein Name ist Michael, und ja, ich trage eine Brille. Als Softwareentwickler sitze ich tagsüber am Rechner und tausche abends die Tastatur gegen den Herd ein.
          Dann gehe ich meinem liebsten Hobby, dem Kochen und Backen, nach.
        </p>

        <br>

        <p>
          Auch hier bin ich ein Nerd, denn ich lese mich gern tief in Themen ein und versuche, Konzepte zu verstehen und Zusammenhänge zu entdecken. An die 100 Bücher habe ich verschlungen, 12 Kochkurse besucht und über 600 Rezepte ausprobiert, bewertet und in meiner Datenbank gesammelt.
        </p>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class AboutPage extends Vue {

  }

</script>

<style lang="scss" scoped>

</style>
