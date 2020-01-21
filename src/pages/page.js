/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import LoginModalDiv from './Login/LoginModalDiv';

const { Header, Content, Footer } = Layout;

function Page(props) {
  const { history, crumbMenu, children, isLogin, isSignUpPage } = props;

  return (
    <Layout style={{ minHeight: '-webkit-fill-available' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          defaultSelectedKeys={isSignUpPage === 'true' ? ['3'] : []}
        >
          <Menu.Item key="1" onClick={() => history.push('/Home')}>
            Home
          </Menu.Item>
          {isLogin ? (
            <Menu.Item key="2">Log Out</Menu.Item>
          ) : (
            <Menu.Item key="2">
              <LoginModalDiv />
            </Menu.Item>
          )}
          <Menu.Item
            key="3"
            onClick={() => {
              if (isSignUpPage !== 'true') {
                history.push('/signup');
              }
            }}
            style={{ visibility: isLogin ? 'hidden' : 'visible' }}
          >
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
