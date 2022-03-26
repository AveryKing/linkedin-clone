import React from 'react';
import './styles/App.css';
import { Counter } from './features/counter/Counter';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <Header/>
        <div className="app__body">
            <Sidebar />
            <Feed/>
        </div>
    </div>
  );
}

export default App;
