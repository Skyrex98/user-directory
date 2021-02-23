import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import AllEmployees from "./components/AllEmployees";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={AllEmployees} />
        </Router>
      </div>
    );
  }
}

export default App;
