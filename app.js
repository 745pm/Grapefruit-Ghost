var express = require("express");
var app = express(); 
app.configure(function(){
  app.set("view engine", "jade")
  app.set("views", "/grapefruit/views");
  // Tells express to log all requests to the console
  app.use(express.logger("dev"));
});
app.get("/", function (req, res) {
  res.render("pampelmousse")
  // render uses view engine jade to turn the view into html
});
app.get("/pictureofgrapefruit", function (req, res){
  res.sendfile ("/grapefruit/public/img/grapefruit.jpg")
  // sendfile sends it as is, unlike render which changes
});
app.get("/color", function (req, res){
  res.sendfile ("/grapefruit/public/css/style.css")
});
app.listen (8001);


