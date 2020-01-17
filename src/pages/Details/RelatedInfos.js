import React from 'react';
import PropTypes from 'prop-types';
import RelatedDetail from './RelatedDetail';

export default function RelatedInfos() {
  const {} = props;
  const arrMap = aa.map(ele => <RelatedDetail key={} />);

  return <div>{arrMap}</div>;
}

RelatedInfos.defaultProps = {
  // bucketList: [],
  // bucketListLoad: true,
};

RelatedInfos.propTypes = {
  // bucketList: PropTypes.arrayOf(PropTypes.object),
  // bucketListLoad: PropTypes.bool,
};
