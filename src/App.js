import React from 'react';
import './App.css';
import {Layout, Button , Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header } =Layout;



function App() {
  
  return (
    <div className="App">
    <Layout>
      <Header className = 'header'>
      <Avatar style = {{float:'right'}} icon={<UserOutlined />} />
     <h1 className= 'title'>Ant Design Start </h1>
      </Header>
    </Layout>
    <Button className = 'btn'>Click Me</Button>
    </div>
  );
  
  
}

export default App;
