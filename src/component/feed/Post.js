import React from 'react'
import './post.css';
import {Avatar} from '@material-ui/core'
import  VerifiedUserIcon  from '@material-ui/icons/VerifiedUser'
import  ChatBubbleOutLineIcon  from '@material-ui/icons/ChatBubbleOutline'
import  RepeatIcon  from '@material-ui/icons/Repeat'
import  FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'
import  PublishIcon  from '@material-ui/icons/Publish'

function Post({
    dislayName,
    userName,
    verifie,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
           <div className="post__avatar">
               <Avatar/>
            </div> 

            <div className="post__body">
              <div className="post__header">
                <div className="post__headerText">
                    <h3>Ankit Patidar {""}
                   
                   <span className="post__headerSpecial">
                    <VerifiedUserIcon className="post__badge"/>
                    </span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                    <p>I challenge you to build a twitter clone with react and firebase..</p>
                </div>
                </div>  
                <img src="https://s3.india.com/wp-content/uploads/2020/05/Image-4-41.jpg" alt="msd"/>
                
                <div className="post__footer">
                    <ChatBubbleOutLineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>

                </div>
                
            </div>   
        </div>
    )
}

export default Post
