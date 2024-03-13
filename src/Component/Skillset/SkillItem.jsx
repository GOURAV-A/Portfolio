import React from 'react';
//import { Card, Col, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const SkillItem = ({ name, icon }) => {
  return (
    <div className="skill-item">
      <Card
        hoverable
        style={{ 
          width: 50,
          height:50,
        }}
        cover={<img alt={name} src={icon} />}
      >
        <Meta title={name}  />
      </Card>
    </div>
  );
};

export default SkillItem;










