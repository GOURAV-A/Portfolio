import React from 'react';
import { Card } from 'antd';

class Skills extends React.Component {
 constructor(props) {
    super(props);
    this.skills = [
      { name: 'ReactJS', icon:'https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512' },
      { name: 'ExpressJS', icon:'https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-5379348-4492470.png?f=webp&w=512'},
      { name: 'Java', icon:'https://cdn.iconscout.com/icon/free/png-512/free-java-60-1174953.png?f=webp&w=512'},
      { name: 'HTML', icon:'https://static.javatpoint.com/htmlpages/images/html-tutorial.png'},
      { name: 'CSS', icon:'https://static.javatpoint.com/csspages/images/css-tutorial.png'},
      { name: 'SCSS', icon:'https://cdn.iconscout.com/icon/premium/png-512-thumb/sass-2752078-2284895.png?f=webp&w=512'},
      { name: 'JS', icon:'https://static.javatpoint.com/images/javascript/javascript_logo.png'},
      { name: 'MySQL', icon:'https://static.javatpoint.com/mysql/images/mysql-tutorial.png'},
      { name: 'Mongodb', icon:'https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg'},
      { name: 'AWS', icon:'https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=512'},
      { name: 'GitHub', icon:'https://static.javatpoint.com/tutorial/github/images/github-tutorial.png'},
    ];
 }

 renderSkillItem(skill) {
    const { name, icon } = skill;
    return (
      <div className="skill-item" key={name}>
        <Card
          hoverable
          style={{ 
            width: 50,
            height:50,
          }}
          cover={<img alt={name} src={icon} />}
        >
          <Card.Meta title={name} />
        </Card>
      </div>
    );
 }

 render() {
    return (
      <div className="skills-container">
        {this.skills.map(this.renderSkillItem.bind(this))}
      </div>
    );
 }
}

export default Skills;