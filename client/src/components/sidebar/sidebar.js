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

        <div className='sb-and-home'>

            {/* {sidebar itself with stateful condition to 
            specify className based on whether expanded or not} */}
            <div className = {expandSideBar ? 'sidebar':'sidebar-expand'}>
                
                {/*sidebar expand and collapse icon*/}
                <div className='expand-collapse-icon'>
                    <p onClick={handleExpandClick}>
                        {expandSideBar ? 
                            (<BsChevronRight size={30}/>) : 
                            (<BsChevronLeft size={30}/>)
                        }
                    </p>
                </div>

                {/*Profile picture and nav items exported from sideItems file. 
                The tag is however provided an signal transmitter to inform sideItems.js
                of whether sidebar is expanded or not*/}
                <SidebarItems expandSideBar={expandSideBar}/>

            </div>
            

            {/*Home section content shown 
            while Home navbar link is active*/}
            <div className='imported-home'>
                <Home/>
            </div>

        </div>

    )
}

export default Sidebar;