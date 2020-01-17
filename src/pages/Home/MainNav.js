import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import LoginModalButton from '../Login/LoginModalButton';

export default function MainNav(props) {
  const { isLogin } = props;
  if (!isLogin) {
    return (
      <div>
        <LoginModalButton />
        <Button className="mainNav_signupBtn" type="primary" size="large">
          Sign Up
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button type="primary" size="large">
        Log Out
      </Button>
    </div>
  );
}

MainNav.defaultProps = {
  isLogin: false,
};

MainNav.propTypes = {
  isLogin: PropTypes.bool,
};
