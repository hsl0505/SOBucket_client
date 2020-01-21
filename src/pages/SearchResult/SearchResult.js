import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import MainSearch from '../Home/MainSearch';
import MainNav from '../Home/MainNav';
import Bucket from '../Home/Bucket';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBuckets: [],
      bucketListLoad: true,
    };
  }

  componentDidMount() {
    const { searchValue } = this.props;
    fetch(`http://127.0.0.1:3001/buckets/search/?q=${searchValue}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        if (result.searchBuckets.length === 0) {
          this.setState({ searchBuckets: null });
        } else {
          this.setState({
            searchBuckets: result.searchBuckets,
            bucketListLoad: false,
          });
        }
      });
  }

  render() {
    const {
      searchValue,
      searchClick,
      isLogin,
      homeBtnHandle,
      loginHandle,
      userNickName,
    } = this.props;
    const { searchBuckets, bucketListLoad } = this.state;
    let arrMap;
    if (searchBuckets === null) {
      arrMap = <div>검색결과가 없습니다</div>;
    } else {
      arrMap = searchBuckets.map(ele => (
        <Bucket
          key={ele.id}
          bucket={ele}
          isLogin={isLogin}
          bucketListLoad={bucketListLoad}
        />
      ));
    }

    return (
      <div className="searchResult">
        <div className="searchResult_top">
          <MainSearch searchClick={searchClick} />
          <MainNav
            isLogin={isLogin}
            homeBtnHandle={homeBtnHandle}
            loginHandle={loginHandle}
            userNickName={userNickName}
          />
        </div>
        <h3 className="searchResult_title">{`${searchValue} 에 대한 buckets !`}</h3>
        <div className="searchBucketList">
          {Array.isArray(searchBuckets) && searchBuckets.length === 0 ? (
            <Icon className="searchBucket_loading" type="sync" spin />
          ) : (
            arrMap
          )}
        </div>
      </div>
    );
  }
}

SearchResult.defaultProps = {
  searchValue: '',
  searchClick: () => {},
  isLogin: false,
  homeBtnHandle: () => {},
  loginHandle: () => {},
  userNickName: '',
};

SearchResult.propTypes = {
  searchValue: PropTypes.string,
  searchClick: PropTypes.func,
  isLogin: PropTypes.bool,
  homeBtnHandle: PropTypes.func,
  loginHandle: PropTypes.func,
  userNickName: PropTypes.string,
};
