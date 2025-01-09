import React from 'react';
import { Row, Col, Card, message } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success('Copied to clipboard!');
  };

  return (
    <div
      style={{
        minHeight: '300px',
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          marginBottom: '30px',
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Contact Information
      </h2>
      
      <Row
        gutter={[32, 32]}
        justify="center"
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              padding: '20px',
              height: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => copyToClipboard('loganhobson31@gmail.com')}
          >
            <MailOutlined style={{ fontSize: '36px', color: '#333' }} />
            <h3>Email</h3>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              padding: '20px',
              height: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => copyToClipboard('https://github.com/LoganCHobson')}
          >
            <GithubOutlined style={{ fontSize: '36px', color: '#333' }} />
            <h3>GitHub</h3>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              textAlign: 'center',
              borderRadius: '8px',
              padding: '20px',
              height: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => copyToClipboard('https://www.linkedin.com/in/logan-hobson-454b59231/')}
          >
            <LinkedinOutlined style={{ fontSize: '36px', color: '#0077b5' }} />
            <h3>LinkedIn</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
