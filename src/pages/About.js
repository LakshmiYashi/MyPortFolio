import React from 'react';
// import Logo from '../data/img/manfirst.png';
// import Button from '../components/Button';
function About()
{
    return (
        <section className=""> 
          <div className="container">
          <div className="">
        <div className="row">
          <div className="">

            <h2 className="sub-title text-muted leftAlign mb-1">ABOUT ME</h2>
            <p className="text-muted textCenter">
            With a passion for innovation and an eye for detail, I specialize in creating seamless, user-friendly web applications. My toolkit includes React, Redux, SpringBoot and MongoDB, allowing me to build robust and scalable solutions.
            </p><br></br>
            <p className="text-muted textCenter">
            One surprising aspect about me is my resilience and commitment to continuous learning. After taking a break to focus on motherhood for six years, I made the decision to enter the workforce and pursued a career in coding. I embarked on a self-directed learning journey and earned a certificate in coding from Udemy. This experience not only reignited my passion for technology but also demonstrated my determination and adaptability.

            </p><br></br>
            <p className="text-muted textCenter">
            My journey reflects my ability to embrace change, learn new skills, and overcome obstacles. This unique aspect of my journey not only showcases my commitment to personal and professional development but also highlights my resilience and ability to thrive in dynamic environments.

            </p><br></br>
            <p className="text-muted textCenter">
            Let's code something extraordinary together. Explore my portfolio, and let's connect to turn your ideas into reality!
            </p>
            <br></br>
            <div className="about-buttons">
            <a rel="noreferrer" target="_blank" href="https://github.com/LakshmiYashi"  class="btn mr-1" > <i class="fab fa-github"></i> Github</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lakshmissubrahmanyam/"  class="btn mr-1" > <i class="fab fa-linkedin"></i> Linkedin</a>

            </div>

          </div>
          {/* <div className="col-md-6 logo-col"> */}
            {/* <img className="img-fluid" src={`${process.env.PUBLIC_URL + Logo}`}></img> */}
          {/* </div> */}
        </div>
      </div>
          </div>
        </section>
    );
}
export default About