import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';

export default function BucketInformations(props) {
  const { user_id, expectedDate, image } = props;
  return (
    <Descriptions size="small" column={3}>
      <Descriptions.Item label="expectedDate">{expectedDate}</Descriptions.Item>
      <Descriptions.Item label="user_id">{user_id}</Descriptions.Item>
      <Descriptions.Item label="Image">{image}</Descriptions.Item>
      <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
      <Descriptions.Item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );
}

BucketInformations.defaultProps = {
  image: 'image',
  expectedDate: new Date(),
  user_id: 0,
};

BucketInformations.propTypes = {
  image: PropTypes.string,
  expectedDate: PropTypes.any,
  user_id: PropTypes.number,
};
