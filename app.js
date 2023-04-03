const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

var items = ["Buy Food", "Cook Food", "Eat Food"];
var date = new Date();

// Current day 0-6
var today = date.getDay();

// Current date
var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
var now = date.toLocaleDateString("en-US", options);
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
app.get("/", function (req, res) {
  //   res.sendFile(__dirname + "/index.html");
  res.render("list", { day: today, now: now, listOfItems: items });
});

app.post("/", function (req, res) {
  //   console.log(req.body.newItem);
  //   var newItem = req.body.newItem;
  //   res.render("list", { newItem: newItem });
  items.push(req.body.newItem);
  res.redirect("/");
});
