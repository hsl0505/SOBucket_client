import React, { Component } from 'react';
import UserDetails from './UserDetails';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      nickname: null,
      phone: null,
      createdAt: null,
      selectedFile: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  //   componentDidMount() {
  //     fetch('http://localhost:3001/user/info', {
  //       method: 'GET',
  //     })
  //       .then(res => res.json())
  //       .then(result => {
  //         this.setState({ result: result });
  //       });
  //   }

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
      nickname,
      phone,
      createdAt,
      selectedFile,
    } = this.state;
    return (
      <div>
        <UserDetails
          email={email}
          username={username}
          nickname={nickname}
          phone={phone}
          createdAt={createdAt}
          selectedFile={selectedFile}
          handleFileInput={this.handleFileInput}
          handlePost={this.handlePost}
        />
      </div>
    );
  }
}
