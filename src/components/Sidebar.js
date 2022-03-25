import React from 'react';
import '../styles/Sidebar.css';
import {Avatar} from "@mui/material";
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar/>
                <h2>Avery King</h2>
                <h4>averyking.com</h4>
            </div>
            <div className="sidebar__bottom">

            </div>
        </div>
    );
};

export default Sidebar;