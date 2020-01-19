import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
// import BucketDetails from './pages/Details/BucketDetails';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      isLogin: false,
    };

    this.searchClick = this.searchClick.bind(this);
  }

  searchClick(value) {
    this.setState({ searchValue: value });
  }

  render() {
    const { searchValue, isLogin } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/Home"
            render={() => (
              <Home searchClick={this.searchClick} isLogin={isLogin} />
            )}
          />
          {/* <Route path="bucket/detail/:id" render={() => <BucketDetails />} /> */}
          <Route
            exact
            path="/SearchResult"
            render={() => (
              <SearchResult
                searchValue={searchValue}
                searchClick={this.searchClick}
                isLogin={isLogin}
              />
            )}
          />
          <Route
            path="/"
            render={() => {
              if (searchValue !== '') {
                return <Redirect to="/SearchResult" />;
              }
              return <Redirect to="/Home" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
