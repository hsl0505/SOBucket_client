/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    const { email, nickname, phone } = this.props;
    this.state = {
      emailValue: email,
      nicknameValue: nickname,
      phoneValue: phone,
      isValidating: '',
      errorMessage: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleSubmitClick(e) {
    console.log(e);
    this.setState({ isValidating: 'validating' });
    const { hideModal, loginHandle, history } = this.props;
    const { emailValue, usernameValue } = this.state;
    console.log({
      email: emailValue,
      username: usernameValue,
    });
    window
      .fetch('http://127.0.0.1:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
          username: usernameValue,
        }),
        credentials: 'include',
      })
      .then(result => result.json())
      .then(data => {
        console.log('data', data);
        if (data.id !== undefined) {
          this.setState({
            isValidating: 'success',
          });
          hideModal();
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('userNickName', `${data.userNickName}`);
          loginHandle(data.userNickName);
          history.replace('/');
        } else {
          this.setState({
            errorMessage: '실패했습니다',
            isValidating: 'error',
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: error.toString(),
          isValidating: 'error',
        });
      });
  }

  render() {
    const { handleCancel, visible } = this.props;
    const { handleOnChange, handleSubmitClick } = this;
    const {
      emailValue,
      nicknameValue,
      phoneValue,
      isValidating,
      errorMessage,
    } = this.state;
    return (
      <Modal
        title="User Information Change"
        visible={visible}
        okText="Change"
        onOk={handleSubmitClick}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Email" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={emailValue}
              onChange={e => handleOnChange(e, 'emailValue')}
            />
          </Form.Item>
          <Form.Item
            label="userNickName"
            validateStatus={isValidating}
            hasFeedback
          >
            <Input
              type="text"
              value={nicknameValue}
              onChange={e => handleOnChange(e, 'nicknameValue')}
            />
          </Form.Item>
          <Form.Item label="Phone" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={phoneValue}
              onChange={e => handleOnChange(e, 'phoneValue')}
            />
          </Form.Item>
          <span>{errorMessage}</span>
        </Form>
      </Modal>
    );
  }
}

LoginModal.defaultProps = {
  visible: false,
  hideModal: () => {},
  handleCancel: () => {},
  loginHandle: () => {},
  history: '',
  email: '',
  nickname: '',
  phone: '',
};

LoginModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  handleCancel: PropTypes.func,
  loginHandle: PropTypes.func,
  history: PropTypes.any,
  email: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.string,
};

export default withRouter(LoginModal);
