import React from 'react';
import { Row, Col } from 'antd';

function Banner() {
  return (
    <div
      className="banner"
      style={{
        height: '300px',
        backgroundColor: '#2c3e50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', 
        padding: '0',
        position: 'relative',
      }}
    >
      <Row justify="center" align="middle" > 
        <Col>
          <h1 align="center" style={{fontSize: 48}}>Logan Hobson's Portfolio</h1>
          <p align="center" style={{fontSize: 24, color: '#666', fontStyle: 'italic'}}>Passionate Game Developer and Programmer</p>
        </Col>
      </Row>
    </div>
  );
}
export default Banner;