import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';

const TodayBucket = props => {
  const { Meta } = Card;
  const { todayBucket, todayBucketListLoad } = props;

  return (
    <div>
      <Card hoverable>
        <Skeleton loading={todayBucketListLoad}>
          <Meta title={todayBucket.userName} description={todayBucket.title} />
          {todayBucket.like}
          퍼가요
        </Skeleton>
      </Card>
    </div>
  );
};

TodayBucket.defaultProps = {
  todayBucket: {},
  todayBucketListLoad: true,
};

TodayBucket.propTypes = {
  todayBucket: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    title: PropTypes.string,
    like: PropTypes.number,
  }),
  todayBucketListLoad: PropTypes.bool,
};

export default TodayBucket;
