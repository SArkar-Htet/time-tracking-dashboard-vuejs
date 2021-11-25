<template>
  <section class="report" id="report">
    <ProfileCard @get-data="getData" :timeFrame="timeFrame" />
    <ReportCard :reports="reports" :timeFrames="timeFrame" />
  </section>
</template>

<script>
  import ProfileCard from './ProfileCard.vue';
  import ReportCard from './ReportCard.vue';
  export default {
    name: "Report",
    components: {
      ProfileCard,
      ReportCard,
    },
    data() {
      return {
        reports: [],
        timeFrame: "weekly",
      }
    },
    methods: {
      getData(timeFrame) {
        this.timeFrame = timeFrame;
      },
      async fetchData() {
        const url = "http://localhost:3000/reports";
        try {
          const res = await fetch(url);
          const reports = await res.json();
          console.table(reports);
          return reports;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async created() {
      this.reports = await this.fetchData();
    }
  }
</script>

<style lang="scss">
  @import "@/scss/_report.scss";
</style>