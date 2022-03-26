import React from 'react';
import CreateIcon from '@mui/icons-material/Create'
import '../styles/Feed.css';
const Feed = () => {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption />
                </div>
            </div>
        </div>
    );
};

export default Feed;