/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

function MainSearch(props) {
  const { searchClick } = props;
  const { history } = props;
  return (
    <div className="mainSearch">
      <Search
        className="mainSearch_search"
        placeholder="찾고 싶은 Bucket 제목을 입력하세요"
        enterButton
        size="large"
        onSearch={value => {
          searchClick(value);
          history.replace('/');
        }}
      />
    </div>
  );
}

MainSearch.defaultProps = {
  searchClick: () => {},
  history: '',
};

MainSearch.propTypes = {
  searchClick: PropTypes.func,
  history: PropTypes.any,
};

export default withRouter(MainSearch);
