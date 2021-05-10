<template>
  <div class="container">
    <h1>Prayer Times</h1>
    <div v-for="time in currentPrayerTime" :key="time.date.readable">
        <PrayerTime :times="time.timings" /> 
    </div>
    <pre v-if="!$fetchState.pending">{{ currentPrayerTime }}</pre>
    <!-- <pre v-if="!$fetchState.pending">{{ prayerTime }}</pre> -->
    <!-- <ul>
      <li v-for="time in currentPrayerTime" :key="time.date.readable">
        {{ time.timings }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import PrayerTime from '~/components/PrayerTime'
export default {
  data() {
    return {
      title: "Prayer times - Think Studio",
      prayerTime: null,
    };
  },
  components:{
    PrayerTime
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The Prayer Time Web App",
        },
      ],
    };
  },
  async fetch() {
    await this.$axios
      .$get(
        "http://api.aladhan.com/v1/calendar?latitude=23.810331&longitude=90.412521&method=1&month=5&year=2021"
      )
      .then((res) => (this.prayerTime = res.data))
      .catch(err => console.log(err))
  },
  computed: {
    currentPrayerTime() {
      let time = new Date();
      time.setHours(23, 59, 59, 999);
      let modifyTime = time.toUTCString();
      let findCurrentDate = modifyTime.slice(5, 16);
      return this.prayerTime.filter(
        (time) => time.date.readable == findCurrentDate
      );
    },
  },
};
</script>

<style lang="scss"></style>
