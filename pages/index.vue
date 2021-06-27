<template>
  <div class="mx-auto wrapper">
    <h1 class="text-3xl">Prayer Times <span v-html="countryFlag"></span></h1>

    <div v-if="$fetchState.pending">
      <div class="w-16 h-16 mx-auto ">
        <LoadingIcon :loading="$fetchState.pending" />
      </div>
    </div>

    <div
      v-if="!$fetchState.pending"
      class="grid grid-cols-1 gap-5 mt-10 md:gap-10 md:grid-cols-5"
    >
      <div
        v-for="(time, prayerName) in todaysPrayerTimes"
        :key="prayerName"
        class="flex flex-col items-center justify-center h-40 text-center bg-white rounded-md shadow"
        :class="{ 'bg-gray-800 text-white': isUpcomingPrayer(prayerName) }"
      >
        <div class="text-danger" v-if="isUpcomingPrayer(prayerName)">
          <p>Upcoming Prayer {{ prayerName }}</p>
          <CountDown :timestamp="comingPrayerTimestamp" />
          <p>{{ $timeFormatter(time) }}</p>
        </div>
        <div v-else>
          <div class="flex flex-col ">
            <p class="text-xl font-bold ">{{ prayerName }}</p>
            <p>{{ $timeFormatter(time) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment-timezone";
import adhan from "adhan";

export default {
  name: "Home",
  fetchOnServer: false,

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The Prayer Time Web App"
        }
      ],
      bodyAttrs: {
        class: "bg-gray-200"
      }
    };
  },
  data() {
    return {
      comingPrayerTimestamp: null,
      comingPrayerName: null,
      method: 1,
      title: "Prayer times - Think Studio",
      prayerTime: null,
      countryFlag: null,
      geolocation: {
        lat: 0,
        lng: 0
      }
    };
  },
  async fetch() {
    await this.getPrayerTimes();
    this.getNextPrayerTime();
  },
  computed: {
    todaysPrayerTimes() {
      let time = new Date();
      time.setHours(23, 59, 59, 999);
      let modifyTime = time.toUTCString();
      let findCurrentDate = modifyTime.slice(5, 16);

      const [ajkerSomoys] = this.prayerTime?.filter(
        time => time.date.readable == findCurrentDate
      );

      delete ajkerSomoys.timings.Sunset;
      delete ajkerSomoys.timings.Sunrise;
      delete ajkerSomoys.timings.Imsak;
      delete ajkerSomoys.timings.Midnight;

      return ajkerSomoys.timings;
    }
  },
  methods: {
    isUpcomingPrayer(prayerName) {
      return prayerName.toLowerCase() == this.comingPrayerName.toLowerCase();
    },
    getNextPrayerTime() {
      const coordinates = new adhan.Coordinates(
        this.geolocation.lat,
        this.geolocation.lng
      );

      /**
       * Time object
       */
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const prayerTimesToday = new adhan.PrayerTimes(
        coordinates,
        today,
        adhan.CalculationMethod.Karachi()
      );

      const prayerTimesTomorrow = new adhan.PrayerTimes(
        coordinates,
        tomorrow,
        adhan.CalculationMethod.Karachi()
      );

      if (prayerTimesToday.nextPrayer() !== "none") {
        this.comingPrayerTimestamp = moment(
          prayerTimesToday[prayerTimesToday.nextPrayer()]
        );
        this.comingPrayerName = prayerTimesToday.nextPrayer();
      } else {
        this.comingPrayerTimestamp = moment(
          prayerTimesTomorrow[prayerTimesTomorrow.nextPrayer()]
        );
        this.comingPrayerName = prayerTimesTomorrow.nextPrayer();
      }
    },
    // getGeoPermission() {
    //   if (navigator.geolocation) {
    //     return new Promise(resolve => {
    //       navigator.geolocation.getCurrentPosition(pos => {
    //         this.geolocation.lat = pos.coords.latitude;
    //         this.geolocation.lng = pos.coords.longitude;
    //         resolve(pos);
    //       });
    //     });
    //   } else {
    //     console.error("Your browser dont support geo location support");
    //   }
    // },
    async handleChangeMethod() {
      await this.getPrayerTimes(this.method);
    },
    async getPrayerTimes(method = 1) {
      // Using ipify and ip stack
      /*const { ip } = await this.$axios.$get(
        "https://api.ipify.org/?format=json"
      );

      const {
        latitude,
        longitude,
        location: { country_flag_emoji }
      } = await this.$axios.$get(
        `http://api.ipstack.com/${ip}?access_key=fb0ae3fd6949bff18ac8fabc73624197`
      );*/
      // end using ipify and ipstack
      const { ip, longitude, latitude, emoji_flag } = await this.$axios.$get(
        `https://api.ipdata.co/?api-key=40d84a78d40bf66e84a862bff02e33647c7bf6afefa2927de1690e09`
      );

      this.countryFlag = emoji_flag;
      this.geolocation.lat = latitude;
      this.geolocation.lng = longitude;
      await this.$axios
        .$get(
          `https://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=${method}&month=${this.$currentDate.month}&year=${this.$currentDate.year}`
        )
        .then(res => (this.prayerTime = res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>
