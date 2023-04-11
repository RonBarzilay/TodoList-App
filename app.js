const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// Serve css, JS, files, assets etc. inside folder Public
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workListItems = [];

app.get("/", function (req, res) {
  //   res.sendFile(__dirname + "/index.html"); ===
  //   EJS - send ejs file with dict of params
  res.render("list", {
    listTitle: date.getToday(),
    now: date.getNow(),
    listOfItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list == "Work") {
    workListItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    now: date.getNow(),
    listOfItems: workListItems,
  });
});

app.get("/about", function (req, res) {
  res.render("about", {});
});
