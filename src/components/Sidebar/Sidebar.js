import React, { useState } from 'react';

import Routes from '../../pages/Frontend/Routes'

import {AiOutlineDoubleRight, AiOutlineMenu, AiOutlineProfile} from 'react-icons/ai'
import {MdOutlineDateRange} from 'react-icons/md'
import {TbBrandPagekit} from 'react-icons/tb'


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout  style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className=' d-flex justify-content-between flex-column vh-100'>
        <div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AiOutlineDoubleRight />,
              label: <Link  to={'/upcoming'} style={{textDecoration:'none'}}>Upcoming</Link>,
            },
            {
              key: '2',
              icon: <AiOutlineMenu />,
              label: <Link to={'/today'} style={{textDecoration:'none'}}>Today</Link>,
            },
            {
              key: '3',
              icon: <MdOutlineDateRange />,
              label: <Link to={'/calender'} style={{textDecoration:'none'}}>Celendar</Link>,
            },
            {
              key: '4',
              icon: <AiOutlineProfile />,
              label: <Link to={'/'} style={{textDecoration:'none'}}>StickyWall</Link>,
            }, 
            {
              key: '5',
              icon: <TbBrandPagekit />,
              label: <Link to={'/todos'} style={{textDecoration:'none'}}>Todos</Link>,
            }, 
          ]}
        />
        </div>
        <div><h6 className='mb-4 text-white'>logout</h6></div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:'flex',
          }}
        >
          
          <Button
           
            // display={{inlineBlock}}      //custom
             type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
           <h1 className='text-center m-auto'>Header</h1>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
