<template>
  <div class="flex flex-col timebox">
    <p class="mb-5 text-sm font-bold uppercase text-bismillah-blue-950">
      {{ prayerName }}
    </p>
    <p class="text-2xl font-normal text-bismillah-blue-950 pl-[28px]">
      {{ $timeFormatter(time) }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["prayerName", "time"],
};
</script>

<style scoped>
.timebox {
  background: linear-gradient(
    270deg,
    rgba(10, 184, 225, 0.0753387) 0%,
    rgba(9, 183, 224, 0.0704764) 42.3%,
    rgba(7, 180, 219, 0.0001) 100%
  );
  mix-blend-mode: normal;
  border-radius: 3px;
  padding-bottom: 28px;
}
</style>
