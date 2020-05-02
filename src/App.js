import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history'

import StudentDetail from "./pages/student-detail";
import StudentIndex from './pages/student-index'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`/students/:studentId`} component={StudentDetail} />
        <Route exact path="/" component={StudentIndex} />
      </Switch>
    </Router>
  );
};

export default App;
