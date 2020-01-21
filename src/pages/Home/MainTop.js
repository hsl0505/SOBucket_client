import React from 'react';
import PropTypes from 'prop-types';
import MainSearch from './MainSearch';
import MainNav from './MainNav';

export default function MainTop(props) {
  const {
    isLogin,
    searchClick,
    loginHandle,
    homeBtnHandle,
    userNickName,
  } = props;
  return (
    <div className="mainTop">
      <div className="mainTop_SnN">
        <MainSearch className="mainSearch" searchClick={searchClick} />
        <MainNav
          isLogin={isLogin}
          className="mainNav"
          loginHandle={loginHandle}
          homeBtnHandle={homeBtnHandle}
          userNickName={userNickName}
        />
      </div>
      <div className="mainImg">
        SO BUCKET
        <div className="mainImg_text">Spread Out BUCKETS!</div>
      </div>
    </div>
  );
}

MainTop.defaultProps = {
  isLogin: false,
  searchClick: () => {},
  loginHandle: () => {},
  homeBtnHandle: () => {},
  userNickName: '',
};

MainTop.propTypes = {
  isLogin: PropTypes.bool,
  searchClick: PropTypes.func,
  loginHandle: PropTypes.func,
  homeBtnHandle: PropTypes.func,
  userNickName: PropTypes.string,
};
