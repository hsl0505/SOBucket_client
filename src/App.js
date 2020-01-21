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
    this.loginHandle = this.loginHandle.bind(this);
  }

  componentDidMount() {
    const forLogin = localStorage.getItem('isLogin');
    if (forLogin === 'true') {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }

  loginHandle() {
    const { isLogin } = this.state;
    if (!isLogin) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
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
              <Home
                searchClick={this.searchClick}
                isLogin={isLogin}
                loginHandle={this.loginHandle}
              />
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
