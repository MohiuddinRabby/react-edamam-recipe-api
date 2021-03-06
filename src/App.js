import React from "react";
import Foods from "./components/Foods";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Foods} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
