import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "*",
    exact: true,
    component: () => <Redirect to="/" />
  }
];

export default routes;
