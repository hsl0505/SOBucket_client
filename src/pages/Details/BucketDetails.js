/* eslint-disable prefer-template */
/* eslint-disable camelcase */
import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';

import BucketInformations from './BucketInformations';
import RelatedInfos from './RelatedInfos';
import BucketReview from './BucketReview';
import Like from '../Home/Like';
import GetBucket from '../Home/GetBucket';

export default function BucketDetails(props) {
  const {
    id,
    title,
    likeCount,
    user_id,
    content,
    expectedDate,
    image,
    user,
    isLogin,
    mylike,
    likeChangeHandle,
  } = props;

  const { userNickName, avatar } = user;

  const likeButton = (
    <Like
      likeCount={likeCount}
      isLogin={isLogin}
      bucketId={id}
      mylike={mylike}
      key={1}
      likeChangeHandle={likeChangeHandle}
    />
  );

  const forkButton = (
    <GetBucket
      isLogin={isLogin}
      bucket={{
        id,
        title,
        image,
        content,
        expectedDate,
      }}
    />
  );

  if (id === 0) {
    return (
      <div className="mypage_bucketDetail">
        <div className="mypage_bucketDetail_text">
          Look around your buckets !
        </div>
      </div>
    );
  }

  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={title}
      subTitle={avatar + ' ' + userNickName}
      style={{
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <div
        style={{
          backgroundColor: '#F5F5F5',
          padding: 24,
        }}
      >
        <BucketInformations
          userId={user_id}
          expectedDate={expectedDate}
          image={image}
          content={content}
          likeButton={likeButton}
          forkButton={forkButton}
        />
        <RelatedInfos />
        <BucketReview />
      </div>
    </PageHeader>
  );
}

BucketDetails.defaultProps = {
  id: 0,
  title: 'title',
  image: 'image',
  content: 'content',
  likeCount: 0,
  expectedDate: new Date().toISOString(),
  user_id: 0,
  user: {},
  isLogin: false,
  mylike: false,
  likeChangeHandle: () => {},
};

BucketDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  likeCount: PropTypes.number,
  expectedDate: PropTypes.string,
  user_id: PropTypes.number,
  isLogin: PropTypes.bool,
  user: PropTypes.shape({
    userNickName: PropTypes.string,
    avatar: PropTypes.string,
  }),
  mylike: PropTypes.bool,
  likeChangeHandle: PropTypes.func,
};
