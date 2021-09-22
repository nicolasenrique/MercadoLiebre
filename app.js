const express = require("express");
app = express();
const port = 3000;

const path = require("path");

const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server runing at port 3000");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
