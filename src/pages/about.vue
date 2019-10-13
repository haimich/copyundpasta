<template>

  <div>
    <article>
      <el-row>
        <el-col :xl="xl" :lg="lg" :md="md" :sm="sm" :xs="xs">
          <MainHeadingComponent
            text="Der Nerd am Herd: Das bin ich."
          />

          <ArticleImageComponent
            src="/images/about/gugelhupf-kuchen.jpg"
            alt="Gugelhupfkuchen"
          />
    
          <p class="entry-paragraph">
            Mein Name ist Michael und ja, ich trage eine Brille. Als Softwareentwickler sitze ich tagsüber am Rechner und tausche abends die Tastatur gegen den Herd ein. Dann gehe ich meinem liebsten Hobby, dem Kochen und Backen, nach.
          </p>

          <p>
            Auch hier bin ich ein <ArticleQuoteComponent text="Nerd" />, denn ich lese mich gern tief in Themen ein und versuche, Konzepte zu verstehen und Zusammenhänge zu entdecken. An die 100 Bücher habe ich verschlungen, 12 Kochkurse besucht und über 800 Rezepte ausprobiert, bewertet und in meiner Datenbank gesammelt.
          </p>

          <p>
            Ich optimiere gerne Zubereitungsschritte, Techniken und Zutaten. Dabei macht mir das grammgenaue Abwiegen beim Backen genau so viel Spaß wie das kreative Kombinieren beim Kochen. Mir geht es darum, aus wenigen Zutaten leckere Gerichte zu zaubern, die sich leicht nachkochen lassen. Gleichzeitig will ich so viel frische Lebensmittel wie möglich einsetzen und so wenig Abfälle wie möglich hinterlassen.
          </p>

          <ArticleImageComponent
            src="/images/about/michael-kochbuecher.jpg"
            alt="Michael mit Kochbüchern"
          />

          <h3>Geschmacksabenteuer: Dazu lade ich euch ein</h3>

          <p>
            Ich möchte euch mit auf eine kulinarische Entdeckungsreise nehmen und mein Wissen und meine Leidenschaft fürs Kochen und Backen mit euch teilen. Begleitet mich auf der Suche nach unvergesslichen Geschmackserlebnissen: dem perfekten Risotto, dem saftigsten Steak oder dem leckersten Auflauf. Auf unserer Reise schauen wir hinter die Kulissen und erkunden, wie man ein richtig gutes Brot backt und welche chemischen Vorgänge bei der Teigherstellung eine Rolle spielen, wie man Eischnee am besten aufschlägt und welche speziellen Zutaten sich bei asiatischen Gerichten problemlos austauschen lassen. Ich führe euch Schritt für Schritt durch die Rezepte und beantworte eure Fragen. Ich gebe euch Tipps und Empfehlungen zu Küchenutensilien und -geräten sowie zu Zeitschriften, Büchern und anderen Blogs rund ums Kochen und Backen.
          </p>

          <p>
            Für euch öffne ich meine Rezeptdatenbank und bringe Abwechslung in euren Speiseplan. Ich zeige euch, wie man aus Resten vom Vortag leckere Gerichte zaubert, wie sich der beste Geschmack aus Zutaten herauskitzeln lässt und wie auch aufwändige Gerichte gelingen. Der <ArticleQuoteComponent text="Wow" />-Effekt bei euren Gästen ist garantiert! Selbst wenn wir ein einfaches Gericht nur minimal variieren. 
          </p>

          <p>
            Und natürlich dürfen neue Entwicklungen und Trends nicht fehlen. Ob Nicecream, Mini-Guglhupf oder leckere Smoothies – ich halte euch auf dem Laufenden und freue mich auf Eure Anregungen und Ideen.
          </p>

          <div style="display: flex; justify-content: center; margin-top: 10px;">
            <img src="/images/about/unterschrift.jpg" alt="Euer Michael" style="width: 180px;">
          </div>
        </el-col>
      </el-row>
    </article>
  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import BaseStaticPage from "@/components/BaseStaticPage.vue";

  @Component
  export default class extends BaseStaticPage {
  }

</script>

<style lang="scss" scoped>

</style>
