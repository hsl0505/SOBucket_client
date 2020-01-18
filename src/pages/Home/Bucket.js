import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';
import testimg from '../../img/test_img.jpg';

export default function Bucket(props) {
  const { Meta } = Card;
  const { bucket, bucketListLoad } = props;

  return (
    <div className="bucket">
      <Card
        className="bucketCard"
        hoverable
        cover={
          bucketListLoad ? (
            <div>example</div>
          ) : (
            <img className="testimg" alt="example" src={testimg} />
          )
        }
      >
        <Skeleton loading={bucketListLoad}>
          <Meta title={bucket.userName} description={bucket.title} />
          {bucket.like}
          퍼가요
        </Skeleton>
      </Card>
    </div>
  );
}

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
