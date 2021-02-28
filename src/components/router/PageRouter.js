import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../containers/pages/Home";
import Detail from "../../containers/pages/Detail";
function PageRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/:name" component={Detail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default PageRouter;
