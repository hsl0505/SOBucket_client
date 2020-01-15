import React from 'react';
import { Modal, Button } from 'antd';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      visible: true,
      isPending: false,
      errorMessage: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
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

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleSubmitClick(e) {
    e.preventDefault();
    this.setState({ isPending: true });
    const { emailValue, passwordValue } = this.state;
    console.log({
      email: emailValue,
      password: passwordValue,
    });
    window
      .fetch('https://jsonplaceholder.typicode.com/posts', {
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
        this.setState({
          emailValue: '',
          passwordValue: '',
          isPending: false,
        });
        if (data === 'OK') {
          this.setState({ visible: false });
        } else {
          this.setState({ errorMessage: '실패했습니다' });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: error.toString(),
          isPending: false,
        });
      });
  }

  render() {
    const { handleOk, handleCancel, handleOnChange, handleSubmitClick } = this;
    const {
      emailValue,
      passwordValue,
      visible,
      isPending,
      errorMessage,
    } = this.state;
    return (
      <div>
        <Button onClick={this.showModal}>Open Modal</Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="LoginModal">
            <div>
              <label> Email </label>
              <input
                type="text"
                value={emailValue}
                onChange={e => handleOnChange(e, 'emailValue')}
                readOnly={isPending}
              />
            </div>
            <div>
              <label> Password </label>
              <input
                type="password"
                value={passwordValue}
                onChange={e => handleOnChange(e, 'passwordValue')}
                readOnly={isPending}
              />
            </div>
            <div>
              <label> Login </label>
              <input type="submit" onClick={e => handleSubmitClick(e)} />
              <span>{errorMessage}</span>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
