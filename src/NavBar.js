import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function NavBar() {
  const [selectedKey, setSelectedKey] = useState('home');

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#001529',
      color: 'white',
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Menu.Item
            key="home"
            style={{
              backgroundColor: selectedKey === 'home' ? 'transparent' : undefined, 
              border: 'none', 
            }}
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item
            key="skills"
            style={{
              backgroundColor: selectedKey === 'skills' ? 'transparent' : undefined,
              border: 'none',
            }}
          >
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </Menu.Item>
          <Menu.Item
            key="contact"
            style={{
              backgroundColor: selectedKey === 'contact' ? 'transparent' : undefined,
              border: 'none',
            }}
          >
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}

export default NavBar;
