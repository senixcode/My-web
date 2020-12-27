import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutMe } from "./page/AboutMe";
import { Projects } from "./page/Projects";

export const RouterSetup = () => {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Redirect to="/" />
    </Switch>
  );
};
