import React, { Component } from 'react';
import TodayBucket from './TodayBucket';

export default class TodayBucketList extends Component {
  render() {
    return (
      <div>
        오늘의 버킷 리스트
        <TodayBucket />
      </div>
    );
  }
}
