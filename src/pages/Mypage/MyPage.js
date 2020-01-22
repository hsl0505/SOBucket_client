/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Skeleton } from 'antd';

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
    };
    this.chooseBucket = this.chooseBucket.bind(this);
    this.chooseLikeBucket = this.chooseLikeBucket.bind(this);
    this.likeChangeHandle = this.likeChangeHandle.bind(this);
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

  render() {
    const { isLoaded, bucketList, chosenBucket, likeList } = this.state;
    const { chooseBucket, chooseLikeBucket } = this;
    const { homeBtnHandle, isLogin, history } = this.props;

    if (!isLoaded) {
      return (
        <Page
          crumbMenu={['Home', 'Mypage']}
          isLogin="true"
          homeBtnHandle={homeBtnHandle}
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
      >
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
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
              <button
                type="button"
                onClick={() => {
                  history.push('/create');
                }}
              >
                버킷리스트 만들기
              </button>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <BucketDetails
              {...chosenBucket}
              isLogin={isLogin}
              likeChangeHandle={this.likeChangeHandle}
            />
          </Content>
        </Layout>
      </Page>
    );
  }
}

export default withRouter(MyPage);
