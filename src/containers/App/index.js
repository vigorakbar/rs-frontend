import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Donation from 'containers/Donation';
import Login from 'containers/admins/Login';
import AdminTestPage from 'containers/admins/Test';
import ProtectedRoute from './ProtectedRoute';

const renderNotFound = () => (
  <div>
    Page not found
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/donation" component={Donation} />
    <ProtectedRoute exact path="/admin/test" component={AdminTestPage} />
    <Route component={() => renderNotFound()} />
  </Switch>
);

export default App;
