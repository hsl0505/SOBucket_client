import React from 'react';
import { Modal, Button } from 'antd';
import LoginForm from './LoginForm';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { handleOk, handleCancel, hideModal } = this;
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.showModal}>Open Modal</Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <LoginForm hideModal={hideModal} />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
