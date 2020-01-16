import React from 'react';
import PropTypes from 'prop-types';
import MainSearch from './MainSearch';
import MainNav from './MainNav';

export default function MainTop(props) {
  const { isLogin } = props;
  return (
    <div>
      <MainSearch />
      <MainNav isLogin={isLogin} />
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
