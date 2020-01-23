/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal, Form, Input, DatePicker } from 'antd';
import moment from 'moment';

class BucketUpdateModal extends React.Component {
  render() {
    const {
      id,
      expectedDate,
      content,
      // image,
      handleFileInput,
      handlePost,
      handleSubmit,
      // handleOnChange,
      handleDateChange,
      handleContentOnChange,
      handleTitleOnChange,
      // handleTimeChange,
      title,
      isValidating,
      errorMessage,
      hideModal,
      visible,
      handleCancel,
    } = this.props;
    const dateFormat = 'YYYY-MM-DD';

    return (
      <Modal
        title="Bucket list modify"
        visible={visible}
        okText="Modify"
        onOk={() => {
          handleSubmit(id);
          hideModal();
        }}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Expected Date"
            validateStatus={isValidating}
            hasFeedback
          >
            <DatePicker
              defaultValue={moment(expectedDate)}
              format={dateFormat}
              onChange={e => {
                handleDateChange(e);
              }}
            />
          </Form.Item>
          <Form.Item label="Title" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={title}
              onChange={e => handleTitleOnChange(e, 'title')}
            />
          </Form.Item>
          <Form.Item label="Content" validateStatus={isValidating} hasFeedback>
            <Input
              type="text"
              value={content}
              onChange={e => handleContentOnChange(e)}
            />
          </Form.Item>
          <Form.Item label="image" validateStatus={isValidating} hasFeedback>
            <Input
              type="file"
              //   value={image}
              onChange={e => {
                // handleOnChange(e, 'image');
                handleFileInput(e);
              }}
            />
            <button type="submit" onClick={e => handlePost(e)}>
              upload image
            </button>
          </Form.Item>
          <span>{errorMessage}</span>
        </Form>
      </Modal>
    );
  }
}

BucketUpdateModal.defaultProps = {
  id: 0,
  // image: '',
  expectedDate: new Date(),
  content: 'content',
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  // handleOnChange: () => {},
  handleDateChange: () => {},
  handleCancel: () => {},
  hideModal: () => {},
  handleContentOnChange: () => {},
  handleTitleOnChange: () => {},
  visible: false,
  title: '',
  isValidating: '',
  errorMessage: '',
};

BucketUpdateModal.propTypes = {
  id: PropTypes.number,
  // image: PropTypes.string,
  expectedDate: PropTypes.string,
  content: PropTypes.string,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  // handleOnChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleCancel: PropTypes.func,
  hideModal: PropTypes.func,
  handleContentOnChange: PropTypes.func,
  handleTitleOnChange: PropTypes.func,
  visible: PropTypes.bool,
  title: PropTypes.string,
  isValidating: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default withRouter(BucketUpdateModal);
