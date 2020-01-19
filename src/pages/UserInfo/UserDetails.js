import React from 'react';
import PropTypes from 'prop-types';

export default function UserDetails(props) {
  const {
    email,
    username,
    nickname,
    phone,
    createdAt,
    handleFileInput,
    handlePost,
  } = props;
  return (
    <div>
      <div>{email}</div>
      <div>{username}</div>
      <div>{nickname}</div>
      <button type="button">check same nickname</button>
      <button type="button">change password</button>
      <div>{phone}</div>
      <div>{createdAt}</div>
      <img alt="profile" src="" />
      <input type="file" name="file" onChange={handleFileInput} />
      <button type="button" onClick={handlePost}>
        change profile
      </button>
      <button type="button">resign</button>
      <button type="submit">resign</button>
    </div>
  );
}

UserDetails.defaultProps = {
  email: '',
  username: '',
  nickname: '',
  phone: '',
  createdAt: '',
  handleFileInput: '',
  handlePost: '',
};

UserDetails.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.string,
  createdAt: PropTypes.string,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
};
