import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Form, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import Page from '../page';

function BucketWriteDetails(props) {
  const {
    history,
    handleFileInput,
    handlePost,
    handleSubmit,
    handleOnChange,
    handleDateChange,
    handleTimeChange,
    title,
    content,
    image,
    // expectedDate,
    isValidating,
    errorMessage,
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
            <Input
              type="submit"
              value="create bucket"
              onClick={() => {
                handleSubmit();
                history.push('/mypage');
              }}
            />
            <span>{errorMessage}</span>
          </Form.Item>
        </Form>
      </div>
    </Page>
  );
}

export default withRouter(BucketWriteDetails);

BucketWriteDetails.defaultProps = {
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  handleOnChange: () => {},
  handleDateChange: () => {},
  handleTimeChange: () => {},
  title: '',
  content: '',
  image: '',
  // expectedDate: '',
  isValidating: '',
  errorMessage: '',
  history: '',
};

BucketWriteDetails.propTypes = {
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  // expectedDate: PropTypes.string,
  isValidating: PropTypes.string,
  errorMessage: PropTypes.string,
  history: PropTypes.any,
};
