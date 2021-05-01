import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Pages from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/register" exact component={() => <Pages pageType="register" />} />
    <Route path="/login" exact component={() => <Pages pageType="login" />} />
    <Route path="/user" exact component={() => <Pages pageType="user" />} />
    <Route path="/administrator" exact component={() => <Pages pageType="administrator" />} />
    <Redirect path="/" to="/login" />
  </Switch>
);

export default Routes;
