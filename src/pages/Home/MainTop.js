import React from 'react';
import PropTypes from 'prop-types';
import MainSearch from './MainSearch';
import MainNav from './MainNav';

export default function MainTop(props) {
  const { isLogin } = props;
  return (
    <div className="mainTop">
      <div className="mainTop_SnN">
        <MainSearch className="mainSearch" />
        <MainNav isLogin={isLogin} className="mainNav" />
      </div>
      <div className="mainImg">img</div>
    </div>
  );
}

MainTop.defaultProps = {
  isLogin: false,
};

MainTop.propTypes = {
  isLogin: PropTypes.bool,
};
