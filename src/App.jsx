import React, { useState } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined, NotificationOutlined,
} from '@ant-design/icons';


import { Route, Switch, Link } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { UnidadScreen } from './components/UnidadScreen/UnidadScreen';
import { UsuarioScreen } from './components/UsuarioScreen/UsuarioScreen';

import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const items = useSelector(state => state.ui.items);
  console.log(items);
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Layout style={{ minHeight: '90vh', maxHeight: '100vh' }}>
        <Header className="header" style={{ padding: 0 }} >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout className="site-layout">

          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {
                items.map((item, index) => {

                  return (


                    <Menu.Item key={index} icon={<PieChartOutlined />}>
                      <Link to={"/usuarios"}>
                        {item.name}
                      </Link>


                    </Menu.Item>



                  );





                })
              }
              {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} /> */}
            </Menu>
          </Sider>


          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <main>
                <Switch>
                  <Route path="/" component={UnidadScreen} exact />
                  <Route path="/usuarios" component={UsuarioScreen} />
                  <Route path="/unidades" component={UnidadScreen} />
                </Switch>
              </main>

            </div>
          </Content>

        </Layout>

      </Layout>

      {/* <Layout style={{ minHeight: '10vh', maxHeight: '10vh' }}>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout> */}
    </Layout>

  );
}

export default App;
