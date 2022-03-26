import React from 'react';
import '../styles/Login.css';
const Login = () => {
    return (
        <div className='login'>
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png" alt=""/>
            <form>
                <input placeholder="Full name" type="text"/>
                <input placeholder="Profile pic URL (optional)" type="text"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
            </form>
        </div>
    );
};

export default Login;