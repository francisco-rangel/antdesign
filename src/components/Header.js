import { useState } from 'react';
import { Menu, Avatar, Image } from 'antd';
import { HomeOutlined, 
  AntDesignOutlined, 
  SettingOutlined, 
  InfoCircleOutlined,
  UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = () => {
  const [mail, setMail] = useState('mail')

  const handleClick = evt => {
    console.log('Click', evt)
  }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[mail]} mode="horizontal">
        <Menu.Item key="profile" icon={<Avatar size="small" src={<Image src="https://aiptcomics.com/wp-content/uploads/2019/12/BATMAN_Cv86-1.jpg" style={{ width: 30 }} />} />}>
          Profile
        </Menu.Item>
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Settings">
          <Menu.ItemGroup title="Profile">
            <Menu.Item key="setting:1">Update profile</Menu.Item>
            <Menu.Item key="setting:2">Privacy</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Friends and more">
            <Menu.Item key="setting:3">Friend's list</Menu.Item>
            <Menu.Item key="setting:4">About</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" icon={<AntDesignOutlined />}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header