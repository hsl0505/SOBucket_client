import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import BucketDetailPage from './pages/Details/BucketDetailPage';
// import SignUpPage from './pages/SignUp/SignUpPage';
import MyPage from './pages/Mypage/MyPage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      isLogin: false,
    };

    this.searchClick = this.searchClick.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
    this.homeBtnHandle = this.homeBtnHandle.bind(this);
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

  homeBtnHandle() {
    this.setState({ searchValue: '' });
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
                homeBtnHandle={this.homeBtnHandle}
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
                homeBtnHandle={this.homeBtnHandle}
                loginHandle={this.loginHandle}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => {
              if (searchValue !== '') {
                return <Redirect to="/SearchResult" />;
              }
              return <Redirect to="/Home" />;
            }}
          />
          <Route
            path="/bucket/detail/:id"
            render={() => <BucketDetailPage isLogin={isLogin} />}
          />
          <Route
            path="/mypage"
            render={() => {
              // if (isLogin) {
              return <MyPage isLogin={isLogin} />;
              // }
              // return <Redirect to="/Home" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
