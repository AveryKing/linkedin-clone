import React, {forwardRef} from 'react';
import '../styles/Post.css';
import {Avatar} from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Post = forwardRef(({name,description,message,photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOffAltIcon} text='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} text='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} text='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} text='Send' color='gray' />
            </div>
        </div>
    );
});

export default Post;