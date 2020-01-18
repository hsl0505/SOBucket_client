import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

export default function BucketList(props) {
  const { bucketList, bucketListLoad, isLogin } = props;
  const arrMap = bucketList.map(ele => (
    <Bucket
      key={ele.id}
      bucket={ele}
      bucketListLoad={bucketListLoad}
      isLogin={isLogin}
    />
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
  isLogin: false,
};

BucketList.propTypes = {
  bucketList: PropTypes.arrayOf(PropTypes.object),
  bucketListLoad: PropTypes.bool,
  isLogin: PropTypes.bool,
};
