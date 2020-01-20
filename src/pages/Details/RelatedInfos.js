import React from 'react';
import PropTypes from 'prop-types';
import RelatedDetail from './RelatedDetail';

export default function RelatedInfos(props) {
  const { relatedClasses } = props;
  const arrMap = relatedClasses.map(ele => <RelatedDetail key={ele} />);

  return <div>{arrMap}</div>;
}

RelatedInfos.defaultProps = {
  relatedClasses: [],
};

RelatedInfos.propTypes = {
  relatedClasses: PropTypes.arrayOf(PropTypes.string),
};
