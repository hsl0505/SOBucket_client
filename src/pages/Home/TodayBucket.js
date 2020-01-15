import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const TodayBucket = props => {
  const { Meta } = Card;
  const { todayBucket } = props;

  return (
    <div>
      <Card hoverable>
        <Meta title={todayBucket.userName} description={todayBucket.title} />
        {todayBucket.like}
        퍼가요
      </Card>
    </div>
  );
};

TodayBucket.defaultProps = {
  todayBucket: {},
};

TodayBucket.propTypes = {
  todayBucket: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    title: PropTypes.string,
    like: PropTypes.number,
  }),
};

export default TodayBucket;
