/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { PageHeader, Button, Descriptions, Input } from 'antd';

import Page from '../page';
import UserUpdateModalButton from './UserUpdateModalButton';

function UserDetails(props) {
  const {
    email,
    username,
    userNickName,
    phone,
    avatar,
    createdAt,
    handleFileInput,
    handlePost,
    handleRerender,
    isLogin,
    loginHandle,
    homeBtnHandle,
    history,
  } = props;

  function resignHandle() {
    fetch('http://127.0.0.1:3001/user/resign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      credentials: 'include',
    }).then(result => {
      console.log(result);
      alert('탈퇴 되었습니다');
      loginHandle();
      history.replace('/');
    });
  }

  return (
    <Page
      crumbMenu={['Home', 'Mypage', 'UserInfo']}
      isLogin={isLogin}
      loginHandle={loginHandle}
      homeBtnHandle={homeBtnHandle}
    >
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="User Information"
        subTitle={username}
        extra={[
          <UserUpdateModalButton
            email={email}
            nickname={userNickName}
            phone={phone}
            handleRerender={handleRerender}
          >
            <Button
              type="primary"
              size="large"
              style={{ margin: '5px' }}
              onClick={resignHandle}
            >
              탈퇴
            </Button>
          </UserUpdateModalButton>,
        ]}
      >
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Username">{username}</Descriptions.Item>
          <Descriptions.Item label="UserNickname">
            {userNickName}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
          <Descriptions.Item label="Email" span={2}>
            {email}
          </Descriptions.Item>
          <Descriptions.Item label="SignupDate">{createdAt}</Descriptions.Item>

          <Descriptions.Item label="Profile">
            <img alt="profile" src={avatar} />
          </Descriptions.Item>
          <Descriptions.Item label="Profile Change" span={2}>
            <Input type="file" name="file" onChange={handleFileInput} />
            <Button
              type="primary"
              size="large"
              onClick={handlePost}
              style={{ marginTop: '5px' }}
            >
              프로필 사진 변경
            </Button>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </Page>
  );
}

UserDetails.defaultProps = {
  email: '',
  username: '',
  userNickName: '',
  phone: '',
  avatar: '',
  createdAt: '',
  handleFileInput: () => {},
  handlePost: () => {},
  isLogin: false,
  loginHandle: () => {},
  homeBtnHandle: () => {},
  handleRerender: () => {},
  history: '',
};

UserDetails.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  userNickName: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  createdAt: PropTypes.string,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  isLogin: PropTypes.bool,
  loginHandle: PropTypes.func,
  homeBtnHandle: PropTypes.func,
  handleRerender: PropTypes.func,
  history: PropTypes.any,
};

export default withRouter(UserDetails);
