<template>

  <aside>
    <section class="sidebar-container">
      <div class="curly-divider">
        <span>Über Mich</span>
      </div>

      <img
        src="@/assets/images/uebermich.jpg"
        style="width: 70%; margin-top: 35px;"
        alt="Über Mich"
      >

      <h5 style="margin-top: 20px; letter-spacing: .4px;">
        Hey, ich bin Michael!
      </h5>

      <hr class="blue-line" style="width: 20%; margin-top: 12px; height: 2px;">

      <p>
        Als Softwareentwickler und begeisterter Hobbykoch bin ich vielseitig interessiert und tauche gerne tief in Themen ein. Mir macht es Freude, Rezepte auszuprobieren, zu variieren und zu optimieren, um den perfekten Geschmack zu treffen. Dabei habe ich den Anspruch, aus wenigen Zutaten leckere Gerichte zu zaubern, die man auch leicht nachkochen kann. 
      </p>

      <p>
        Ich möchte euch inspirieren und mit meiner Leidenschaft fürs Kochen und Backen anstecken. 
      </p>

      <br>

      <p>
        <strong>Also: Ausprobieren, Spaß haben und genießen!</strong>
      </p>

      <div class="readmore-link" style="margin-top: 20px;">
        <nuxt-link to="about">
          Mehr erfahren <i class="el-icon-caret-right"></i>
        </nuxt-link>
      </div>
    </section>

    <section class="sidebar-container" style="margin-top: 25px;">
      <div class="curly-divider">
        <span>Newsletter</span>
      </div>

      <p style="margin-top: 20px; width: 84%">
        Du möchtest über neue Rezepte informiert werden? Dann abonniere einfach meinen Newsletter:
      </p>

      <NewsletterComponent />
    </section>
  </aside>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import NewsletterComponent from "@/components/NewsletterComponent.vue";

  @Component({
    components: {
      NewsletterComponent,
    }
  })
  export default class SidebarComponent extends Vue {

  }

</script>

<style lang="scss">

  @import "~/scss/variables.scss";

  .sidebar-container {
    font-size: 16px;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    p, a {
      font-size: 15px;
      line-height: 23px;

      strong {
        font-weight: 900;
      }
    }
  }

</style>
