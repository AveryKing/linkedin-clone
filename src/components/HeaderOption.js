import React from 'react';
import '../styles/HeaderOption.css';
import {Avatar} from "@mui/material";
import {selectUser} from "../redux/userSlice";
import {useSelector} from "react-redux";
const HeaderOption = ({ Icon,text, onClick}) => {
    const user = useSelector(selectUser);
    return (
        <div>
            <div onClick={onClick} className="headerOption">
                {Icon && <Icon className='headerOption__icon'/> }

                    <Avatar src={user?.photoUrl} className='headerOption__icon' >
                        {user?.displayName[0]}
                    </Avatar>

                <h3 className='headerOption__title'>{text}</h3>
            </div>
        </div>
    );
};

export default HeaderOption;