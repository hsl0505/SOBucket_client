/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Statistic, TimePicker, DatePicker, Icon, Form, Input } from 'antd';
import testimg from '../../img/test_img.jpg';
import BucketUpdateModalButton from './BucketUpdateModalButton';

const { Countdown } = Statistic;

export default function BucketInformations(props) {
  const {
    id, //
    expectedDate, //
    content, //
    image, //
    likeButton,
    forkButton,
    //이하 추가됨
    handleModify,
    modify,

    handleFileInput, //
    handlePost, //
    handleSubmit, //
    handleOnChange, //
    handleDateChange,
    handleTimeChange,
    handleContentOnChange,
    title, //
    isValidating, //
    errorMessage, //
  } = props;

  const dateFormat = 'YYYY-MM-DD';
  const timeFormat = 'HH:mm:ss';
  console.log('modify : ', modify);
  return (
    <>
      <div className="bucketInfoDate">
        <div className="center">
          <div className="expectedDate">
            <span>예정 일자</span>
            <DatePicker
              defaultValue={moment()}
              format={dateFormat}
              onChange={e => {
                handleDateChange(e);
              }}
            />
            <TimePicker
              defaultValue={moment()}
              format={timeFormat}
              onChange={e => {
                handleTimeChange(e);
              }}
            />
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
            <BucketUpdateModalButton
              id={id}
              expectedDate={expectedDate}
              content={content}
              image={image}
              handleFileInput={handleFileInput}
              handlePost={handlePost}
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleDateChange={handleDateChange}
              handleTimeChange={handleTimeChange}
              handleContentOnChange={handleContentOnChange}
              title={title}
              isValidating={isValidating}
              errorMessage={errorMessage}
              onClick={() => {
                handleModify();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

BucketInformations.defaultProps = {
  image: '',
  expectedDate: new Date(),
  user_id: 0,
  content: 'content',
  modify: false,
  handleModify: () => {},
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  handleOnChange: () => {},
  handleDateChange: () => {},
  handleTimeChange: () => {},
  handleContentOnChange: () => {},
  title: '',
  isValidating: '',
  errorMessage: '',
};

BucketInformations.propTypes = {
  image: PropTypes.string,
  expectedDate: PropTypes.string,
  user_id: PropTypes.number,
  content: PropTypes.string,
  modify: PropTypes.bool,
  handleModify: PropTypes.func,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  handleContentOnChange: PropTypes.func,
  title: PropTypes.string,
  isValidating: PropTypes.string,
  errorMessage: PropTypes.string,
};
