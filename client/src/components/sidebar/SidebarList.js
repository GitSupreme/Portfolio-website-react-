import React, {useState} from "react";
import "./SidebarList.css";
import profilepic from "../../Image/a.jpg";

import {FcHome, FcTodoList, 
  FcReadingEbook, FcBriefcase,
  FcCollaboration, FcGraduationCap, 
  FcServices, FcBusinessContact} 
  from "react-icons/fc";
  import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Link } from "react-scroll";

  
const SidebarList = () => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
      setExpandSidebar(!expandSidebar);
  };

  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="icon-for-sidebar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
                        <BsChevronLeft size={30} />
                    </p>
          </div>

          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={20} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcReadingEbook size={20} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBriefcase size={20} /> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcServices size={20} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={20} color="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={20} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="references"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={20} /> References
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessContact size={20} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <div className="icon-for-sidebar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
                        <BsChevronRight size={30} />
                    </p>
          </div>
          
          <div id="placeholder">
            
          </div>
        
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcReadingEbook size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBriefcase size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcServices size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcGraduationCap size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="references"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactsection"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessContact size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
