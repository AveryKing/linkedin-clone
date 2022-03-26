import React from 'react';
import '../styles/InputOption.css';
const InputOption = ({Icon, text, color}) => {
    return (
        <div className='inputOption'>
            <Icon style={{color}} />
            <h4>{text}</h4>
        </div>
    );
};

export default InputOption;