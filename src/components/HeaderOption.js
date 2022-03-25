import React from 'react';
import '../styles/HeaderOption.css';
const HeaderOption = ({Icon,text}) => {
    return (
        <div>
            <div className="headerOption">
                {Icon && <Icon className='headerOption__icon'/> }
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default HeaderOption;