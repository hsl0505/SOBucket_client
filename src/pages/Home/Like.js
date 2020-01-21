import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class Like extends Component {
  constructor(props) {
    super(props);
    const { likeCount, mylike } = this.props;
    this.state = {
      isLike: mylike,
      likeCount,
      clickLike: false,
    };
    this.likeHandler = this.likeHandler.bind(this);
  }

  componentDidUpdate() {
    const { isLike, clickLike } = this.state;
    const { bucketId } = this.props;
    if (clickLike) {
      fetch('http://127.0.0.1:3001/buckets/like', {
        method: 'POST',
        body: JSON.stringify({ isLike, bucketId }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }).then(() => console.log('ok'));
    }
  }

  likeHandler() {
    const { isLike, likeCount, clickLike } = this.state;
    const { isLogin } = this.props;

    if (!isLogin) {
      // 로그인 안되있음
      console.log('로긴해야함');
    } else if (isLogin) {
      // 로그인 되어있음
      if (!clickLike) {
        // 현재 라이크 누른적이 없음
        if (isLike) {
          // 원래 라이크 눌러져있엇음
          this.setState({
            isLike: false,
            likeCount: likeCount - 1,
            clickLike: true,
          });
        } else {
          // 원래 라이크 안눌러져있었음
          this.setState({
            isLike: true,
            likeCount: likeCount + 1,
            clickLike: true,
          });
        }
      } else if (clickLike) {
        // 현재 라이크 누른 적이 있음
        if (isLike) {
          // 라이크 상태
          this.setState({
            isLike: false,
            likeCount: likeCount - 1,
            clickLike: false,
          });
        } else {
          // 라이크 아닌 상태
          this.setState({
            isLike: true,
            likeCount: likeCount + 1,
            clickLike: false,
          });
        }
      }
    }
  }

  render() {
    const { isLike, likeCount } = this.state;

    return (
      <div className="likeBtn">
        <Icon
          onClick={this.likeHandler}
          type="like"
          className="likeBtn_icon"
          style={
            isLike
              ? {
                  borderColor: 'steelblue',
                  color: 'white',
                  backgroundColor: 'steelblue',
                }
              : { borderColor: 'gray' }
          }
        />
        <div className="likeCount">{likeCount}</div>
      </div>
    );
  }
}

Like.defaultProps = {
  likeCount: 0,
  isLogin: false,
  mylike: false,
  bucketId: 0,
};

Like.propTypes = {
  likeCount: PropTypes.number,
  isLogin: PropTypes.bool,
  mylike: PropTypes.bool,
  bucketId: PropTypes.number,
};
