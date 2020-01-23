/* eslint-disable */
import React, { Component } from 'react';
import UserDetails from './UserDetails';

import { Skeleton } from 'antd';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '3@3',
      username: '임현성3',
      userNickName: '현성3',
      phone: '3-3-3',
      avatar: '',
      isLoaded: false,
      createdAt: '2020-01-21 00:59:36',
      selectedFile: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleRerender = this.handleRerender.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001/user/info', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          isLoaded: true,
          email: response.email,
          username: response.userName,
          userNickName: response.userNickName,
          phone: response.phone,
          avatar: response.avatar,
          createdAt: response.createdAt,
        });
      });
  }

  handleRerender() {
    this.setState({ isLoaded: false });
    fetch('http://127.0.0.1:3001/user/info', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          email: response.email,
          username: response.userName,
          userNickName: response.userNickName,
          phone: response.phone,
          avatar: response.avatar,
          createdAt: response.createdAt,
          isLoaded: true,
        });
      });
  }
  //   handleSubmit() {}

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });
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
      isLoaded,
      email,
      username,
      userNickName,
      phone,
      avatar,
      createdAt,
      selectedFile,
    } = this.state;
    const { isLogin, loginHandle, homeBtnHandle } = this.props;

    if (!isLoaded) {
      return (
        <div>
          <Skeleton />
        </div>
      );
    }
    return (
      <div>
        <UserDetails
          email={email}
          username={username}
          userNickName={userNickName}
          phone={phone}
          avatar={avatar}
          createdAt={createdAt}
          selectedFile={selectedFile}
          handleFileInput={this.handleFileInput}
          handlePost={this.handlePost}
          handleRerender={this.handleRerender}
          isLogin={isLogin}
          loginHandle={loginHandle}
          homeBtnHandle={homeBtnHandle}
        />
      </div>
    );
  }
}
