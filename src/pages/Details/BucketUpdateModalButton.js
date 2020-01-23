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
      handleTitleOnChange,
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
          handleTitleOnChange={handleTitleOnChange}
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
  id: 0,
  image: '',
  expectedDate: new Date(),
  content: 'content',
  handleFileInput: () => {},
  handlePost: () => {},
  handleSubmit: () => {},
  handleOnChange: () => {},
  handleDateChange: () => {},
  handleTimeChange: () => {},
  handleContentOnChange: () => {},
  handleTitleOnChange: () => {},
  title: '',
  isValidating: '',
  errorMessage: '',
};

BucketUpdateModalButton.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  expectedDate: PropTypes.string,
  content: PropTypes.string,
  handleFileInput: PropTypes.func,
  handlePost: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  handleContentOnChange: PropTypes.func,
  handleTitleOnChange: PropTypes.func,
  title: PropTypes.string,
  isValidating: PropTypes.string,
  errorMessage: PropTypes.string,
};
