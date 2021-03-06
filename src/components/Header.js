import '../styles/Header.css';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "./HeaderOption";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../redux/userSlice";
import {auth} from "../lib/firebase";
import {signOut} from 'firebase/auth';
const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        signOut(auth)
            .then(() => {

            })
            .catch(err => alert(err.message))
    }
    return (
            <div className="header">
                <div className="header__left">
                    <img
                        src="https://raw.githubusercontent.com/AveryKing/linkedin-clone/0209f71716b47ce54b0a68330ab8cc088fd9315c/icons8-linkedin.svg"
                        alt="LinkedIn"/>
                    <div className="header__search">
                        <SearchIcon/>
                        <input placeholder='Search' type="text"/>
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOption text='Home' Icon={HomeIcon} />
                    <HeaderOption text='My Network' Icon={SupervisorAccountIcon} />
                    <HeaderOption text='Jobs' Icon={BusinessCenterIcon} />
                    <HeaderOption text='Messaging' Icon={ChatIcon} />
                    <HeaderOption text='Notifications' Icon={NotificationsIcon} />
                    <HeaderOption onClick={logoutOfApp} text="me" />
                </div>
            </div>

    );
};

export default Header;