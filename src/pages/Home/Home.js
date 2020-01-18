import React, { Component } from 'react';
import MainTop from './MainTop';
import BucketList from './BucketList';
import TodayBucketList from './TodayBucketList';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      // bucketList: null,
      bucketListLoad: false, // true는 로딩상태
      // fake data
      bucketList: [
        { id: 0, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 1, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 2, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 3, userName: '임현성', title: 'test', like: 5, mylike: true },
        { id: 4, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 5, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 6, userName: '임현성', title: 'test', like: 5, mylike: false },
        { id: 7, userName: '임현성', title: 'test', like: 5, mylike: false },
      ],
      // todayBucketList : null,
      todayBucketListLoad: false, // true는 로딩상태
      // fake data
      todayBucketList: [
        { id: 0, userName: '임현성', title: 'test', like: 5 },
        { id: 1, userName: '임현성', title: 'test', like: 10 },
        { id: 2, userName: '임현성', title: 'test', like: 2 },
        { id: 3, userName: '임현성', title: 'test', like: 8 },
      ],
    };
  }

  componentDidMount() {
    // fetch('http://localhost:3001/buckets/home', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({ bucketListLoad: false, bucketList: result.bucketList });
    //   });
    // fetch('http://localhost:3001/buckets/home/today', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       todayBucketListLoad: false,
    //       todayBucketList: result.todayBucketList,
    //     });
    //   });
  }

  render() {
    const {
      bucketList,
      todayBucketList,
      bucketListLoad,
      todayBucketListLoad,
      isLogin,
    } = this.state;

    return (
      <div className="home">
        <MainTop isLogin={isLogin} />
        <BucketList
          bucketList={bucketList}
          bucketListLoad={bucketListLoad}
          isLogin={isLogin}
        />
        <TodayBucketList
          todayBucketList={todayBucketList}
          todayBucketListLoad={todayBucketListLoad}
        />
      </div>
    );
  }
}
