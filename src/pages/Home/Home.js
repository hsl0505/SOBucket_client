import React, { Component } from 'react';
import MainTop from './MainTop';
import BucketList from './BucketList';
import TodayBucketList from './TodayBucketList';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      // bucketList: null,
      bucketListLoad: true, // true는 로딩상태
      // fake data
      bucketList: [
        { id: 0, userName: '임현성', title: 'test', like: 5 },
        { id: 1, userName: '임현성', title: 'test', like: 5 },
        { id: 2, userName: '임현성', title: 'test', like: 5 },
      ],
      // todayBucketList : null,
      todayBucketListLoad: true, // true는 로딩상태
      // fake data
      todayBucketList: [
        { id: 0, userName: '임현성', title: 'test', like: 5 },
        { id: 1, userName: '임현성', title: 'test', like: 10 },
        { id: 2, userName: '임현성', title: 'test', like: 2 },
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/buckets/home', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({ bucketListLoad: false, bucketList: result.bucketList });
      });

    fetch('http://localhost:3001/buckets/home/today', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          todayBucketListLoad: false,
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

    return (
      <div>
        <MainTop />
        <BucketList bucketList={bucketList} bucketListLoad={bucketListLoad} />
        <TodayBucketList
          todayBucketList={todayBucketList}
          todayBucketListLoad={todayBucketListLoad}
        />
      </div>
    );
  }
}
