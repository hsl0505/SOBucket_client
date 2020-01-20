import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';

import BucketInformations from './BucketInformations';
import RelatedInfos from './RelatedInfos';
import BucketReview from './BucketReview';
import Like from '../Home/Like';

export default function BucketDetails(props) {
  const { id, title, likeCount, user_id, expectedDate, image, isLogin } = props;
  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={title}
      subTitle={user_id}
      extra={[<Like likeCount={likeCount} isLogin={isLogin} bucketId={id} />]}
    >
      <div
        style={{
          backgroundColor: '#F5F5F5',
          padding: 24,
          opacity: 0.6,
        }}
      >
        <BucketInformations
          userId={user_id}
          expectedDate={expectedDate}
          image={image}
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
  expectedDate: new Date(),
  user_id: 0,
};

BucketDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  likeCount: PropTypes.number,
  expectedDate: PropTypes.any,
  user_id: PropTypes.number,
};
