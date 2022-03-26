import React, {useState} from 'react';
import '../styles/Login.css';
import {auth} from "../lib/firebase";
import {useDispatch} from "react-redux";
import {login} from "../redux/userSlice";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();
    const register = (e) => {
        e.preventDefault();
        if (!name) return alert('Please enter a name');
        createUserWithEmailAndPassword(auth,email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    photoURL: profilePicture,
                    displayName: name
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName:name,
                            photoUrL:profilePicture
                        }))
                    })
            })
            .catch((err) => {
                alert(err.message)
            })

    }
    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
            .then((userAuth) => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrL:userAuth.user.photoURL
                }))
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
                 alt=""/>
            <form onSubmit={loginToApp}>
                <input  autoComplete="none" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" type="text"/>
                <input autoComplete={"none" } value={profilePicture} onChange={e => setProfilePicture(e.target.value)}
                       placeholder="Profile pic URL (optional)" type="text"/>
                <input autoComplete={"none" } value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input autoComplete={"none" } value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
                       type="password"/>
                <button type='submit'>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login__registerNow' onClick={register}>Register Now</span></p>
        </div>
    );
};

export default Login;