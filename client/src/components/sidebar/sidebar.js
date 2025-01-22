import React, {useState} from 'react';
import "./sidebar.css";
import Home from '../home/home'; 
import SidebarItems from "./sidebarItems";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";


const Sidebar = () => {
    
    const [expandSideBar, setExpandSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpandSidebar(!expandSideBar)
    }

    return (

        <div className='container-fluid sidebar-section'>
            
            <div className = {expandSideBar ? 'sidebar':'sidebar-expand'}>
                
                <div className='expand-collapse-icon'>
                    <p onClick={handleExpandClick}>
                        {expandSideBar ? 
                            (<BsChevronRight size={30}/>) : 
                            (<BsChevronLeft size={30}/>)
                        }
                    </p>
                </div>
                <SidebarItems expandSideBar={expandSideBar}/>
            </div>

            <div className='container'>
                <Home/>
            </div>

        </div>

    )
}

export default Sidebar;