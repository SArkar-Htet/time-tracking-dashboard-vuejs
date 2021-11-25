<template>
  <main class="main">
    <Report />
  </main>
</template>

<script>
import Report from './components/Report.vue'

export default {
  name: 'App',
  components: {
    Report
  }
}
</script>

<style lang="scss">
  @import "./scss/_functions.scss";
  @import "./scss/_variables.scss";
  @import "./scss/_mixin.scss";
  @import "./scss/_global.scss";
  @import "./scss/_report.scss";
  @import "./scss/_user.scss";
</style>
