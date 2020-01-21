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
    userNickName,
    avatar,
    isLogin,
  } = props;

  const likeButton = (
    <Like likeCount={likeCount} isLogin={isLogin} bucketId={id} key={1} />
  );

  const forkButton = (
    <GetBucket
      isLogin={isLogin}
      bucket={{
        id,
        title,
        image,
        content,
        userName: userNickName,
        expectedDate,
      }}
    />
  );

  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={title}
      subTitle={avatar + userNickName}
      extra={[likeButton]}
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
  userNickName: 'nickname',
  avatar: 'example ',
  isLogin: false,
};

BucketDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  likeCount: PropTypes.number,
  expectedDate: PropTypes.string,
  userNickName: PropTypes.string,
  avatar: PropTypes.string,
  user_id: PropTypes.number,
  isLogin: PropTypes.bool,
};
