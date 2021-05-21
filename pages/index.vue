<template>
  <div>
    <div class="container">
      <h1>Prayer Times</h1>
      <div v-if="$fetchState.pending">Loading.... Please Wait</div>
    </div>
    <div v-if="!$fetchState.pending">
      <div v-for="time in currentPrayerTime" :key="time.date.readable">
        <PrayerTime :times="time.timings" />
      </div>
    </div>
  </div>
</template>

<script>
import PrayerTime from "~/components/PrayerTime";

export default {
  fetchOnServer: false,
  data() {
    return {
      title: "Prayer times - Think Studio",
      prayerTime: null,
      geolocation: {
        lat: 0,
        lng: 0
      }
    };
  },
  components: {
    PrayerTime
  },
  async fetch() {
    this.getGeoPermission().then(async () => {
      this.getPrayerTimes();
    });
  },
  computed: {
    currentPrayerTime() {
      let time = new Date();
      time.setHours(23, 59, 59, 999);
      let modifyTime = time.toUTCString();
      let findCurrentDate = modifyTime.slice(5, 16);
      return this.prayerTime?.filter(
        time => time.date.readable == findCurrentDate
      );
    }
  },
  methods: {
    getGeoPermission() {
      if (navigator.geolocation) {
        return new Promise(resolve => {
          navigator.geolocation.getCurrentPosition(pos => {
            this.geolocation.lat = pos.coords.latitude;
            this.geolocation.lng = pos.coords.longitude;
            resolve(pos);
          });
        });
      } else {
        console.error("Your browser dont support geo location support");
      }
    },
    async getPrayerTimes() {
      await this.$axios
        .$get(
          `https://api.aladhan.com/v1/calendar?latitude=${this.geolocation.lat}&longitude=${this.geolocation.lng}&method=1&month=5&year=2021`
        )
        .then(res => (this.prayerTime = res.data))
        .catch(err => console.log(err));
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The Prayer Time Web App"
        }
      ]
    };
  }
};
</script>
