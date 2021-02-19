// MODULE
import React from "react";
// ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// STYLE
import "./styles/globalStyle.scss";
// PAGES
import { HomePage, DancingPage, CodingPage } from "./pages/";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dancing" component={DancingPage} />
        <Route path="/coding" component={CodingPage} />
      </Switch>
    </Router>
  );
};

export default App;
