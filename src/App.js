import React, {useEffect} from 'react';
import './styles/App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./redux/userSlice";
import Login from "./components/Login";
import {auth} from "./lib/firebase";
import Widgets from './components/Widgets'
function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                dispatch(login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName,
                    photoUrl:userAuth.photoURL
                }))
            } else {
                dispatch(logout());
            }
        })
    }, [dispatch])
  return (
    <div className="app">
        {user && <Header/> }
        {user ? (
            <div className="app__body">

                <Sidebar />
                <Feed/>
                <Widgets />
            </div>
        ) : (
            <Login />
        )}

    </div>
  );
}

export default App;
