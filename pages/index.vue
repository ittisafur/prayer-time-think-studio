<template>
  <div>
    <div class="container">
      <h1>Prayer Times</h1>
      <div v-if="$fetchState.pending">Loading.... Please Wait</div>
    </div>
    <div v-for="time in currentPrayerTime" :key="time.date.readable">
      <PrayerTime :times="time.timings" />
    </div>
  </div>
</template>

<script>
import PrayerTime from "~/components/PrayerTime";

export default {
  data() {
    return {
      title: "Prayer times - Think Studio",
      prayerTime: null,
      geolocation: {
        lat: 0,
        lng: 0,
      },
    };
  },
  components: {
    PrayerTime,
  },
  async fetch() {
    await this.$axios
      .$get(
        //`http://api.aladhan.com/v1/calendar?latitude=${this.geolocation.lat}&longitude=${this.geolocation.lng}&method=1&month=5&year=2021`
        `http://api.aladhan.com/v1/calendar?latitude=23.746&longitude=90.382&method=1&month=5&year=2021`
      )
      .then((res) => (this.prayerTime = res.data))
      .catch((err) => console.log(err));
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.geolocation.lat = pos.coords.latitude;
        this.geolocation.lng = pos.coords.longitude;
      });
    } else {
      alert("Please enable location detection to pin point prayer times.");
    }
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
};
</script>

<style lang="scss"></style>
