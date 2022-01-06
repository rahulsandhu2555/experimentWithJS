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
import Git from "./GIT/git";
import DS from "./DS";
import ExtraTools from "./ExtraTools";
import JavaScript from "./JS/JavaScript";
import ReactComp from "./React/React";
import Test from "./Test";
import DataExtractionTool from "./ExtraTools/DataExtractionTool";

function Routes() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{}}>
        <Router>
          <div style={{}}>
            <Navbar />
          </div>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/test" component={Test} />
            <Route path="/array" component={ArrayPage} />
            <Route path="/git" component={Git} />
            <Route path="/ds" component={DS} />
            <Route path="/extra-tools" component={ExtraTools} />
            <Route path="/js/:topic/:subtopic" component={JavaScript} />
            <Route path="/react" component={ReactComp} />
            <Route path="/react/:topic/:subtopic" component={ReactComp} />
            <Route path="/data-extraction-tool" component={DataExtractionTool} />
            <Redirect from="/" to="/Home" />
            {/*<Redirect from="/" to="/test" />*/}
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default Routes;
