/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

export default class UserUpdateModal extends React.Component {
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
    const { hideModal, handleRerender } = this.props;
    const { emailValue, nicknameValue, phoneValue } = this.state;
    fetch('http://127.0.0.1:3001/user/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        userNickName: nicknameValue,
        phone: phoneValue,
      }),
      credentials: 'include',
    })
      .then(result => {
        console.log(result);
        if (result) {
          this.setState({ isValidating: 'success' });
          handleRerender();
          hideModal();
        } else {
          this.setState({
            isValidating: 'warning',
            errorMessage: '실패하였습니다',
          });
        }
      })
      .catch(error => {
        this.setState({
          isValidating: 'error',
          errorMessage: error.toString(),
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

UserUpdateModal.defaultProps = {
  visible: false,
  hideModal: () => {},
  handleCancel: () => {},
  email: '',
  nickname: '',
  phone: '',
  handleRerender: () => {},
};

UserUpdateModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  handleCancel: PropTypes.func,
  email: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.string,
  handleRerender: PropTypes.func,
};
