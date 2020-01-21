import React from 'react';
import PropTypes from 'prop-types';
import { Card, Skeleton } from 'antd';

export default function RelatedDetail(props) {
  const { Meta } = Card;
  const { relatedDetailLoad, _class } = props;

  return (
    <div>
      <Card hoverable>
        <Skeleton loading={relatedDetailLoad}>
          <Meta title={_class.title} description={_class.description} />
        </Skeleton>
      </Card>
    </div>
  );
}

RelatedDetail.defaultProps = {
  _class: {},
  relatedDetailLoad: true,
};

RelatedDetail.propTypes = {
  _class: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  relatedDetailLoad: PropTypes.bool,
};
