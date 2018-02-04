var express = require('express');
var app = express();

var request = require('request');












app.set("view engine", "ejs");
app.set("views", "./views");

if (!module.parent) {
  app.listen(3000);
  console.log('Listening on port 3000');
}
