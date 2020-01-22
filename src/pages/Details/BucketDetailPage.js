/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';

import BucketDetails from './BucketDetails';
import Page from '../page';

class BucketDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, bucketData: {}, likeSync: true };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://127.0.0.1:3001/buckets/pid/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({ isLoaded: true, bucketData: result });
      });
  }

  render() {
    const id = this.props.match.params.id;
    const { isLogin, homeBtnHandle, loginHandle } = this.props;
    const { isLoaded, bucketData } = this.state;
    if (isLoaded) {
      return (
        <Page
          crumbMenu={['Home', 'Pid', id]}
          isLogin={isLogin}
          homeBtnHandle={homeBtnHandle}
          loginHandle={loginHandle}
        >
          <BucketDetails {...bucketData} isLogin={isLogin} />
        </Page>
      );
    }
    return (
      <Page
        crumbMenu={['Home', 'Pid', id]}
        homeBtnHandle={homeBtnHandle}
        loginHandle={loginHandle}
      >
        <Skeleton active />
      </Page>
    );
  }
}

export default withRouter(BucketDetailPage);
