import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  return `<html>
          <head>
              <body>
              <div id="root">${content}</div>
              </body>
              <script src="bundle.js"></script>
          </head>
        </html>`;
};
