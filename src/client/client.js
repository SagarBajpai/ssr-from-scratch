import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

ReactDOM.hydrate(<Home />, document.querySelector("#root"));

//Here we are not saying to replace the root element. But actually root has already DOM element inside it coming from the server.
//What we are doing here is hydrating the existing DOM tree with event handlers and making our Javascript code live again. It is
//different from replacing. The DOM Tree should be identical to accomplish this. Here the DOM nodes inside the root are all same
//obviously beacuse clearly we rendering the Home component in server and on client side too.

//This is where the client is taking over the charge from server. :)
