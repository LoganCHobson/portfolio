import React from 'react';
import { Row, Col, Card, Tag } from 'antd';
import { Layout } from 'antd';
const skillsData = [
  'JavaScript',
  'React',
  'Unity',
  'C#',
  'Python',
  'HTML/CSS',
  'Node.js',
  'Git',
];

function Skills() {
  return (
    <div style={{ height: '400px',
      backgroundColor: '#EDEDED',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw', 
      
      padding: '0',
      position: 'relative'}}>
    <Layout style={{ textAlign: 'center'}}>
      <h2 justify="center"
        style={{
          marginBottom: '30px', 
          textDecoration: 'underline',
          fontSize: '2rem', 
        }}
      >
        Skills
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {skillsData.map((skill, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={skill}
              bordered={false}
              style={{ textAlign: 'center', borderRadius: '8px' }}
            >
              <Tag color="geekblue">{skill}</Tag>
            </Card>
          </Col>
        ))}
      </Row>
      </Layout>
    </div>
  );
}

export default Skills;
