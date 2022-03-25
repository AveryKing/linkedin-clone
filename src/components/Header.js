import '../styles/Header.css';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <img
                        src="https://raw.githubusercontent.com/AveryKing/linkedin-clone/0209f71716b47ce54b0a68330ab8cc088fd9315c/icons8-linkedin.svg"
                        alt="LinkedIn"/>
                    <div className="header__search">
                        <SearchIcon/>
                        <input type="text"/>
                    </div>
                </div>
                <div className="header__right">

                </div>
            </div>
        </div>
    );
};

export default Header;