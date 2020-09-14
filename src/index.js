const express = require("express");
const app = express();
const renderer = require("./helpers/renderer").default;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3003, () => {
  console.log("Server is running at 3003");
});
