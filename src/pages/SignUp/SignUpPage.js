import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

import Page from '../page';

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      usernameValue: '',
      nicknameValue: '',
      passwordValue: '',
      confirmPwd: '',
      phoneValue: '',
      profileValue: '',
      isValidating: '',
      errorMessage: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({ isValidating: 'validating' });
    const {
      emailValue,
      usernameValue,
      nicknameValue,
      passwordValue,
      confirmPwd,
      phoneValue,
      profileValue,
    } = this.state;
    if (passwordValue !== confirmPwd) {
      this.setState({
        errorMessage: '비밀번호 확인이 제대로 입력되지 않았습니다',
        isValidating: 'error',
      });
    } else {
      window
        .fetch('url', {
          method: 'POST',
          body: {
            email: emailValue,
            userName: usernameValue,
            nickname: nicknameValue,
            password: passwordValue,
            phone: phoneValue,
            avatar: profileValue,
          },
        })
        .then(data => {
          this.setState({
            isValidating: data === 'OK' ? 'success' : 'error',
            errorMessage:
              data === 'OK'
                ? '성공적으로 가입되었습니다'
                : '가입이 실패했습니다',
          });
        })
        .catch(error => {
          this.setState({
            errorMessage: error.toString(),
            isValidating: 'error',
          });
        });
    }
  }

  render() {
    const { handleOnChange, handleOnClick } = this;
    const {
      emailValue,
      usernameValue,
      nicknameValue,
      passwordValue,
      confirmPwd,
      phoneValue,
      profileValue,
      isValidating,
      errorMessage,
    } = this.state;
    const { loginHandle } = this.props;
    return (
      <Page
        crumbMenu={['Home', 'Signup']}
        isSignUpPage="true"
        loginHandle={loginHandle}
      >
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Form>
            <Form.Item label="Email" validateStatus={isValidating} hasFeedback>
              <Input
                type="text"
                value={emailValue}
                onChange={e => handleOnChange(e, 'emailValue')}
              />
            </Form.Item>
            <Form.Item
              label="userName"
              validateStatus={isValidating}
              hasFeedback
            >
              <Input
                type="text"
                value={usernameValue}
                onChange={e => handleOnChange(e, 'usernameValue')}
              />
            </Form.Item>
            <Form.Item
              label="Nickname"
              validateStatus={isValidating}
              hasFeedback
            >
              <Input
                type="text"
                value={nicknameValue}
                onChange={e => handleOnChange(e, 'nicknameValue')}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              validateStatus={isValidating}
              hasFeedback
            >
              <Input.Password
                value={passwordValue}
                onChange={e => handleOnChange(e, 'passwordValue')}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              validateStatus={isValidating}
              hasFeedback
            >
              <Input.Password
                value={confirmPwd}
                onChange={e => handleOnChange(e, 'confirmPwd')}
              />
            </Form.Item>
            <Form.Item label="Phone" validateStatus={isValidating} hasFeedback>
              <Input
                type="text"
                value={phoneValue}
                onChange={e => handleOnChange(e, 'phoneValue')}
              />
            </Form.Item>
            <Form.Item
              label="Profile"
              validateStatus={isValidating}
              hasFeedback
            >
              <Input
                type="file"
                value={profileValue}
                onChange={e => handleOnChange(e, 'profileValue')}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="submit"
                value="회원가입"
                onClick={e => handleOnClick(e)}
              />
              <span>{errorMessage}</span>
            </Form.Item>
          </Form>
        </div>
      </Page>
    );
  }
}

SignUpPage.defaultProps = {
  loginHandle: () => {},
};

SignUpPage.propTypes = {
  loginHandle: PropTypes.func,
};
