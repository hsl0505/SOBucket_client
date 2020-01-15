import React from 'react';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      nicknameValue: '',
      passwordValue: '',
      phoneValue: '',
      isPending: false,
      errorMessage: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({ isPending: true });
    const { emailValue, nicknameValue, passwordValue, phoneValue } = this.state;
    window
      .fetch('url', {
        method: 'POST',
        body: {
          email: emailValue,
          nickname: nicknameValue,
          password: passwordValue,
          phone: phoneValue,
        },
      })
      .then(data => {
        this.setState({
          emailValue: '',
          nicknameValue: '',
          passwordValue: '',
          phoneValue: '',
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
      nicknameValue,
      passwordValue,
      phoneValue,
      isPending,
      errorMessage,
    } = this.state;
    return (
      <div className="SignUpPage" className="modal">
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
          <label> Nickname </label>
          <input
            type="text"
            value={nicknameValue}
            onChange={e => handleOnChange(e, 'nicknameValue')}
            readOnly={isPending}
          />
        </div>
        <div>
          <label> Password </label>
          <input
            type="text"
            value={passwordValue}
            onChange={e => handleOnChange(e, 'passwordValue')}
            readOnly={isPending}
          />
        </div>
        <div>
          <label> Phone </label>
          <input
            type="text"
            value={phoneValue}
            onChange={e => handleOnChange(e, 'phoneValue')}
            readOnly={isPending}
          />
        </div>
        <div>
          <label> Submit </label>
          <input type="submit" onClick={e => handleOnClick(e)} />
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
