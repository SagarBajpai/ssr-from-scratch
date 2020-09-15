import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import routes from "./client/Routes";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  const Promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadOptions ? route.loadOptions(store) : null;
  });

  Promise.all(Promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3003, () => {
  console.log("Server is running at 3003");
});
