/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Bucket from './Bucket';

function BucketList(props) {
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
      <h1 className="bucketlistTitle">Here Buckets !</h1>
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

export default withRouter(BucketList);
