import React from "react";
import Main from "./components/Main";
import LandingPageContent from "./components/LandingPageContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Main" render={() => <Main />} />
        <Route path="/" component={() => <LandingPageContent />} />
      </Switch>
    </Router>
  );
}

export default App;
