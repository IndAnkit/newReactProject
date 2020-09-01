import React from 'react';
import './Widget.css';
import Popup from "reactjs-popup";
 
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';


function Widget() {
    return (
        <div className="widgets">
             <div className="widgets_input">
                 <SearchIcon className="widgets_searchIcon"/>
               <input placeholder="Search tweet" type="text"/> 

             </div>

             <div className="widgets__widget">
                 <h2>What's happening</h2>

                 <TwitterTweetEmbed tweetId={"1147479700236845057"}/>

                 <TwitterTimelineEmbed 
                 sourceType="profile"
                 screenName="cleverqazi"
                 options={{height:400}}
                 />
                
                 <TwitterShareButton
                 url={"https://facebook.com/cleverprogrammer"}
                 options={{text:"#reactjs awesome",via:"cleverqazi"}}
                 />
             </div>


         </div>
        // <h1>hello</h1>
        )
}

export default Widget; 
