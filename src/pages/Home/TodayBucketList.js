import React from 'react';
import PropTypes from 'prop-types';
import TodayBucket from './TodayBucket';

export default function TodayBucketList(props) {
  const { todayBucketList, todayBucketListLoad, isLogin } = props;
  const arrMap = todayBucketList.map(ele => (
    <TodayBucket
      key={ele.id}
      todayBucket={ele}
      todayBucketListLoad={todayBucketListLoad}
      isLogin={isLogin}
    />
  ));
  return (
    <div className="todayBucketlists">
      <h1 className="todayBucketsTitle">Best Buckets</h1>
      <div className="todayBucketlist">{arrMap}</div>
    </div>
  );
}

TodayBucketList.defaultProps = {
  todayBucketList: [],
  todayBucketListLoad: true,
  isLogin: false,
};

TodayBucketList.propTypes = {
  todayBucketList: PropTypes.arrayOf(PropTypes.object),
  todayBucketListLoad: PropTypes.bool,
  isLogin: PropTypes.bool,
};
