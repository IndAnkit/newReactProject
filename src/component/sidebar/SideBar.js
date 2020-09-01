import React from 'react';
import './Sidebar.css';

import SideBarOption from './SideBarOption'

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';

import Notifications from '@material-ui/icons/NotificationsNone';

import Search from '@material-ui/icons/Search';

import MailOutlineIcon from '@material-ui/icons/MailOutline';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';









function SideBar() {
    return (
        <div className="sidebar">
            {/* twitter icons*/}
            <TwitterIcon className="sidebar_twitterIcon"/>
            {/* sidebar option */}

            <SideBarOption active Icon={HomeIcon} text="Home"/>
            <SideBarOption Icon={Search} text="Explore"/>

            <SideBarOption Icon={Notifications} text="Notifications"/>
            <SideBarOption Icon={MailOutlineIcon} text="Message"/>
            <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SideBarOption Icon={ListAltIcon} text="Lists"/>
            <SideBarOption Icon={PermIdentityIcon} text="Profile"/>
            <SideBarOption Icon={MoreHorizIcon} text="More"/>
            
            {/* <SideBarOption text="Home"/>

            <SideBarOption text="Home"/> */}

          <Button variant="outlined" className="slidebar__tweet" fullWidth>Twitter</Button>
        </div>
    )
}

export default SideBar
