import React from 'react';
import { Button } from 'antd';
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
    const { handleOk, handleCancel, showModal, hideModal } = this;
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={showModal}>Open Modal</Button>
        {/* <Modal
          title="Login"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        > */}
        <LoginForm
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
        />
        {/* </Modal> */}
      </div>
    );
  }
}

export default LoginModal;
