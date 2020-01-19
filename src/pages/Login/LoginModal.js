import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      isValidating: 'false',
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
    const { hideModal } = this.props;
    const { emailValue, passwordValue } = this.state;
    console.log({
      email: emailValue,
      password: passwordValue,
    });
    window
      .fetch('https://jsonplaceholder.typicode.com/posts', {
        //   .fetch('https://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          typ: 'JWT',
          alg: 'This is Token',
        },
        body: {
          email: emailValue,
          password: passwordValue,
        },
      })
      .then(data => {
        if (data.id !== undefined) {
          this.setState({
            isValidating: 'success',
          });
          hideModal();
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
};

LoginModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  handleCancel: PropTypes.func,
};

// export default LoginModal;
