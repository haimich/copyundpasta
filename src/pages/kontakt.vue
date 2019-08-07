<template>

  <div>

    <el-row>
      <el-col :span="16" :offset="4">
        <MainHeadingComponent
          text="Kontakt"
          subtitle="Ich freue mich über eure Nachrichten!"
        />
      </el-col>
    </el-row>

  </div>

</template>

<script lang="ts">

  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class ContactPage extends Vue {

  }

</script>

<style lang="scss" scoped>

</style>
