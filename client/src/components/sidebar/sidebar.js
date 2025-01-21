import React from 'react';
import "./sidebar.css";
import Home from '../home/home'; 


const sidebar = () => {
    return (

        <div className='container-fluid sidebar-section'>
            
            <div className = 'sidebar'>
                <div className='expand-collapse-icon'>

                </div>
            </div>

            <div className='container'>
                <Home/>
            </div>


        </div>

    )
}

export default sidebar;