<template>
  <article v-for="report in reports" :key="report.title" :id="[`${report.title.toLowerCase()}-card`]" :class="['report__card', `report__card--${report.title.toLowerCase().replace(/[^a-zA-z0-9]/g, '-')}`, 'card']">
    <div class="report__card__body card">
      <div class="report__card__body__wrapper">
        <div class="report__card__title report__card__detail">
          <h2 class="report__card__header text-white">{{ report.title }}</h2>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </div>

        <div class="report__card__time report__card__detail">
          <span id="current" class="current-time text-white">{{ report.timeframes[timeFrames].current }}hrs</span>
          <span id="previous" class="previous text-secondary">Last <span class="previous__time-opt">Week</span> - <span class="previous__time">{{ report.timeframes[timeFrames].previous }}hrs</span></span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ReportCard",
  props: {
    reports: Object,
    timeFrames: String
  },
  methods: {
    // attr(title) {
    //   return `${title}-card`;
    // }
  },
  computed: {
    // attrTitle(title) {
    //   return `${title}-card`;
    // }
  }
}
</script>

<style lang="scss">
  @import "@/scss/_cards.scss";
</style>