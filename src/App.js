import React from 'react';
import './App.css';
import Feed from './component/feed/Feed'
import SideBar from './component/sidebar/SideBar'
import Widget from './component/widget/Widget';

function App() {
  return (
    <div className="app">
      {/*--side bar--- */}
       <SideBar/>

      {/* ---feed-- */}

     <Feed/>
      {/* ----widget right-- */}
     <Widget/>

    </div>
  );
}

export default App;
