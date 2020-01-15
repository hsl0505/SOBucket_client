import React from 'react';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      isDisplay: 'none',
      isPending: false,
      errorMessage: '',
    };
  }

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({ isPending: true });
    const { emailValue, passwordValue } = this.state;
    window
      .fetch('url', {
        method: 'POST',
        body: {
          email: emailValue,
          password: passwordValue,
        },
      })
      .then(data => {
        this.setState({
          emailValue: '',
          passwordValue: '',
          isDisplay: 'none',
          isPending: false,
          errorMessage:
            data === 'OK' ? '성공적으로 가입되었습니다' : '실패했습니다',
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.toString(),
          isPending: false,
        });
      });
  }

  render() {
    const { handleOnChange, handleOnClick } = this;
    const {
      emailValue,
      passwordValue,
      isDisplay,
      isPending,
      errorMessage,
    } = this.state;
    return (
      <div className="LoginModal" style={{ display: isDisplay }}>
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
            type="text"
            value={passwordValue}
            onChange={e => handleOnChange(e, 'emailValue')}
            readOnly={isPending}
          />
        </div>
        <div>
          <label> Login </label>
          <input type="submit" onClick={e => handleOnClick(e)} />
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
}

export default LoginModal;
