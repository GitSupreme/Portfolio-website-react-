import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";


import SidebarList from "./SidebarList";

const Sidebar = ({ theme, changeTheme }) => {
  const [expandSidebar] = useState(true);


  return (
    <div className="container-fluid">
      
        <SidebarList expandSidebar={expandSidebar}/>
        <div className="container-fluid home">
            <Home changeTheme={changeTheme} theme={theme}/>
        </div>
        
    
        

    </div>
  );
};

export default Sidebar;




