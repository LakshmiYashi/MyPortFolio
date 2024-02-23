// SkillsBar.js
import React, { useState } from 'react';
import HighlightedImagesLoop from './../components/HighLightedImagesLoop';
import CSSLogo from './../data/CSS3_logo_and_wordmark.svg.png';
import HTMLLogo from './../data/HTML.png';
import ReactLogo from './../data/react.png';
import NodeLogo from './../data/nodejs.png';
import OracleLogo from './../data/Oracle_SQL_Developer_logo.svg';
import SpringLogo from './../data/SprigBoot.png';
import React1Logo from './../data/React1.webp';
import MongoLogo from './../data/mongo_logo.jpg';
import PostmanLogo from './../data/postman.svg';
import AngularLogo from './../data/Angular_full_color_logo.svg.png';
import JavaScriptLogo from './../data/JavaScript.png';
import GitLogo from './../data/Git.png';

const SkillsBar = () => {
  const [skills] = useState([
    { name: 'React', level: 90 },
    { name: 'HTML - CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Redux', level: 80 },
    { name: 'Node', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'Git ', level: 75 },
    { name: 'MongoDb - Oracle SQL', level: 65 },
    { name: 'Spring Boot', level: 65 },
    // Add more skills as needed
  ]);

  const images = [
    CSSLogo,
    HTMLLogo,
    NodeLogo,
    OracleLogo,
    SpringLogo,
    React1Logo,
    MongoLogo,
    AngularLogo,
    JavaScriptLogo
    // Add more image URLs as needed
  ];

  return (
    <div className="services">
    <h2 className="sub-title text-muted">SKILL SET</h2>
    <br></br>
    <div className="row">
    <div  className="col-md-6">
    <HighlightedImagesLoop images={images} />
    </div>
    <div className="col-md-6">
    <div className="skills-container"> 
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name text-muted text-sub-title">{skill.name}</div>
          <div className="skill-progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div> 
    </div>
    </div>
    </div>
    // </section>
  );
};

export default SkillsBar;

// import React from 'react';
// // import './SkillsBar.css'; // Import the CSS for styling

// const SkillsBar = ({ skills }) => {
//   return (
//     <div className="skills-container">
//       {skills.map((skill, index) => (
//         <div key={index} className="skill">
//           <div className="skill-name">{skill.name}</div>
//           <div className="skill-progress">
//             <div
//               className="progress-bar"
//               style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkillsBar;