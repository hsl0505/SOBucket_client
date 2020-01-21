import React from 'react';
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
    /* eslint-disable */
    return (
      <div>
        <div onClick={showModal}>Log In</div>
        <LoginModal
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
        />
      </div>
    );
  }
}
