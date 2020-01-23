import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import UserUpdateModal from './UserUpdateModal';

export default class LoginModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { handleCancel, showModal, hideModal } = this;
    const { visible } = this.state;
    const {
      loginHandle,
      email,
      username,
      nickname,
      phone,
      children,
    } = this.props;
    return (
      <div>
        <Button type="primary" size="large" onClick={showModal}>
          회원정보 변경
        </Button>
        {children}
        <UserUpdateModal
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
          loginHandle={loginHandle}
          email={email}
          username={username}
          nickname={nickname}
          phone={phone}
        />
      </div>
    );
  }
}

LoginModalButton.defaultProps = {
  loginHandle: () => {},
  email: '',
  username: '',
  nickname: '',
  phone: '',
  children: '',
};

LoginModalButton.propTypes = {
  loginHandle: PropTypes.func,
  email: PropTypes.string,
  username: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.string,
  children: PropTypes.node,
};
