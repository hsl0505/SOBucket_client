import React from 'react';
import PropTypes from 'prop-types';
import { Icon, message } from 'antd';

export default function GetBucket(props) {
  const { isLogin, bucket, likeChangeHandle } = props;

  function forkHandle() {
    if (!isLogin) {
      alert('로그인이 필요합니다');
    } else {
      message.loading('my bucket에 담는 중', 1.5).then(() => {
        fetch('http://127.0.0.1:3001/buckets/fork', {
          method: 'POST',
          body: JSON.stringify({
            title: bucket.title,
            image: bucket.image,
            content: bucket.content,
            expectedDate: bucket.expectedDate,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
          .then(res => res.json())
          .then(() => {
            message.success('my bucket에 추가되었습니다!').then(async () => {
              await likeChangeHandle();
            });
          })
          .catch(err => {
            console.log(err);
            message.error('my bucket에 담기 실패');
          });
      });
    }
  }

  return (
    <div className="getBucketBtn">
      <Icon type="pushpin" className="getBucket_icon" onClick={forkHandle} />
    </div>
  );
}

GetBucket.defaultProps = {
  isLogin: false,
  bucket: {},
  likeChangeHandle: () => {},
};

GetBucket.propTypes = {
  isLogin: PropTypes.bool,
  bucket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    content: PropTypes.string,
    userName: PropTypes.string,
    title: PropTypes.string,
    expectedDate: PropTypes.string,
  }),
  likeChangeHandle: PropTypes.func,
};
