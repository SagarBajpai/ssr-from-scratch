const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("../client/components/Home").default;

export default () => {
  const content = renderToString(<Home />);
  return `<html>
          <head>
              <body>
              <div id="root">${content}</div>
              </body>
              <script src="bundle.js"></script>
          </head>
        </html>`;
};
