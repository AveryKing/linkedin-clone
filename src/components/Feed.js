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

import {
    collection,
    serverTimestamp,
    doc,
    setDoc,
    query,
    onSnapshot,
    orderBy
} from "firebase/firestore";
import {useSelector} from "react-redux";
import {selectUser} from "../redux/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser);
    const [postInput, setPostInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            const newPosts = [];
            snapshot.forEach((doc) => (
                newPosts.push({
                    id: doc.id,
                    data: doc.data()
                })
            ))
            setPosts(newPosts);
        })
    }, [])

    const updatePostInput = (evt) => setPostInput(evt.target.value);

    const submitPost = async (evt) => {
        evt.preventDefault();
        // noinspection JSCheckFunctionSignatures
        await setDoc(doc(collection(db, 'posts')), {
            name: user.displayName,
            description: user.email,
            message: postInput,
            photoUrl: user.photoUrl,
            timestamp: serverTimestamp()
        });
        setPostInput('')

    }
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
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
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post key={id}
                          name={name}
                          description={description}
                          message={message}
                          photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>


        </div>
    );
};

export default Feed;