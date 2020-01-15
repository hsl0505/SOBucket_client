import React from 'react';
import { Modal } from 'antd';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      isPending: false,
      errorMessage: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleOnChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  handleSubmitClick(e) {
    console.log(e);
    this.setState({ isPending: true });
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
        this.setState({
          emailValue: '',
          passwordValue: '',
          isPending: false,
        });
        if (data.id !== undefined) {
          hideModal();
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
    const { handleCancel, visible } = this.props;
    const { handleOnChange, handleSubmitClick } = this;
    const { emailValue, passwordValue, isPending, errorMessage } = this.state;
    return (
      <Modal
        title="Login"
        visible={visible}
        okText="login"
        onOk={handleSubmitClick}
        onCancel={handleCancel}
      >
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
        <span>{errorMessage}</span>
      </Modal>
    );
  }
}

export default LoginModal;
