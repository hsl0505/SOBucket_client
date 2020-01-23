import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BucketWriteDetails from './BucketWriteDetails';

export default class BucketWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      image: null,
      expectedDate: '',
      expectedTime: moment().format('hh:mm:ss'),
      isValidating: '',
      errorMessage: '',
      selectedFile: '',
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit() {
    const {
      title,
      content,
      expectedDate,
      expectedTime,
      selectedFile,
    } = this.state;
    const url = 'http://127.0.0.1:3001/buckets/create';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        image: selectedFile,
        expectedDate: moment(`${expectedDate} ${expectedTime}`),
      }),
    })
      .then(res => {
        alert('업로드 성공!!!');
      })
      .catch(err => {
        console.log('err : ', err);
        alert('업로드 실패... 다시 시도 해주세요');
      });
  }

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  handleOnChange(e, key) {
    // console.log('e target : ', e.target.value);
    this.setState({
      [key]: e.target.value,
    });
  }

  handleDateChange(date) {
    // console.log(date);
    this.setState({
      expectedDate: date.format('YYYY[-]MM[-]DD'),
    });
    console.log('expectedDate : ', this.state.expectedDate);
  }

  handleTimeChange(time) {
    console.log(time);
    this.setState({
      expectedTime: time.format('hh:mm:ss'),
    });
    console.log('expectedDate : ', this.state.expectedTime);
  }

  handlePost() {
    const { selectedFile } = this.state;
    console.log('selectedFile : ', selectedFile);
    const formData = new FormData();
    formData.append('file', selectedFile);

    return fetch('http://127.0.0.1:3001/buckets/image', {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        return res.text();
      })
      .then(result => {
        console.log(result);
        this.setState({ selectedFile: result });
        alert('업로드 성공!!!');
      })
      .catch(err => {
        console.error(err);
        alert('업로드 실패... 다시 시도 해주세요');
      });
  }

  render() {
    const {
      title,
      content,
      image,
      expectedDate,
      isValidating,
      errorMessage,
    } = this.state;
    const {
      handleFileInput,
      handlePost,
      handleSubmit,
      handleOnChange,
      handleDateChange,
      handleTimeChange,
    } = this;
    const { isLogin, loginHandle, homeBtnHandle } = this.props;
    return (
      <div>
        <BucketWriteDetails
          title={title}
          content={content}
          image={image}
          expectedDate={expectedDate}
          isValidating={isValidating}
          errorMessage={errorMessage}
          handleFileInput={handleFileInput}
          handlePost={handlePost}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          isLogin={isLogin}
          loginHandle={loginHandle}
          homeBtnHandle={homeBtnHandle}
        />
      </div>
    );
  }
}

BucketWrite.defaultProps = {
  isLogin: false,
  loginHandle: () => {},
  homeBtnHandle: () => {},
};

BucketWrite.propTypes = {
  isLogin: PropTypes.bool,
  loginHandle: PropTypes.func,
  homeBtnHandle: PropTypes.func,
};
