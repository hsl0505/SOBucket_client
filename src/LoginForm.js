import React from 'react';

class LoginForm extends React.Component {
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

  handleOnChange(e, key) {
    this.setState({
      [key]: e.target.value,
    });
  }

  handleSubmitClick(e) {
    e.preventDefault();
    this.setState({ isPending: true });
    const { hideModal } = this.props;
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
    const { handleOnChange, handleSubmitClick } = this;
    const { emailValue, passwordValue, isPending, errorMessage } = this.state;
    return (
      <>
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
      </>
    );
  }
}

export default LoginForm;
