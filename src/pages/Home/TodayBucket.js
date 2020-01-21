/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';
import Like from './Like';
import GetBucket from './GetBucket';
import testimg from '../../img/test_img.jpg';

function TodayBucket(props) {
  const { Meta } = Card;
  const { todayBucket, todayBucketListLoad, isLogin, history } = props;
  const { id } = todayBucket;

  return (
    <div className="todaybucket">
      <Card
        className="todaybucketCard"
        hoverable
        cover={
          todayBucketListLoad ? (
            <div>example</div>
          ) : (
            <img
              style={{
                borderTopRightRadius: '40px',
                borderTopLeftRadius: '40px',
              }}
              className="testimg"
              alt="example"
              src={testimg}
              onClick={() => {
                history.push(`/bucket/detail/${id}`);
              }}
            />
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
  history: '',
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
  history: PropTypes.any,
};

export default withRouter(TodayBucket);
