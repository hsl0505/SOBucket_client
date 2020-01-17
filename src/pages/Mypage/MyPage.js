/* eslint-disable */
import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    this.setState({
      content: text,
    });
  }

  render() {
    const { content } = this.state;
    const { handleClick } = this;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="App-logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="unordered-list" />
                  <span>내 버킷리스트</span>
                </span>
              }
            >
              <Menu.Item
                key="s2_1"
                onClick={e => handleClick('애플파이 만들기')}
              >
                애플파이 만들기
              </Menu.Item>
              <Menu.Item key="s2_2">스탠드업 미팅 약속 잡기</Menu.Item>
              <Menu.Item key="s2_3">스카이다이빙하기</Menu.Item>
              <Menu.Item key="s2_4">스카이다이빙하기</Menu.Item>
              <Menu.Item key="s2_5">스카이다이빙하기</Menu.Item>
              <Menu.Item key="s2_6">스카이다이빙하기</Menu.Item>
              <Menu.Item key="s2_7">스카이다이빙하기</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="unordered-list" />
                  <span>좋아요 표시한 리스트</span>
                </span>
              }
            >
              <Menu.Item key="s2_1">애플파이 만들기</Menu.Item>
              <Menu.Item key="s2_2">스탠드업 미팅 약속 잡기</Menu.Item>
              <Menu.Item key="s2_3">스카이다이빙하기</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="unordered-list" />
                  <span>기타 리스트</span>
                </span>
              }
            >
              <Menu.Item key="15">애플파이 만들기</Menu.Item>
              <Menu.Item key="16">스탠드업 미팅 약속 잡기</Menu.Item>
              <Menu.Item key="17">스카이다이빙하기</Menu.Item>
              <Menu.Item key="18">스카이다이빙하기</Menu.Item>
              <Menu.Item key="19">스카이다이빙하기</Menu.Item>
              <Menu.Item key="20">스카이다이빙하기</Menu.Item>
              <Menu.Item key="21">스카이다이빙하기</Menu.Item>
            </SubMenu>
            <Menu.Item key="22">
              <Icon type="file" />
              <span>다운로드하기</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 20, background: 'beige' }}>{content}</div>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}
