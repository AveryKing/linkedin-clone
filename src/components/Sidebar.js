import React from 'react';
import '../styles/Sidebar.css';
import {Avatar} from "@mui/material";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className='sidebar__avatar'/>
                <h2>Avery King</h2>
                <h4>averyking.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,337</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,269</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    );
};

export default Sidebar;