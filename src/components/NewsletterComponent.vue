<template>

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
            autocomplete="on"
            placeholder="E-Mail-Adresse"
            @keyup.enter.native="submitEmail"
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

</template>

<script lang="ts">

  import { Vue, Component, Prop, Watch } from "vue-property-decorator";

  @Component
  export default class NewsletterComponent extends Vue {
    
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

<style lang="scss" scoped>

  @import "~/scss/variables.scss";

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

  </style>