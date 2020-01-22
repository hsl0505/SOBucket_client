import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainTop from './MainTop';
import BucketList from './BucketList';
import TodayBucketList from './TodayBucketList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketList: [],
      bucketListLoad: true, // true는 로딩상태
      todayBucketList: [],
      todayBucketListLoad: true, // true는 로딩상태
    };
  }

  async componentDidMount() {
    const homeResult = await fetch('http://127.0.0.1:3001/buckets/home', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        return result.bucketList;
        // this.setState({ bucketListLoad: false, bucketList: result.bucketList });
      });
    await fetch('http://127.0.0.1:3001/buckets/home/today', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          bucketListLoad: false,
          todayBucketListLoad: false,
          bucketList: homeResult,
          todayBucketList: result.todayBucketList,
        });
      });
  }

  render() {
    const {
      bucketList,
      todayBucketList,
      bucketListLoad,
      todayBucketListLoad,
    } = this.state;

    const {
      searchClick,
      loginHandle,
      isLogin,
      homeBtnHandle,
      userNickName,
    } = this.props;

    return (
      <div className="home">
        <MainTop
          isLogin={isLogin}
          searchClick={searchClick}
          loginHandle={loginHandle}
          homeBtnHandle={homeBtnHandle}
          userNickName={userNickName}
        />
        <BucketList
          bucketList={bucketList}
          bucketListLoad={bucketListLoad}
          isLogin={isLogin}
        />
        <TodayBucketList
          todayBucketList={todayBucketList}
          todayBucketListLoad={todayBucketListLoad}
          isLogin={isLogin}
        />
      </div>
    );
  }
}

Home.defaultProps = {
  searchClick: () => {},
  isLogin: false,
  loginHandle: () => {},
  homeBtnHandle: () => {},
  userNickName: '',
};

Home.propTypes = {
  searchClick: PropTypes.func,
  isLogin: PropTypes.bool,
  loginHandle: PropTypes.func,
  homeBtnHandle: PropTypes.func,
  userNickName: PropTypes.string,
};
