import React, {useState} from 'react';
import '../styles/Login.css';
import {auth} from "../lib/firebase";
import {useDispatch} from "react-redux";
import {login} from "../redux/userSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {FcGoogle} from 'react-icons/fc';
import {GrGithub} from 'react-icons/gr';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {Divider} from "@mui/material";
import signInWithGoogle from "../lib/google-auth";
import signInWithGitHub from "../lib/github-auth";
const Login = () => {
    const [mode, setMode] = useState(1);
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
                            photoUrL:''
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
                    photoURL:userAuth.user.photoURL
                }))
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
                 alt=""/>

            <form onSubmit={mode === 1 ? loginToApp : register}>
                {mode === 2 && (
                    <>
                        <input  autoComplete="none" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" type="text"/>
                    </>
                )}
                <input autoComplete={"none" } value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input autoComplete={"none" } value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
                       type="password"/>
                <button type='submit'>{mode === 1 ? 'Sign In' : 'Sign Up'}</button>
                <Divider className='login__divider'>OR</Divider>
                <div onClick={() => signInWithGoogle()}
                     className='login__google'>
                    <FcGoogle size={25}/>
                    {mode === 1 ? <p>Sign In With Google</p> : <p>Sign Up With Google</p> }
                </div>
                <div onClick={() => signInWithGitHub()}
                     className='login__google'>
                    <GrGithub size={25}/>
                    {mode === 1 ? <p>Sign In With GitHub</p> : <p>Sign Up With Google</p> }
                </div>
            </form>
            {mode === 1 &&<p className='login__notMember'>Not a member?{" "}
                <span className='login__registerNow' onClick={()=>setMode(2)}>Register Now</span></p>  }
            <footer>
                Built with <FavoriteIcon sx={{position:'relative',fontSize:'20px',top:'5px',color:'#ff004d'}} /> by Avery King
            </footer>
        </div>
    );
};

export default Login;