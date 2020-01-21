/* eslint-disable */
import React, { Component } from 'react';
import { Layout, Menu, Icon, Skeleton } from 'antd';

import Page from '../page';
import BucketDetails from '../Details/BucketDetails';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bucketList: [],
      chosenBucket: {},
    };
    this.chooseBucket = this.chooseBucket.bind(this);
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

  componentDidMount() {
    fetch(`http://127.0.0.1:3001/buckets/mypage`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ isLoaded: true, bucketList: result.bucketlists });
      });
  }

  render() {
    const { isLoaded, bucketList, chosenBucket } = this.state;
    const { chooseBucket } = this;
    if (!isLoaded) {
      return (
        <Page crumbMenu={['Home', 'Mypage']} isLogin="true">
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
      <Page crumbMenu={['Home', 'Mypage']} isLogin="true">
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="bars" />내 버킷리스트
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
                    좋아요 표시한 리스트
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="bars" />
                    기타 리스트
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <BucketDetails {...chosenBucket} />
          </Content>
        </Layout>
      </Page>
    );
  }
}
