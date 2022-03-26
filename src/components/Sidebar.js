import React from 'react';
import '../styles/Sidebar.css';
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/userSlice";

const recentItem = (topic) => {
    return <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
}

const Sidebar = () => {
    const user = useSelector(selectUser);
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80" alt=""/>
                <Avatar src={user.photoURL} className='sidebar__avatar'>
                    {user.displayName[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
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
                {recentItem('hireme')}
                {recentItem('fullstack')}
                {recentItem('developer')}
                {recentItem('reactjs')}
                {recentItem('nodejs')}
            </div>
        </div>
    );
};

export default Sidebar;