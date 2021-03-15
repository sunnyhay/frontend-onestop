import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

import { CollegesList } from "./features/colleges/CollegesList";
import { SearchColleges } from "./features/colleges/SearchColleges";
import { SingleCollegePage } from "./features/colleges/SingleCollegePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SearchColleges />
                <CollegesList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/colleges/:collegeId"
            component={SingleCollegePage}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
