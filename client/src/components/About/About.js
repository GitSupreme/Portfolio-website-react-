import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
                Jephtha Bofa Amakye is a software engineer and data analyst based in Accra, Ghana, with expertise in backend development, data analysis, and IT support. 
                He holds a Bachelor's degree in Information Technology from the University of Ghana and has gained experience through roles at GCAA, Enorince Technologies, and Axis Drone Surveys. 
                His technical skills include Python, React.js, Node.js, RESTful APIs, SQL, and data visualization tools like Power BI. Jephtha is passionate about using technology to optimize workflows, enhance system performance, and create user-friendly applications. 
                His notable projects include a portfolio website, an inventory management system, and a business management web and mobile application. 
                Beyond coding, he explores tech trends, contributes to open-source projects, and mentors aspiring developers. 
                He is eager to collaborate on impactful projects and create innovative solutions. His profile highlights his technical expertise, problem-solving skills, and collaborative mindset to attract potential employers.<br/><br/>
                Let’s connect and create something amazing together!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
