export default ({ app }, inject) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  inject("currentDate", {
    day,
    month,
    year
  });
};
