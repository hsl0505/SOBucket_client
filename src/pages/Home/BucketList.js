import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

export default function BucketList(props) {
  const { bucketList, bucketListLoad } = props;
  const arrMap = bucketList.map(ele => (
    <Bucket key={ele.id} bucket={ele} bucketListLoad={bucketListLoad} />
  ));

  return (
    <div className="bucketlists">
      <h2 className="bucketlistTitle">Buckets !</h2>
      <div className="bucketlist">{arrMap}</div>
    </div>
  );
}

BucketList.defaultProps = {
  bucketList: [],
  bucketListLoad: true,
};

BucketList.propTypes = {
  bucketList: PropTypes.arrayOf(PropTypes.object),
  bucketListLoad: PropTypes.bool,
};
