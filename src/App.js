import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalHeader from './components/Header';
import Home from './routes/Home/Home';
import About from './routes/About';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/(about|)" component={GlobalHeader} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  )
}

export default AppRouter;
