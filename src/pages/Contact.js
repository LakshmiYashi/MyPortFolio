import React from 'react';
import { Link } from 'react-router-dom';

function Contact(){
    return (
    //     <div className="contact-circle">
    //     <p className="text-muted footer-title">Contact me!</p>
    //     <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nibh eu accumsan maximus, magna ligula varius lacus, sagittis imperdiet turpis erat facilisis mi. Mauris efficitur ac massa at malesuada.</p>
    //     <br></br>
    //     <Link to = {process.env.PUBLIC_URL + '/resume/lakshmi.docx'} target="_blank" download className="btn">DOWNLOAD_RESUME</Link>
    //  </div>
    <div className="contact-card">
      <h2 className="text-muted footer-title">Let's Connect & Innovate</h2>
      <div className="contact-info text-muted">
        <Link to = {process.env.PUBLIC_URL + '/resume/lakshmi.docx'} target="_blank" download className="btn">DOWNLOAD RESUME</Link>
      </div>
      <p className="text-muted">Let's take the next step in our journey together. Feel free to explore my work, and download my resume to learn more about my skills and experiences. I'm eager to contribute to impactful projects and innovations!</p>
    </div>
    )
}

export default Contact;