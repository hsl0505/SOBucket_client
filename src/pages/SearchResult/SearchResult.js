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
      //   searchBuckets: [],
      // fake data
      searchBuckets: [
        { id: 0, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 1, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 2, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 3, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 4, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 5, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 6, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 7, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 8, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 9, userName: '임현성', title: 'test', like: 5, mylike: false },
      ],
      bucketListLoad: false,
    };
  }

  componentDidMount() {
    // const { searchValue } = this.props;
    // fetch(`http://localhost:3001/buckets/search/?q=${searchValue}`, {
    //   method: 'GET',
    //   credentials: 'include',
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       searchBuckets: result.searchBuckets,
    //       bucketListLoad: false,
    //     });
    //   });
  }

  render() {
    const { searchValue, searchClick, isLogin } = this.props;
    const { searchBuckets, bucketListLoad } = this.state;

    const arrMap = searchBuckets.map(ele => (
      <Bucket
        key={ele.id}
        bucket={ele}
        isLogin={isLogin}
        bucketListLoad={bucketListLoad}
      />
    ));

    return (
      <div className="searchResult">
        <div className="searchResult_top">
          <MainSearch searchClick={searchClick} />
          <MainNav />
        </div>
        <h3 className="searchResult_title">{`${searchValue} 에 대한 buckets !`}</h3>
        <div className="searchBucketList">
          {searchBuckets.length === 0 ? (
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
};

SearchResult.propTypes = {
  searchValue: PropTypes.string,
  searchClick: PropTypes.func,
  isLogin: PropTypes.bool,
};
