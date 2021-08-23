import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import ArrayPage from "./JS/Common/ArrayPage";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";

function Routes() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <Navbar />
      </div>
      <div style={{ width: "80%" }}>
        <Router>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/array" component={ArrayPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default Routes;
