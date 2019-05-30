<template lang="md">

  ## SALZIG-SÜSS-SAUER-SCHARF: DIE GENIALE TOMATEN-SENF-BUTTER

  Was ist die kulinarische DNA jedes guten Gerichts, fragte Ludwig Maurer vor einigen Tagen beim Fleischforum im Augsburg in die Runde der anwesenden Metzger (+ich). Seine simple Antwort: Es enhält salzige, süße, saure und scharfe Aromen. Als ich ein paar Tage später in der Küche stehe und einen meiner liebsten Brotaufstriche anrühre, stelle ich fest, dass ich dem Credo des Meisters ganz ohne Intention gefolgt bin. Besser gesagt: Ich folge ihm schon seit Jahren, denn diese Tomaten-Senf-Butter begleitet mich seit dem Beginn meines Master-Studiums. Ich habe sie auf einer Studentenparty entdeckt und sofort lieb gewonnen.

  ## So simpel, so gut!

  Es war schon weit nach Mitternacht und meine Sinne sicherlich promillegetränkt, als ich zwischen den Resten des Buffets diese rote Creme entdeckte. Butter, die bereits seit einigen Stunden bei Zimmertemperatur steht, hat die allerbeste Konsistenz. Wenn dann noch ein paar Scheiben guten Baguettes direkt daneben liegen, kann ich nicht widerstehen – schon gar nicht spät nachts. Diese Mundfülle! Ich konnte nicht mehr aufhören. Nachdem ich bereits kurz davor war, die Schüssel auszulecken, erbarmte sich die Köchin und verriet mir das Rezept, das mich ziemlich überrascht zurückließ. Butter, Tomatenmark, Senf, Salz, Zucker. That’s it. In dieser Version habe ich mit ein paar Spezialzutaten gearbeitet, die ihr aber gar nicht dringend braucht.

  Zurück zu Ludwig Maurers Definition der kulinarischen DNA: Diese Butter – so simpel und ordinär sie auch sein mag – trägt in sich eine geschmackliche Komplexität, die man ihr nicht zutraut. Zuerst die Süße der konzentrierten Tomaten, dann die adstringierende Säure des Senfs, getragen von der breiten Würze der Sojasauce und einem sanften Kribbeln auf der Zunge, wenn man sich denn für einen Chili-Hauch entscheidet. Fakt ist: Zu Rind und Huhn ist die Tomaten-Senf-Butter eine Wucht, zu Brot birgt sie heftiges Suchtpotential.
  
  <recipe-component :recipe="recipe" />

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";
  import RecipeComponent from "@/components/RecipeComponent.vue";

  @Component({
    components: {
      RecipeComponent
    },
    // @ts-ignore
    async asyncData({ $axios }) {
      const response = await $axios.post(`/api/recipes/getRecipe`, {
        id: 2,
      });
      return { recipe: response.data };
    }
  })
  export default class extends Vue {
    
    private recipe = null;
  
    head: {
      title: "Salzig-Süss-Sauer-Scharf: Die geniale Tomaten-Senf-Butter"
    }

  }

</script>
