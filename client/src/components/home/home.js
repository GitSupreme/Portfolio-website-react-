import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "./Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Jephtha Bofa Amakye welcomes you to his portfolio</h1>
          <h4 style={{ paddingTop: 20 }}>Explore for more</h4>

          <h3>
            <div style={{ marginTop: '70px' }}>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Software Developer",
                    "Web Developer",
                    "Data Analyst",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 5,
                }}
              />
            </div>
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>
            <div className="get-resume-button">
              <a href={Resume} download="Jephtha_Resume.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
