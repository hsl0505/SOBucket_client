/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
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
    const { emailValue, passwordValue } = this.state;
    console.log({
      email: emailValue,
      password: passwordValue,
    });
    window
      .fetch('http://127.0.0.1:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
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
          loginHandle();
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
      passwordValue,
      isValidating,
      errorMessage,
    } = this.state;
    return (
      <Modal
        title="Login"
        visible={visible}
        okText="login"
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
          <Form.Item label="Password" validateStatus={isValidating} hasFeedback>
            <Input.Password
              value={passwordValue}
              onChange={e => handleOnChange(e, 'passwordValue')}
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
};

LoginModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  handleCancel: PropTypes.func,
  loginHandle: PropTypes.func,
  history: PropTypes.any,
};

export default withRouter(LoginModal);
