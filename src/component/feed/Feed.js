import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import Popup from "reactjs-popup";



const Modal = () => (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      closeOnDocumentClick
    >
      <span> Modal content </span>
    </Popup>
  );
  
function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">

            {/*  tweetbox */}
             <h2>Home</h2>

             </div>
            
             <Modal/>
            {/* post */}

            <TweetBox/>

            {/* post */}
            <Post />
            {/* post */}

            <Post />

            <Post />

            <Post />

            <Post />

            <Post />
            
        </div>
    )
}

export default Feed
