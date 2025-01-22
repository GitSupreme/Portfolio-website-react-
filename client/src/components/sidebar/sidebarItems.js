import React from "react";
import  "./sidebarItems.css";
import Profile from "../../images/profile.jpg";
import {FcHome, FcTodoList, FcReadingEbook, FcBriefcase, FcCollaboration, FcGraduationCap, FcServices, FcBusinessContact} from "react-icons/fc";

const SidebarItems = ({expandSideBar}) => {
    
    return (
        <React.Fragment>
            {expandSideBar ? (
                //Sidebar appearance while collapsed
                <div className="sidebar-collapsed">
                    
                    <div className="empty-holder">
                        {/* {empty space to maintain icons positions upon collapse} */}
                    </div>

                    <ul>
                        <li className="nav-item">
                            <FcHome size={21}/>
                        </li>
                        <li className="nav-item">
                            <FcReadingEbook size={26}/>
                        </li>
                        <li className="nav-item">
                            <FcBriefcase size={23}/>
                        </li>
                        <li className="nav-item">
                            <FcServices className="tech-stack" size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcGraduationCap size={23}/>
                        </li>
                        <li className="nav-item">
                            <FcTodoList size={23}/>
                        </li>
                        <li className="nav-item">
                            <FcCollaboration size={23}/>
                        </li>
                        <li className="nav-item">
                            <FcBusinessContact size={23}/>
                        </li>
                    </ul>
                </div>
            ):(
                //Sidebar appearance while expanded
                <div classsName="sbl-items">

                    {/* sidebar profile picture component */}
                    <div className="sidebar-profile-pic">
                        <img src={Profile} alt="profile-picture"/>
                    </div>

                    {/* {Sidebar Navigation links with icons} */}
                    <ul>
                        <li className="nav-item">
                            <FcHome size={18}/>
                            Home
                        </li>
                        <li className="nav-item">
                            <FcReadingEbook size={23}/>
                            About
                        </li>
                        <li className="nav-item">
                            <FcBriefcase size={20}/>
                            Work Experience
                        </li>
                        <li className="nav-item">
                            <FcServices className="tech-stack" size={22}/>
                            Tech Stack
                        </li>
                        <li className="nav-item">
                            <FcGraduationCap size={20}/>
                            Education
                        </li>
                        <li className="nav-item">
                            <FcTodoList size={20}/>
                            Projects
                        </li>
                        <li className="nav-item">
                            <FcCollaboration size={20}/>
                            References
                        </li>
                        <li className="nav-item">
                            <FcBusinessContact size={20}/>
                            Contact
                        </li>
                    </ul>

                </div>
            )}
            
        </React.Fragment>
    
    )

}


export default SidebarItems;