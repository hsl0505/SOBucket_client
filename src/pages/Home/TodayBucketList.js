import React from 'react';
import PropTypes from 'prop-types';
import TodayBucket from './TodayBucket';

const TodayBucketList = props => {
  const { todayBucketList } = props;
  const arrMap = todayBucketList.map(ele => (
    <TodayBucket key={ele.id} todayBucket={ele} />
  ));
  return (
    <div>
      <h2>오늘의 버킷 리스트</h2>
      {arrMap}
    </div>
  );
};

TodayBucketList.defaultProps = {
  todayBucketList: [],
};

TodayBucketList.propTypes = {
  todayBucketList: PropTypes.arrayOf(PropTypes.object),
};

export default TodayBucketList;
