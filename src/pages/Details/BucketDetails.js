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
    isMyPage,
    likeChangeHandle,
    handleModify,
    modify,
    handleFileInput,
    handlePost,
    handleSubmit,
    handleOnChange,
    handleDateChange,
    handleTimeChange,
    handleContentOnChange,
    isValidating,
    errorMessage,
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
      likeChangeHandle={likeChangeHandle}
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
          handleModify={handleModify}
          modify={modify}
          handleFileInput={handleFileInput}
          handlePost={handlePost}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          handleContentOnChange={handleContentOnChange}
          title={title}
          isValidating={isValidating}
          errorMessage={errorMessage}
          isMyPage={isMyPage}

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
  image: '',
  content: 'content',
  likeCount: 0,
  expectedDate: new Date().toISOString(),
  user_id: 0,
  user: {
    userNickName: 'nickname',
    avatar: 'example ',
  },
  isLogin: false,
  mylike: false,
  isMyPage: false,
  likeChangeHandle: () => {},
  handleModify: () => {},
  modify: false,
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  handleOnChange: () => {},
  handleDateChange: () => {},
  handleTimeChange: () => {},
  handleContentOnChange: () => {},
  isValidating: '',
  errorMessage: '',
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
  user: PropTypes.objectOf(PropTypes.string),
  mylike: PropTypes.bool,
  isMyPage: PropTypes.bool,
  likeChangeHandle: PropTypes.func,
  handleModify: PropTypes.func,
  modify: PropTypes.bool,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  handleContentOnChange: PropTypes.func,
  isValidating: PropTypes.string,
  errorMessage: PropTypes.string,
};
