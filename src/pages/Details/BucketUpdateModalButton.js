import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import BucketUpdateModal from './BucketUpdateModal';

export default class BucketUpdateModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { handleCancel, showModal, hideModal } = this;
    const { visible } = this.state;
    const {
      id,
      expectedDate,
      content,
      image,
      handleFileInput,
      handlePost,
      handleSubmit,
      handleOnChange,
      handleDateChange,
      handleTimeChange,
      handleContentOnChange,
      title,
      isValidating,
      errorMessage,
    } = this.props;
    return (
      <div>
        <Icon type="edit" className="editBtn_icon" onClick={showModal} />
        <BucketUpdateModal
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
          hideModal={hideModal}
          visible={visible}
          handleCancel={handleCancel}
        />
      </div>
    );
  }
}

BucketUpdateModalButton.defaultProps = {
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

BucketUpdateModalButton.propTypes = {
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
