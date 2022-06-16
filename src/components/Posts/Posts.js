import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react'
import InputOption from '../Feed/InputOption';
import './Posts.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import OutboxIcon from '@mui/icons-material/Outbox';

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
            <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray" />
            <InputOption Icon={IosShareIcon} title="Share" color="gray" />
            <InputOption Icon={OutboxIcon} title="Send" color="gray" />
        </div>

    </div>
  )
})

export default Posts