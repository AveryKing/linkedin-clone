import React from 'react';
import '../styles/HeaderOption.css';
import {Avatar} from "@mui/material";
const HeaderOption = ({avatar, Icon,text}) => {
    return (
        <div>
            <div className="headerOption">
                {Icon && <Icon className='headerOption__icon'/> }
                {avatar && (
                    <Avatar src={avatar} className='headerOption__icon' />
                )}
                <h3 className='headerOption__title'>{text}</h3>
            </div>
        </div>
    );
};

export default HeaderOption;