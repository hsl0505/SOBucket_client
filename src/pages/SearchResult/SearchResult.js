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
      // fake data
      // searchBuckets: [
      //   { id: 0, userName: '임현성', title: 'test', like: 5, mylike: true },
      //   { id: 1, userName: '임현성', title: 'test', like: 5, mylike: true },
      //   { id: 2, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 3, userName: '임현성', title: 'test', like: 5, mylike: true },
      //   { id: 4, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 5, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 6, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 7, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 8, userName: '임현성', title: 'test', like: 5, mylike: false },
      //   { id: 9, userName: '임현성', title: 'test', like: 5, mylike: false },
      // ],
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
};

SearchResult.propTypes = {
  searchValue: PropTypes.string,
  searchClick: PropTypes.func,
  isLogin: PropTypes.bool,
  homeBtnHandle: PropTypes.func,
  loginHandle: PropTypes.func,
};
