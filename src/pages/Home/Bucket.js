import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';

const Bucket = props => {
  const { Meta } = Card;
  const { bucket, bucketListLoad } = props;

  return (
    <div>
      <Card hoverable>
        <Skeleton loading={bucketListLoad}>
          <Meta title={bucket.userName} description={bucket.title} />
          {bucket.like}
          퍼가요
        </Skeleton>
      </Card>
    </div>
  );
};

Bucket.defaultProps = {
  bucket: {},
  bucketListLoad: true,
};

Bucket.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    title: PropTypes.string,
    like: PropTypes.number,
  }),
  bucketListLoad: PropTypes.bool,
};

export default Bucket;
