<template>
  <div>
    <div class="prayer-time">
      <div class="container">
        <div class="row">
          <div class="col-md-2">Fajr {{ $timeFormatter(times.Fajr) }}</div>
          <div class="col-md-2">
            Sun Rise {{ $timeFormatter(times.Sunrise) }}
          </div>
          <div class="col-md-2">Dhuhr {{ $timeFormatter(times.Dhuhr) }}</div>
          <div class="col-md-2">Asr {{ $timeFormatter(times.Asr) }}</div>
          <div class="col-md-2">
            Maghrib {{ $timeFormatter(times.Maghrib) }}
          </div>
          <div class="col-md-2">Isha {{ $timeFormatter(times.Isha) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    times: Object,
  },
  methods: {
    convertToTwelveHours() {},
  },
};
</script>
