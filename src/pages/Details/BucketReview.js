import React from 'react';
import { Input, Divider } from 'antd';

export default function BucketReview() {
  return (
    <div className="bucketReview">
      <Divider orientation="left" style={{ fontSize: '24px' }}>
        댓글
      </Divider>
      <Input placeholder="title" />
      <Input placeholder="body" />
      <button type="button">저장 - 수정</button>
    </div>
  );
}
