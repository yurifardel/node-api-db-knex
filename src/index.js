const express = require("express");
const routes = require("../routes/router");
let consolidate = require("consolidate");
const path = require("path");

const app = express();
app.use(express.json());
app.use(routes);

// app.use("/views", express.static("/views/"));
// app.set("views", __dirname + "/views");
// app.engine("html", consolidate.mustache);
// app.set("view engine", "html");
app.use(express.static(path.resolve(__dirname, "..", "src/views/")));

app.get("/", function (req, res) {
  return res.render("index", {
    title: "Consolidate.js",
  });
});

app.listen(8080, () => {
  console.log("express server listening on port 8080");
});
