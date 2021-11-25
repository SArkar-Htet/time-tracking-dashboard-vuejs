<template>
  <section class="report" id="report">
    <ProfileCard />
    <!-- ReportCard -->
  </section>
</template>

<script>
  import ProfileCard from './ProfileCard.vue';
  export default {
    name: "Report",
    components: {
      ProfileCard,
    }
  }
</script>

<style lang="scss">
  @import "@/scss/_report.scss";
</style>