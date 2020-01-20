/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';

import BucketDetails from './BucketDetails';
import Page from '../page';

class BucketDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, bucketData: {} };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3001/buckets/pid/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({ isLoaded: true, bucketData: result });
      });
  }

  render() {
    const id = this.props.match.params.id;
    const { isLoaded, bucketData } = this.state;
    if (isLoaded) {
      return (
        <Page crumbMenu={['Home', 'Pid', id]}>
          <BucketDetails {...bucketData} />
        </Page>
      );
    }
    return (
      <Page crumbMenu={['Home', 'Pid', id]}>
        <Skeleton active />
      </Page>
    );
  }
}

export default withRouter(BucketDetailPage);
