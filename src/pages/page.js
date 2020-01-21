/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import LoginModalSpan from './Login/LoginModalSpan';

const { Header, Content, Footer } = Layout;

function Page(props) {
  const { history, crumbMenu, children } = props;
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item key="1" onClick={() => history.push('/Home')}>
            Home
          </Menu.Item>
          <Menu.Item key="2">
            <LoginModalSpan />
          </Menu.Item>
          <Menu.Item key="3" onClick={() => history.push('/signup')}>
            SignUp
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {crumbMenu.map(el => (
            <Breadcrumb.Item key={el}>{el}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default withRouter(Page);
