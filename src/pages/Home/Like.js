/* eslint-disable camelcase */
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
    this.likeFetch = this.likeFetch.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { bucketId } = this.props;
    if (bucketId !== nextProps.bucketId) {
      this.setState({
        isLike: nextProps.mylike,
        likeCount: nextProps.likeCount,
      });
    }
  }

  async likeFetch() {
    const { isLike, clickLike } = this.state;
    const { bucketId, isLogin } = this.props;
    if (isLogin && clickLike) {
      await fetch('http://127.0.0.1:3001/buckets/like', {
        method: 'POST',
        body: JSON.stringify({ isLike, bucketId }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      console.log('ok');
    }
  }

  likeHandler() {
    const { isLike, likeCount } = this.state;
    const { isLogin, likeChangeHandle } = this.props;

    if (!isLogin) {
      // 로그인 안되있음
      alert('로그인이 필요합니다');
    } else if (isLogin) {
      // 라이크 false 인 상태에서 클릭 시 -> (좋아요 +1)
      if (!isLike) {
        this.setState(
          {
            isLike: true,
            likeCount: likeCount + 1,
            clickLike: true,
          },
          async () => {
            await this.likeFetch();
            await likeChangeHandle();
          },
        );
      } else {
        // 라이크 true인 상태에서 클릭 시 -> (좋아요 -1)
        this.setState(
          {
            isLike: false,
            likeCount: likeCount - 1,
            clickLike: true,
          },
          async () => {
            await this.likeFetch();
            await likeChangeHandle();
          },
        );
      }
    }
  }

  render() {
    const { isLike, likeCount } = this.state;
    return (
      <div className="likeBtn">
        <Icon
          onClick={() => {
            this.likeHandler();
          }}
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
  likeChangeHandle: () => {},
};

Like.propTypes = {
  likeCount: PropTypes.number,
  isLogin: PropTypes.bool,
  mylike: PropTypes.bool,
  bucketId: PropTypes.number,
  likeChangeHandle: PropTypes.func,
};
