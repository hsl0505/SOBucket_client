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

function Bucket(props) {
  const { Meta } = Card;
  const { bucket, bucketListLoad, isLogin, history } = props;
  const { id } = bucket;
  return (
    <div className="bucket">
      <Card
        className="bucketCard"
        hoverable
        cover={
          bucketListLoad ? (
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
        <Skeleton className="bucketCard_skeleton" loading={bucketListLoad}>
          <Meta
            className="bucketCard_meta"
            title={bucket.title}
            description={bucket.userNickName}
          />
        </Skeleton>
        <div className="btns">
          <Like
            likeCount={bucket.likeCount}
            isLogin={isLogin}
            mylike={bucket.mylike}
            bucketId={bucket.id}
          />
          <GetBucket isLogin={isLogin} bucket={bucket} />
        </div>
      </Card>
    </div>
  );
}

Bucket.defaultProps = {
  bucket: {},
  bucketListLoad: true,
  isLogin: false,
  history: '',
};

Bucket.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    userNickName: PropTypes.string,
    title: PropTypes.string,
    likeCount: PropTypes.number,
    mylike: PropTypes.bool,
  }),
  bucketListLoad: PropTypes.bool,
  isLogin: PropTypes.bool,
  history: PropTypes.any,
};

export default withRouter(Bucket);
