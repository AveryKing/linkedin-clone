import React, {useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import '../styles/Feed.css';
import InputOption from "./InputOption";
import Post from "./Post";
import {serverTimestamp} from 'firebase/database';
import {db} from '../lib/firebase';

import { collection, doc,setDoc, onSnapshot } from "firebase/firestore";

const Feed = () => {
    const [postInput, setPostInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            const newPosts = [];
            snapshot.forEach((doc) => (
                newPosts.push({
                    id:doc.id,
                    data:doc.data()
                })
            ))
            setPosts(newPosts);
        })
    },[])

    const updatePostInput = (evt) => setPostInput(evt.target.value);

    const submitPost = async (evt) => {
        evt.preventDefault();
        // noinspection JSCheckFunctionSignatures
        await setDoc(doc(collection(db, 'posts')),{
            name: 'Avery King',
            description: 'Hello, world!',
            message: postInput,
            photoUrl: '',
            timestamp:serverTimestamp()
        });

    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={postInput} onChange={updatePostInput} type="text"/>
                        <button onClick={submitPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} text='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} text='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} text='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} text='Write Article' color='#7FC15E'/>
                </div>
            </div>
            {posts.map(({id, data: {name,description,message,photoUrl}},index) =>  (
                <Post key={index}
                      name={name}
                      description={description}
                      message={message}
                      photoUrl={photoUrl}
                      />
            ))}

        </div>
    );
};

export default Feed;