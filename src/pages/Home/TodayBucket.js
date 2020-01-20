import React from 'react';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';
import Like from './Like';
import GetBucket from './GetBucket';
import testimg from '../../img/test_img.jpg';

export default function TodayBucket(props) {
  const { Meta } = Card;
  const { todayBucket, todayBucketListLoad, isLogin } = props;

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
        <Skeleton className="bucketCard_skeleton" loading={todayBucketListLoad}>
          <Meta
            className="bucketCard_meta"
            title={todayBucket.title}
            description={todayBucket.userNickName}
          />
        </Skeleton>
        <div className="btns">
          <Like
            likeCount={todayBucket.likeCount}
            isLogin={isLogin}
            mylike={todayBucket.mylike}
            bucketId={todayBucket.id}
          />
          <GetBucket isLogin={isLogin} bucket={todayBucket} />
        </div>
      </Card>
    </div>
  );
}

TodayBucket.defaultProps = {
  todayBucket: {},
  todayBucketListLoad: true,
  isLogin: false,
};

TodayBucket.propTypes = {
  todayBucket: PropTypes.shape({
    id: PropTypes.number,
    userNickName: PropTypes.string,
    title: PropTypes.string,
    likeCount: PropTypes.number,
    mylike: PropTypes.bool,
  }),
  todayBucketListLoad: PropTypes.bool,
  isLogin: PropTypes.bool,
};
