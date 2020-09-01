import React from 'react'
import './Tweetbox.css'
import { Button, Avatar } from '@material-ui/core'
function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
            <div className="tweetBox__input">
              <Avatar/>
             <input placeholder="What's happening here??" />
            </div>
            <input
            className="tweetbox__imageinput"
            type="text"
            placeholder="optional : Enter Image url.."
            ></input>
            <Button className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
