/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Skeleton, Button } from 'antd';
import moment from 'moment';

import Page from '../page';
import BucketDetails from '../Details/BucketDetails';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bucketList: [],
      chosenBucket: {},
      likeList: [],
      likeFetch: false,
      modify: false,
      // title: '',
      image: '',
      isValidating: '',
      errorMessage: '',
      isMyPage: false,
      selectedFile: '',
    };
    this.chooseBucket = this.chooseBucket.bind(this);
    this.chooseLikeBucket = this.chooseLikeBucket.bind(this);
    this.likeChangeHandle = this.likeChangeHandle.bind(this);
    this.handleModify = this.handleModify.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleContentOnChange = this.handleContentOnChange.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  async componentDidMount() {
    const mypageResult = await fetch(`http://127.0.0.1:3001/buckets/mypage`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        return result.bucketlists;
      });

    await fetch('http://127.0.0.1:3001/buckets/findLikeList', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          bucketList: mypageResult,
          likeList: result.likeList,
        });
      });
  }

  chooseBucket(id) {
    const { bucketList } = this.state;
    for (let i = 0; i < bucketList.length; i++) {
      if (id === bucketList[i].id) {
        this.setState({
          chosenBucket: bucketList[i],
          isMyPage: true,
        });
        break;
      }
    }
  }

  chooseLikeBucket(id) {
    const { likeList } = this.state;
    for (let i = 0; i < likeList.length; i++) {
      if (id === likeList[i].id) {
        this.setState({
          chosenBucket: likeList[i],
          isMyPage: false,
        });
        break;
      }
    }
  }

  async likeChangeHandle() {
    const mypageResult = await fetch(`http://127.0.0.1:3001/buckets/mypage`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        return result.bucketlists;
      });

    await fetch('http://127.0.0.1:3001/buckets/findLikeList', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          likeList: result.likeList,
          bucketList: mypageResult,
        });
      });
  }

  handleModify() {
    console.log('handleModify activated');
    this.setState(prevState => ({
      modify: !prevState.modify,
    }));
  }

  handleSubmit(id) {
    const { title, expectedDate, content } = this.state.chosenBucket;
    const { selectedFile } = this;
    const url = 'http://127.0.0.1:3001/buckets/update';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        content,
        image: selectedFile,
        expectedDate: moment(`${expectedDate} 00:00:00`),
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

  handleDateChange(date) {
    const { chosenBucket } = this.state;
    const nextChosen = { ...chosenBucket };
    this.setState({
      chosenBucket: {
        ...nextChosen,
        expectedDate: date.format('YYYY[-]MM[-]DD'),
      },
    });
    console.log('expectedDate : ', this.state.expectedDate);
  }

  handleTitleOnChange(e) {
    const { chosenBucket } = this.state;
    const nextChosen = { ...chosenBucket };
    console.log('e.target.value : ', e.target.value);
    this.setState({
      chosenBucket: { ...nextChosen, title: e.target.value },
    });
  }

  handleContentOnChange(e) {
    // console.log('e target : ', e.target.value);
    const { chosenBucket } = this.state;
    const nextChosen = { ...chosenBucket };
    this.setState({
      chosenBucket: { ...nextChosen, content: e.target.value },
    });
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
      isLoaded,
      bucketList,
      chosenBucket,
      likeList,
      modify,
      isValidating,
      errorMessage,
      isMyPage,
    } = this.state;

    const {
      chooseBucket,
      chooseLikeBucket,
      handleModify,
      handleFileInput,
      handlePost,
      handleSubmit,
      handleDateChange,
      handleTimeChange,
      handleContentOnChange,
      handleTitleOnChange,
    } = this;

    const { homeBtnHandle, isLogin, history, loginHandle } = this.props;

    if (!isLoaded) {
      return (
        <Page
          crumbMenu={['Home', 'Mypage']}
          isLogin="true"
          homeBtnHandle={homeBtnHandle}
          loginHandle={loginHandle}
        >
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Skeleton />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Skeleton />
            </Content>
          </Layout>
        </Page>
      );
    }
    return (
      <Page
        crumbMenu={['Home', 'Mypage']}
        isLogin="true"
        homeBtnHandle={homeBtnHandle}
        loginHandle={loginHandle}
      >
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu mode="inline" style={{ height: '100%' }}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="bars" />
                    My Bucket List
                  </span>
                }
              >
                {bucketList.map(el => (
                  <Menu.Item key={el.id} onClick={() => chooseBucket(el.id)}>
                    {el.title}
                  </Menu.Item>
                ))}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="bars" />
                    My Like List
                  </span>
                }
              >
                {likeList.map(el => (
                  <Menu.Item
                    key={el.id}
                    onClick={() => chooseLikeBucket(el.id)}
                  >
                    {el.title}
                  </Menu.Item>
                ))}
              </SubMenu>
              <Button
                type="button"
                onClick={() => {
                  history.push('/create');
                }}
              >
                버킷리스트 만들기
              </Button>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <BucketDetails
              {...chosenBucket}
              isLogin={isLogin}
              likeChangeHandle={this.likeChangeHandle}
              modify={modify}
              handleModify={handleModify} //
              modify={modify}
              handleFileInput={handleFileInput}
              handlePost={handlePost}
              handleSubmit={handleSubmit}
              handleDateChange={handleDateChange}
              handleTimeChange={handleTimeChange}
              handleContentOnChange={handleContentOnChange}
              handleTitleOnChange={handleTitleOnChange}
              isValidating={isValidating}
              errorMessage={errorMessage}
              isMyPage={isMyPage}
            />
          </Content>
        </Layout>
      </Page>
    );
  }
}

export default withRouter(MyPage);
