import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useSelector} from "react-redux";
import {selectUser} from "./redux/userSlice";
import Login from "./components/Login";

function App() {const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
        {user ? (
            <div className="app__body">
                <Sidebar />
                <Feed/>
            </div>
        ) : (
            <Login />
        )}

    </div>
  );
}

export default App;
