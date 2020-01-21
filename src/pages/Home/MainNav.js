/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import LoginModalButton from '../Login/LoginModalButton';

function MainNav(props) {
  const { isLogin, loginHandle, history } = props;

  function logoutHandle() {
    fetch('http://127.0.0.1:3001/user/logout', {
      method: 'POST',
      body: {},
      credentials: 'include',
    }).then(() => {
      console.log('bye');
      localStorage.removeItem('isLogin');
      loginHandle();
      history.replace('/');
    });
  }

  if (!isLogin) {
    return (
      <div className="mainNav">
        <Button className="mainNav_homeBtn" type="primary" size="large">
          SO Bucket
        </Button>
        <LoginModalButton loginHandle={loginHandle} />
        <Button className="mainNav_signupBtn" type="primary" size="large">
          Sign Up
        </Button>
      </div>
    );
  }
  return (
    <div className="mainNav">
      <Button className="mainNav_homeBtn" type="primary" size="large">
        SO Bucket
      </Button>
      <Button className="mainNav_mypageBtn" type="primary" size="large">
        My Page
      </Button>
      <Button
        className="mainNav_logoutBtn"
        type="primary"
        size="large"
        onClick={logoutHandle}
      >
        Log Out
      </Button>
    </div>
  );
}

MainNav.defaultProps = {
  isLogin: false,
  loginHandle: () => {},
  history: '',
};

MainNav.propTypes = {
  isLogin: PropTypes.bool,
  loginHandle: PropTypes.func,
  history: PropTypes.any,
};

export default withRouter(MainNav);
