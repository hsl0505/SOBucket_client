import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';

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
    const { loginHandle } = this.props;
    return (
      <div>
        <Button
          className="mainNav_loginBtn"
          type="primary"
          size="large"
          onClick={showModal}
        >
          Log In
        </Button>
        <LoginModal
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
          loginHandle={loginHandle}
        />
      </div>
    );
  }
}

LoginModalButton.defaultProps = {
  loginHandle: () => {},
};

LoginModalButton.propTypes = {
  loginHandle: PropTypes.func,
};
