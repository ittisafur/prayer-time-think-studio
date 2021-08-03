<template>
  <div class="">
    <h3 class="text-lg font-bold text-bismisllah-blue-250">
      &nbsp; {{ hour }}:{{ minute }}:{{ second }}
    </h3>
  </div>
</template>
<script>
export default {
  props: ["timestamp", "prayerName"],
  data() {
    return {
      hour: null,
      minute: null,
      second: null,
      day: null,
      countDate: new Date(this.timestamp).getTime(),
    };
  },
  mounted() {
    setInterval(() => {
      this.countDown();
    }, 1000);
  },
  methods: {
    countDown() {
      const gap = this.countDate - new Date().getTime();

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      this.hour = Math.floor((gap % day) / hour);
      this.minute = Math.floor((gap % hour) / minute);
      this.second = Math.floor((gap % minute) / second);
    },
  },
};
</script>
