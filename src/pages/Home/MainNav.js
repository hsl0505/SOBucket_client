import React from 'react';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import LoginModalButton from '../Login/LoginModalButton';

export default function MainNav(props) {
  const { isLogin } = props;
  if (!isLogin) {
    return (
      <div className="mainNav">
        <Button className="mainNav_homeBtn" type="primary" size="large">
          SO Bucket
        </Button>
        <LoginModalButton />
        <Button className="mainNav_signupBtn" type="primary" size="large">
          Sign Up
        </Button>
      </div>
    );
  }
  return (
    <div className="mainNav">
      <Button type="primary" size="large">
        SO Bucket
      </Button>
      <Button className="mainNav_mypageBtn" type="primary" size="large">
        My Page
      </Button>
      <Button className="mainNav_logoutBtn" type="primary" size="large">
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
