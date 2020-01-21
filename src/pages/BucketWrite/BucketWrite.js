import React, { Component } from 'react';
import BucketWriteDetails from './BucketWriteDetails';

export default class BucketWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      content: null,
      image: null,
      expectedDate:,
      isValidating: '',
      selectedFile: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit() {
    const { title, content, image, expectedDate, selectedFile } = this.state;
    const url = 'http://127.0.0.1:3001/buckets/create';
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        image: selectedFile,
        expectedDate,
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
    console.log('e target : ', e.target.value);
    this.setState({
      [key]: e.target.value,
    });
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
    const { title, content, image, expectedDate, isValidating } = this.state;
    return (
      <div>
        <BucketWriteDetails
          title={title}
          content={content}
          image={image}
          expectedDate={expectedDate}
          isValidating={isValidating}
          handleFileInput={this.handleFileInput}
          handlePost={this.handlePost}
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}
