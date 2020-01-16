import React from 'react';
import PropTypes from 'prop-types';
import TodayBucket from './TodayBucket';

export default function TodayBucketList(props) {
  const { todayBucketList, todayBucketListLoad } = props;
  const arrMap = todayBucketList.map(ele => (
    <TodayBucket
      key={ele.id}
      todayBucket={ele}
      todayBucketListLoad={todayBucketListLoad}
    />
  ));
  return (
    <div>
      <h2>오늘의 버킷 리스트</h2>
      {arrMap}
    </div>
  );
}

TodayBucketList.defaultProps = {
  todayBucketList: [],
  todayBucketListLoad: true,
};

TodayBucketList.propTypes = {
  todayBucketList: PropTypes.arrayOf(PropTypes.object),
  todayBucketListLoad: PropTypes.bool,
};
