import React from 'react';

import BucketInformations from './BucketInformations';
import RelatedInfos from './RelatedInfos';
import BucketReview from './BucketReview';

export default function BucketDetails() {
  return (
    <>
      <BucketInformations />
      <RelatedInfos />
      <BucketReview />
    </>
  );
}
