import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

const BucketList = props => {
  const { bucketList, bucketListLoad } = props;
  const arrMap = bucketList.map(ele => (
    <Bucket key={ele.id} bucket={ele} bucketListLoad={bucketListLoad} />
  ));

  return <div>{arrMap}</div>;
};

BucketList.defaultProps = {
  bucketList: [],
  bucketListLoad: true,
};

BucketList.propTypes = {
  bucketList: PropTypes.arrayOf(PropTypes.object),
  bucketListLoad: PropTypes.bool,
};

export default BucketList;
