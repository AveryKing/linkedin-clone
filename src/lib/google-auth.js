import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from './firebase';
import {store} from '../redux/store';
import {login} from "../redux/userSlice";

const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((userAuth) => {
            const {user} = userAuth;
            store.dispatch(login({
                email:user.email,
                uid:user.uid,
                displayName:user.displayName,
                photoURL:user.photoURL
            }))
        })
        .catch(err => alert(err.message))
}

export default signInWithGoogle;

