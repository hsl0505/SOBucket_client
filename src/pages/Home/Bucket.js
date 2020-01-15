import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const Bucket = props => {
  const { Meta } = Card;
  const { bucket } = props;
  return (
    <div>
      <Card hoverable>
        <Meta title={bucket.userName} description={bucket.title} />
        {bucket.like}
        퍼가요
      </Card>
    </div>
  );
};

Bucket.defaultProps = {
  bucket: {},
};

Bucket.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    title: PropTypes.string,
    like: PropTypes.number,
  }),
};

export default Bucket;
