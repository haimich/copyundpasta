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
        Als Softwareentwickler und begeisterter Hobbykoch bin ich vielseitig interessiert und tauche gern tief in Themen ein. Mir macht es Freude, Rezepte auszuprobieren, zu variieren und zu optimieren, um den perfekten Geschmack zu treffen. Dabei habe ich den Anspruch, aus wenigen Zutaten leckere Gerichte zu zaubern, die man auch leicht nachkochen kann. 
      </p>

      <br>

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

      <p style="margin-top: 20px; width: 75%">
        Du möchtest über neue Rezepte informiert werden? Dann abonniere einfach meinen Newsletter.
      </p>

      <div class="newsletter-subscribe">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://gmx.us20.list-manage.com/subscribe/post?u=1c249484bbe9d6816f42135ee&amp;id=8d55aeb1b7"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll" style="display: flex;">
              <el-input
                type="email"
                v-model="userEmail"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="E-Mail-Adresse"
                required
              ></el-input>

              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_1c249484bbe9d6816f42135ee_8d55aeb1b7" tabindex="-1" value="">
              </div>

              <div class="clear">
                <el-button
                  title="Abonnieren"
                  type="info"
                  plain
                  icon="el-icon-message"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  :disabled="userEmail == null || userEmail === ''"
                  @click="submitEmail"
                ></el-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </aside>

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class SidebarComponent extends Vue {

    private userEmail = "";

    submitEmail() {
      const form: any = document.getElementById("mc-embedded-subscribe-form");

      if (form != null) {
        form.submit();
      } else {
        this.$notify.warning("Die Newsletteranmeldung ist derzeit leider nicht möglich");
      }
    }

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

    .newsletter-subscribe {
      margin-top: 20px;

      .el-input {
        margin-right: 10px;
      }

      .el-button {
        padding: 8px 12px;
        color: white;
        background-color: $color-primary;
        border: none;
        font-size: 23px;
      }
    }
  }

</style>
