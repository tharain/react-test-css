import React from 'react';

import { Layout, Button, Icon, Popover, Divider } from 'antd';
import Colors from 'src/css/Colors';

const { Header } = Layout;

const content = (
  <div>
    <a href="https://tharain.github.io" target="_blank" rel="noopener noreferrer">
      Visit Daphne's Page
    </a>
  </div>
);

class CustomHeader extends React.Component {
  render() {
    return (
      <Header
        style={{
          background: Colors.BACKGROUND.DEFAULT,
          color: Colors.BASIC.WHITE,
          display: 'flex',
          alignItems: 'center',
          height: 56,
        }}
      >
        <Icon theme="filled" type="experiment" style={{ fontSize: 30 }} />
        <span style={{ marginLeft: 12, fontSize: 18, fontWeight: 400, lineHeight: 1.5 }}>Daphne</span>
        <div style={{ flex: '1 0 auto' }} />
        <a
          href="https://github.com/tharain/react-test-css"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: Colors.BASIC.WHITE, cursor: 'pointer' }}
        >
          <Icon theme="filled" type="github" /> Github
        </a>
        <Divider type="vertical" />
        <Popover placement="bottomLeft" content={content} title="" trigger="click">
          <Button
            shape="circle"
            type="link"
            style={{
              background: 'transparent',
              borderColor: 'transparent',
              color: '#fff',
            }}
          >
            <Icon type="user" /> Me
          </Button>
        </Popover>
      </Header>
    );
  }
}

export default CustomHeader;
