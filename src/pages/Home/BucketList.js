import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

const BucketList = props => {
  const { bucketList } = props;
  const arrMap = bucketList.map(ele => <Bucket key={ele.id} bucket={ele} />);

  return <div>{arrMap}</div>;
};

BucketList.defaultProps = {
  bucketList: [],
};

BucketList.propTypes = {
  bucketList: PropTypes.arrayOf(PropTypes.object),
};

export default BucketList;
