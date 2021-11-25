<template>
  <article class="report__user">
    <div class="user-card card">
      <div class="user-card__profile">
        <img src="@/assets/images/image-jeremy.png" alt="Jeremy's Avatar" class="user__avatar">
        <div class="user__info">
          <span class="user__info__text text-secondary">Report for</span>
          <h1 class="user__info__name text-white">Jeremy Robson</h1>
        </div>
      </div>
          
      <div class="user-card__timeframe">
        <ul class="timeframe__list">
          <li class="timeframe__item"><a @click.prevent="handleClick" :class="['timeframe__link', `timeframe__link--${isDaily}`]" id="daily" href="/daily">Daily</a></li>
          <li class="timeframe__item"><a @click.prevent="handleClick" :class="['timeframe__link', `timeframe__link--${isWeekly}`]" id="weekly" href="/weekly">Weekly</a></li>
          <li class="timeframe__item"><a @click.prevent="handleClick" :class="['timeframe__link', `timeframe__link--${isMonthly}`]" id="monthly" href="/monthly">Monthly</a></li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "ProfileCard",
    props: {
      timeFrame: String
    },
    methods: {
      handleClick(event) {
        const timeFrame = event.target.id;
        this.$emit("get-data", timeFrame);
      }
    },
    computed: {
      isDaily() {
        return this.timeFrame === "daily" && "active";
      },
      isWeekly() {
        return this.timeFrame === "weekly" && "active";
      },
      isMonthly() {
        return this.timeFrame === "monthly" && "active";
      }
    }
  }
</script>

<style lang="scss">
  @import "@/scss/user.scss";
</style>