/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root')
);*/

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import Clock from 'react-digital-clock';
import Calculator from "awesome-react-calculator";
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Divider, } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About Us</Menu.Item>
        <Menu.Item key="3">Blog</Menu.Item>
        <Menu.Item key="4">Contact Us </Menu.Item>
      </Menu>
      
    </Header>
    <Content style={{ padding: "0 50px" }} >
      <Breadcrumb style={{ margin: "16px 0" }} separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub2"]}
            style={{ height: "100%" }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Category 1">
              <Menu.Item key="1">Mens Clothing</Menu.Item>
              <Menu.Item key="2">Womens Clothing</Menu.Item>
              <Menu.Item key="3">Child Clothing</Menu.Item>
              <Menu.Item key="4">Clothing</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 580 }}>
        <>
        <div className="clock">
         <Clock /> 
         
        </div>
        <div className="calculator">
            <Calculator />
        </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right"> Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation= "left">Left Text</Divider>

   
  
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>

  </>
         
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      ABC Design ©2020 Created by Pakistan
    </Footer>
  </Layout>,
  document.getElementById("root")
);



