import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage,
    path: "/users",
  },
];
