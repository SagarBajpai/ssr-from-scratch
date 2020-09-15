import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  // We will write some logic here to first initialize
  // And then pass it to the store

  res.send(renderer(req, store));
});

app.listen(3003, () => {
  console.log("Server is running at 3003");
});
