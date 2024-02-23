// SkillsBar.js
import React, { useState } from 'react';

const SkillsBar = () => {
  const [skills] = useState([
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 75 },
    { name: 'MongoDb', level: 65 },
    { name: 'Spring Boot', level: 65 },
    { name: 'SQL ', level: 65 },
    // Add more skills as needed
  ]);

  return (
    <div className="skills-container2">
    <h2 className="sub-title text-muted ">SKILLS</h2>
    <div className="skills-list2">
      <div className="skill-category2">
        <p className='white text-sub-title'>Frontend Development</p>
        <ul>
          <li className="skill-item2">React.js</li>
          <li className="skill-item2">JavaScript (ES6+)</li>
          <li className="skill-item2">HTML5 & CSS3</li>
          <li className="skill-item2">Responsive Web Design</li>
          <li className="skill-item2">State Management (Redux)</li>
        </ul>
      </div>
      <div className="skill-category2">
        <p className='white text-sub-title'>Backend Development</p>
        <ul>
          <li className="skill-item2">Node.js</li>
          <li className="skill-item2">Express.js</li>
          <li className="skill-item2">SpringBoot</li>
          <li className="skill-item2">MongoDB</li>
          <li className="skill-item2">Oracle SQL</li>
        </ul>
      </div>
      <div className="skill-category2">
        <p className='white text-sub-title'>Tools & Others</p>
        <ul>
          <li className="skill-item2">Git</li>
          <li className="skill-item2">Webpack</li>
          <li className="skill-item2">npm & Yarn</li>
          <li className="skill-item2">Testing (Jest, Enzyme)</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default SkillsBar;