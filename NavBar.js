import React from 'react'
import { Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const NavBar = () => {
  const { Header, Content, Sider,Footer } = Layout;



  const { SubMenu } = Menu;
  
    return (
        <div>
        
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">HOME</Menu.Item>
        <Menu.Item key="2">ABOUT</Menu.Item>
        <Menu.Item key="3">CONTACT US</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
        
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
         
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option5</Menu.Item>
            <Menu.Item key="10">option 6</Menu.Item>
     
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
       
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            <Link to={'/NavPage'}>
            <div>
            <card hoverable>
        <img
            alt="example"
            src="../../directory-icon.png"
          />
          <p>Directory</p>
        </card>
        </div>
</Link>
<Link to={'/NavPage'}>
  
   <div >
        <card hoverable>
        <img
            alt="example"
            src="../../profile-icon.png"
          />
            <p>Profile</p>
        </card>
        </div>

</Link>
           
       
        </Content>
        
        <Footer style={{ textAlign: 'center' }}> Copyright &copy; Hutech Solutions</Footer>
  </Layout>,


  
    </Layout>
  </Layout>,
 
</div>
    )
}

export default NavBar;