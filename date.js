let date = new Date();

function getToday() {
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
}

function getNow() {
  // Current date
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let now = date.toLocaleDateString("en-US", options);
  return now;
}
