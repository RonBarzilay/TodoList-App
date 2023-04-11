// exports specific functions:
// exports.getToday = getToday;
// in app.js: let today = date.getToday();
// exports.getNow = getNow;
// in app.js: let now = date.getNow();
// console.log(module);

const date = new Date();

exports.getToday = function () {
  // Current day 0-6
  let today = date.getDay();
  switch (today) {
    case 0:
      today = "Sunday";
      break;

    case 1:
      today = "Monday";
      break;
    case 2:
      today = "Tuesday";
      break;
    case 3:
      today = "Wednesday";
      break;
    case 4:
      today = "Thursday";
      break;
    case 5:
      today = "Friday";
      break;
    case 6:
      today = "Satruday";
      break;

    default:
      break;
  }
  return today;
};

exports.getNow = function () {
  // Current date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return (now = date.toLocaleDateString("en-US", options));
};
