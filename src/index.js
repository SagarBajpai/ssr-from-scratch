const express = require("express");
const app = express();
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("../src/client/components/Home").default;

app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  const html = `<html>
                  <head>
                    <body>
                    <div id="root">${content}</div>
                    </body>
                    <script src="bundle.js"></script>
                  </head>
                </html>`;
  res.send(html);
});

app.listen(3003, () => {
  console.log("Server is running at 3003");
});
