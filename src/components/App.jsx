import React from "react";
import { HashRouter  as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Skill from "./Skill";
import Random from "./Random";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop component

const App = () => {
  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/skill" exact component={Skill} />
        <Route path="/random" exact component={Random} />
      </Switch>
    </Router>
  );
};

export default App;
