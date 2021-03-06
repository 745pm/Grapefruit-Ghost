var express = require("express");
var app = express(); 
app.configure(function(){
  app.set("view engine", "jade")
  app.set("views", __dirname + "/views")
  app.set("port", process.env.PORT || 8001);
  // Tells express to log all requests to the console
  app.use(express.logger("dev"));
});
app.get("/", function (req, res) {
  res.render("pampelmousse")
  // render uses view engine jade to turn the view into html
});
app.get("/pictureofgrapefruit", function (req, res){
  res.sendfile(__dirname + "/public/img/grapefruit.jpg")
  // sendfile sends it as is, unlike render which changes
});
app.get("/color", function (req, res){
  res.sendfile(__dirname + "/public/css/style.css")
});
app.listen(app.get("port"));

