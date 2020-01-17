import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card, Skeleton } from 'antd';

export default function RelatedDetail(props) {
  const { Meta } = Card;
  const { relatedDetailLoad } = props;

  return (
    <div>
      <Card hoverable>
        <Skeleton loading={relatedDetailLoad}>
          <Meta title={bucket.userName} description={bucket.title} />
          {bucket.like}
          퍼가요
        </Skeleton>
      </Card>
    </div>
  );
}

RelatedDetail.defaultProps = {
  //   bucket: {},
  //   bucketListLoad: true,
};

RelatedDetail.propTypes = {
  //   bucket: PropTypes.shape({
  //     id: PropTypes.number,
  //     userName: PropTypes.string,
  //     title: PropTypes.string,
  //     like: PropTypes.number,
  //   }),
  //   bucketListLoad: PropTypes.bool,
};
