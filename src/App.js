import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home/Home';
import BucketDetails from './pages/Details/BucketDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={() => <Home />} />
          <Route path="bucket/detail/:id" render={() => <BucketDetails />} />
        </Switch>
      </div>
    );
  }
}
