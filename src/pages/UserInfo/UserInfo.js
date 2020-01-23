/* eslint-disable */
import React, { Component } from 'react';
import UserDetails from './UserDetails';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '3@3',
      username: '임현성3',
      userNickName: '현성3',
      phone: '3-3-3',
      createdAt: '2020-01-21 00:59:36',
      selectedFile: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleChangeInput(data) {
    // this.setState({
    //   email: data.email,
    //   username: data.username,
    //   userNickName: data.userNickName,
    //   phone: data.phone,
    // });
    this.setState({ ...data });
  }

  componentDidMount() {
    fetch('http://localhost:3001/user/info', {
      method: 'GET',
    }).then(response => {
      // console.log(body.);

      const reader = response.body.getReader();
      let charsReceived = 0;

      reader.read('avatar').then(({ done, value }) => {
        // if (done) {
        //   console.log('Stream complete');
        //   para.textContent = value;
        //   return;
        // }

        console.log(value);
        return value;
      });
    });
  }

  //   handleSubmit() {}

  handleFileInput(e) {
    this.setState = {
      selectedFile: e.target.files[0],
    };
  }

  handlePost() {
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);

    return fetch('http://localhost:3001/user/avatar', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    })
      .then(res => {
        alert('업로드 성공!!!');
      })
      .catch(err => {
        alert('업로드 실패... 다시 시도 해주세요');
      });
  }

  render() {
    const {
      email,
      username,
      userNickName,
      phone,
      createdAt,
      selectedFile,
    } = this.state;
    const { isLogin } = this.props;
    return (
      <div>
        <UserDetails
          email={email}
          username={username}
          userNickName={userNickName}
          phone={phone}
          createdAt={createdAt}
          selectedFile={selectedFile}
          handleFileInput={this.handleFileInput}
          handlePost={this.handlePost}
          isLogin={isLogin}
        />
      </div>
    );
  }
}
