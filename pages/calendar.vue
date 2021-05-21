<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Georgian and Hijri Calendar</h2>
          <v-calender
            :show-date="showDate"
            :items="events"
            class="theme-default holiday-us-traditional holiday-us-official"
            id="muslim-calender"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      showDate: new Date(),
      events: []
    };
  },
  mounted() {
    this.$axios
      .$get("https://api.aladhan.com/v1/gToHCalendar/5/2021")
      .then(res => {
        // this.events = this.formatDatesForCalender(res.data.data);
        this.events = this.formatDatesForCalender(res.data);
        console.log(res.data);
      });
  },
  methods: {
    formatDatesForCalender(dates) {
      return dates.map(date => {
        const year = date.gregorian.date.split("-")[2];
        const month = date.gregorian.date.split("-")[1];
        const day = date.gregorian.date.split("-")[0];

        const hday = date.hijri.date.split("-")[0]; //?
        const hmonthName = date.hijri.month.en; //?

        const formated = {
          id: date.gregorian.date,
          startDate: `${year}-${month}-${day}`,
          title: `${hday} ${hmonthName}`
        };
        return formated;
      });
    }
  }
};
</script>

<style scoped lang="scss">
#muslim-calender {
  height: 80vh;
}
</style>
