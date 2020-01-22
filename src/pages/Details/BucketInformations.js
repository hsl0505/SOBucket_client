/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Statistic, TimePicker, DatePicker, Icon } from 'antd';
import testimg from '../../img/test_img.jpg';

const { Countdown } = Statistic;

export default function BucketInformations(props) {
  const {
    user_id,
    expectedDate,
    content,
    image,
    likeButton,
    forkButton,
  } = props;

  const dateFormat = 'YYYY-MM-DD';
  const timeFormat = 'HH:mm:ss';

  return (
    <>
      <div className="bucketInfoDate">
        <div className="center">
          <div className="expectedDate">
            <span>예정 일자</span>
            <DatePicker
              defaultValue={moment(expectedDate, dateFormat)}
              format={dateFormat}
            />
            <TimePicker defaultValue={moment(expectedDate, timeFormat)} />
          </div>
          <div className="countDown">
            <Countdown
              title="남은 시간"
              value={
                moment(expectedDate, dateFormat) +
                1000 * 60 * 60 * 24 * 2 +
                1000 * 30
              }
              onFinish={() => alert('끝!')}
            />
          </div>
        </div>
      </div>
      <div className="bucketInfoContent">
        <div className="content">{content}</div>
        <div className="image">
          {/* {image ? (
            <img src={image} alt="pidimg" />
          ) : ( */}
          <img src={testimg} alt="pidimg" />
          {/* )} */}
        </div>
      </div>
      <div className="buttons">
        <div className="likebtn">
          <div className="center">
            <span className="btnSpan">좋아요</span>
            {likeButton}
          </div>
        </div>
        <div className="forkbtn">
          <div className="center">
            <span className="btnSpan">퍼가기</span>
            {forkButton}
          </div>
        </div>
        <div className="finishbtn">
          <div className="center">
            <span className="btnSpan">완료</span>
            <Icon type="close" className="doneBtn_icon"></Icon>
          </div>
        </div>
        <div className="updatebtn">
          <div className="center">
            <span className="btnSpan">수정</span>
            <Icon type="edit" className="editBtn_icon"></Icon>
          </div>
        </div>
      </div>
    </>
  );
}

BucketInformations.defaultProps = {
  image: null,
  expectedDate: new Date(),
  user_id: 0,
  content: 'content',
};

BucketInformations.propTypes = {
  image: PropTypes.string,
  expectedDate: PropTypes.string,
  user_id: PropTypes.number,
  content: PropTypes.string,
};
