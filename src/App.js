import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import BucketDetailPage from './pages/Details/BucketDetailPage';
import MyPage from './pages/Mypage/MyPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import BucketWrite from './pages/BucketWrite/BucketWrite';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      isLogin: false,
      userNickName: '',
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

  loginHandle(userNickName) {
    const { isLogin } = this.state;
    if (!isLogin) {
      this.setState({ isLogin: true, userNickName });
    } else {
      this.setState({ isLogin: false, userNickName: '' });
    }
  }

  searchClick(value) {
    this.setState({ searchValue: value });
  }

  homeBtnHandle() {
    this.setState({ searchValue: '' });
  }

  render() {
    const { searchValue, isLogin, userNickName } = this.state;

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
                userNickName={userNickName}
              />
            )}
          />
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
                userNickName={userNickName}
              />
            )}
          />
          <Route
            exact
            path="/SignUp"
            render={() => (
              <SignUpPage
                loginHandle={this.loginHandle}
                homeBtnHandle={this.homeBtnHandle}
              />
            )}
          />
          <Route
            exact
            path="/bucket/detail/:id"
            render={() => (
              <BucketDetailPage
                isLogin={isLogin}
                homeBtnHandle={this.homeBtnHandle}
              />
            )}
          />
          <Route
            exact
            path="/mypage"
            render={() => {
              // if (isLogin) {
              return (
                <MyPage isLogin={isLogin} homeBtnHandle={this.homeBtnHandle} />
              );
              // }
              // return <Redirect to="/Home" />;
            }}
          />
          <Route exact path="/create" render={() => <BucketWrite />} />
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
