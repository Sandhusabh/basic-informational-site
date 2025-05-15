const express = require("express");
const app = express();

function serveIndeXFile(req, res){
  res.sendFile(__dirname + "/index.html");
}
app.get("/", serveIndeXFile);
app.get("/index", serveIndeXFile);
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.use( (req, res, next) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
