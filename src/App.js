import React from "react";
import Foods from "./components/Foods";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodDetails from "./components/FoodDetails";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Foods} />
          <Route path="/food-details/:label" component={FoodDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
