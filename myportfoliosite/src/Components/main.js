import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import NewsFeed from "./NewsFeed";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/news" component={NewsFeed} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
