import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}
