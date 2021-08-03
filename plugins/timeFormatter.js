export default ({ app }, inject) => {
  function timeFormatter(time) {
    const hour = time.split(":")[0];
    const hour_12 = hour == 12 ? hour : hour % 12;
    const minute = time.split(":")[1].split(" ")[0];
    return `${hour_12}:${minute} ${hour < 12 ? "AM" : "PM"}`;
  }
  inject("timeFormatter", (time) => timeFormatter(time));
};
