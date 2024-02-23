import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import { Link } from 'react-router-dom';
import SkillsBar from '../components/SkillsBar';
import Projects from '../components/Projects'
function Home()
{
    return (
      <section className="home">
        <div className="container">
           <div className="emptySpace"></div>
           <Header />        
           <About />
           <Projects />
           <SkillsBar />
           <div className="contact-circle">
              <p className="text-muted footer-title">Contact me!</p>
              <br></br>
              <p className="text-muted">Ready to discuss opportunities or share insights? I'd love to connect with you</p>
              <p className="text-muted">Let's talk about how my skills and experiences align with your team's goals. Looking forward to connecting with you!</p>
              <br></br>
              <Link to = {process.env.PUBLIC_URL + '/resume/lakshmi.docx'} target="_blank" download className="btn">DOWNLOAD RESUME</Link>
           </div>
        </div>
      </section>
    );
}
export default Home