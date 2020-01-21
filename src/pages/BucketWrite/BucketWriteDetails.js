import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, TimePicker, DatePicker } from 'antd';
import moment from 'moment';
import Page from '../page';

export default function BucketWriteDetails(props) {
  const {
    handleFileInput,
    handlePost,
    handleSubmit,
    handleOnChange,
    title,
    content,
    image,
    expectedDate,
    isValidating,
  } = props;
  const dateFormat = 'YYYY-MM-DD';
  const timeFormat = 'HH:mm:ss';
  return (
    <Page crumbMenu={['Home', 'bucket', 'create']} isSignUpPage="true">
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
        </div>
      </div>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <Form>
          <Form.Item label="Title" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={title}
              onChange={e => handleOnChange(e, 'title')}
            />
          </Form.Item>
          <Form.Item label="Content" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={content}
              onChange={e => handleOnChange(e, 'content')}
            />
          </Form.Item>
          <Form.Item label="image" validateStatus={isValidating} hasFeedback>
            <Input
              type="file"
              value={image}
              onChange={e => {
                handleOnChange(e, 'image');
                handleFileInput(e);
              }}
            />
            <button type="submit" onClick={e => handlePost(e)}>
              upload image
            </button>
          </Form.Item>
          <Form.Item>
            <Input type="submit" value="create bucket" onClick={handleSubmit} />
            {/* <span>{errorMessage}</span> */}
          </Form.Item>
        </Form>
      </div>
    </Page>
  );
}

BucketWriteDetails.defaultProps = {
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  handleOnChange: () => {},
  title: '',
  content: '',
  image: '',
  expectedDate: new Date(),
  isValidating: '',
};

BucketWriteDetails.propTypes = {
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  expectedDate: PropTypes.string,
  isValidating: PropTypes.string,
};
