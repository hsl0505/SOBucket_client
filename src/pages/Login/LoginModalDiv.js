import React from 'react';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal';

export default class LoginModalDiv extends React.Component {
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
    /* eslint-disable */
    return (
      <div>
        <div onClick={showModal}>Log In</div>
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

LoginModalDiv.defaultProps = {
  loginHandle: () => {},
};

LoginModalDiv.propTypes = {
  loginHandle: PropTypes.func,
};
