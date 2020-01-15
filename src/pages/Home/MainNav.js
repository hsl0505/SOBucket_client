import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import LoginModalButton from '../Login/LoginModalButton';

export default class MainNav extends Component {
  render() {
    return (
      <div>
        {/* <Button className="mainNav_loginBtn" type="primary" size="large">
          Log In
        </Button> */}
        <LoginModalButton />
        <Button className="mainNav_signupBtn" type="primary" size="large">
          Sign Up
        </Button>
      </div>
    );
  }
}
