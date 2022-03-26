import React, {useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import '../styles/Feed.css';
import InputOption from "./InputOption";
import Post from "./Post";
import {db} from '../lib/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Feed = () => {
    const [posts, setPosts] = useState([1,2,2,2,2,2,2]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            const posts = [];
            snapshot.forEach((doc) => (
                posts.push({
                    id:doc.id,
                    data:doc.data()
                })
            ))
            setPosts([posts]);
        })
    },[])

    const sendPost = (evt) => {
        evt.preventDefault();
    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} text='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} text='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} text='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} text='Write Article' color='#7FC15E'/>
                </div>
            </div>
            {posts.map((post,index) => (
                <Post key={index}
                      name='Avery King'
                      description='this is a test'
                      message='it works!'
                      />
            ))}

        </div>
    );
};

export default Feed;