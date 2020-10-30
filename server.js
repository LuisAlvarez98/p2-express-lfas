// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("You are on the homepage");
});

app.post("/post", function (req, res) {
  var userObj = req.body;
  return res.status(200).send("Welcome: " + userObj.user);
});

app.delete("/delete", function (req, res) {
  var { taskId } = req.body;
  return res.status(200).send({ delete: true });
});

app.put("/put/:ID", function (req, res) {
  let id = req.params.ID;
  if (id === null) return res.status(404).send("Not found");
  return res.status(200).send("Task " + id + " has been updated");
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
