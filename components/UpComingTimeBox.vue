<template>
  <div class="timebox-upcomming">
    <p class="mb-5 text-sm font-bold uppercase text-bismillah-blue-950">
      {{ prayerName }}
    </p>
    <div class="flex">
      <p class="mb-2.5 text-lg font-semibold text-bismisllah-blue-250">
        Next prayer in
      </p>
      <CountDown :timestamp="comingPrayerTimestamp" />
    </div>
    <p
      class="text-2xl font-normal text-left md:text-center text-bismillah-blue-950"
    >
      {{ $timeFormatter(time) }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["prayerName", "time", "comingPrayerTimestamp"],
};
</script>

<style scoped>
.timebox-upcomming {
  background: linear-gradient(
    270deg,
    rgba(10, 184, 225, 0.0753387) 0%,
    rgba(9, 183, 224, 0.0704764) 42.3%,
    rgba(7, 180, 219, 0.0001) 100%
  );
}
</style>
