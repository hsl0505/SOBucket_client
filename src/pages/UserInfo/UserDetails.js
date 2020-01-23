import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Button, Descriptions, Input } from 'antd';

import Page from '../page';

export default function UserDetails(props) {
  const {
    email,
    username,
    userNickName,
    phone,
    avatar,
    createdAt,
    handleFileInput,
    handlePost,
    isLogin,
  } = props;
  return (
    <Page crumbMenu={['Home', 'Mypage', 'UserInfo']} isLogin={isLogin}>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="User Information"
        subTitle={username}
        extra={[
          <Button type="primary" size="large" key={1}>
            회원정보 변경
          </Button>,
          <Button type="primary" size="large" style={{ margin: '5px' }} key={2}>
            탈퇴
          </Button>,
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
  handleFileInput: '',
  handlePost: '',
  isLogin: false,
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
};
