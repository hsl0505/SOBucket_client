import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';
import testimg from '../../img/test_img.jpg';

export default function TodayBucket(props) {
  const { Meta } = Card;
  const { todayBucket, todayBucketListLoad } = props;

  return (
    <div className="todaybucket">
      <Card
        className="todaybucketCard"
        hoverable
        cover={
          todayBucketListLoad ? (
            <div>example</div>
          ) : (
            <img className="testimg" alt="example" src={testimg} />
          )
        }
      >
        <Skeleton loading={todayBucketListLoad}>
          <Meta title={todayBucket.userName} description={todayBucket.title} />
          {todayBucket.like}
          퍼가요
        </Skeleton>
      </Card>
    </div>
  );
}

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
