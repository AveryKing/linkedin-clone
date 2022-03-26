import React, {useState} from 'react';
import '../styles/Login.css';
import {auth} from "../lib/firebase";
import {useDispatch} from "react-redux";
import {login} from "../redux/userSlice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();
    const register = (e) => {
        e.preventDefault();
        if (!name) return alert('Please enter a name');
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    photoURL: profilePicture,
                    displayName: name
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName:name,
                            photoURL:profilePicture
                        }))
                    })
            })
            .catch((err) => {
                alert(err.message)
            })

    }
    const loginToApp = (e) => {

    }
    return (
        <div className='login'>
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
                 alt=""/>
            <form onSubmit={register}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" type="text"/>
                <input value={profilePicture} onChange={e => setProfilePicture(e.target.value)}
                       placeholder="Profile pic URL (optional)" type="text"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
                       type="password"/>
                <button type='submit'>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login__registerNow' onClick={register}>Register Now</span></p>
        </div>
    );
};

export default Login;