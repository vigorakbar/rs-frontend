import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Login from 'containers/Login';

const renderNotFound = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={Login} />
      <Route component={() => renderNotFound()} />
    </Switch>
  </div>
);

export default App;
