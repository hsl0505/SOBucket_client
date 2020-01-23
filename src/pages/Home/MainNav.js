/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import LoginModalButton from '../Login/LoginModalButton';

function MainNav(props) {
  const { isLogin, loginHandle, history, homeBtnHandle, userNickName } = props;

  function logoutHandle() {
    fetch('http://127.0.0.1:3001/user/logout', {
      method: 'POST',
      body: {},
      credentials: 'include',
    }).then(() => {
      console.log('bye');
      localStorage.removeItem('isLogin');
      localStorage.removeItem('userNickName');
      loginHandle();
      history.replace('/');
    });
  }

  if (!isLogin) {
    return (
      <div className="mainNav">
        <div className="mainLogo"></div>
        <div className="mainNav_user">
          <div className="mainNav_user_avatar">{userNickName}</div>
          <div className="mainNav_user_NickName">{userNickName}</div>
        </div>
        <Button
          className="mainNav_homeBtn"
          type="primary"
          size="large"
          onClick={() => {
            homeBtnHandle();
            history.replace('/');
          }}
        >
          Home
        </Button>

        <LoginModalButton loginHandle={loginHandle} />
        <Button
          className="mainNav_signupBtn"
          type="primary"
          size="large"
          onClick={() => {
            history.replace('/SignUp');
          }}
        >
          Sign Up
        </Button>
      </div>
    );
  }
  return (
    <div className="mainNav">
      <div className="mainLogo"></div>
      <div className="mainNav_user">
        <div className="mainNav_user_avatar">avatar</div>
        <div className="mainNav_user_NickName">{userNickName}</div>
      </div>
      <Button
        className="mainNav_homeBtn"
        type="primary"
        size="large"
        onClick={() => {
          homeBtnHandle();
          history.replace('/');
        }}
      >
        Home
      </Button>

      <Button
        className="mainNav_mypageBtn"
        type="primary"
        size="large"
        onClick={() => {
          history.replace('/mypage');
        }}
      >
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
  homeBtnHandle: () => {},
  userNickName: '',
};

MainNav.propTypes = {
  isLogin: PropTypes.bool,
  loginHandle: PropTypes.func,
  history: PropTypes.any,
  homeBtnHandle: PropTypes.func,
  userNickName: PropTypes.string,
};

export default withRouter(MainNav);
