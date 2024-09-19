import React from 'react'
import navStyle from "./Nav.module.css";
import { useState } from 'react';
import Tooltip from './Tooltip';
import PopBox from './PopBox';
import PopBox2 from './PopBox2';
import Sidebar from './Sidebar';



function Nav({toggleSidebarButton}) {

    const [isPopupChatOpen, setIsPopupChatOpen] = useState(false);
    const [isArrowFlip, setIsArrowFlip] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    
    const toggleChatButton = () => {
        setIsPopupChatOpen(!isPopupChatOpen);
        setIsArrowFlip(!isArrowFlip);
        
        
    }
    const toggleProfileButton = () => {
        setIsProfileOpen(!isProfileOpen);
    }

    



  return (
    <>
    
    
    <div className={navStyle.nav}>
       
        {/* SideBar Icon / SideBar Opened;Closed */}

        <div onClick={toggleSidebarButton}>

        <Tooltip text="Open Sidebar" position="bottom" arrow="top" arrowClassName='left-5' className='-left-2'>

            
                <img src="src/assets/icon/sidebar.svg" alt="Sidebar Icon" className={navStyle.icon}></img>
            
        </Tooltip>
        </div>
        

        {/* New Chat Icon */}
        <Tooltip text="New Chat">
            <div>
            <   img src="src/assets/icon/chat.svg" alt="Chat Icon" className={navStyle.icon}></img>
            </div>
        </Tooltip>
        


        {/* ChatGPT Icon, Hanle When Clicked and Closed */}
        <div className={navStyle.gptIcon} style={{width:"auto", borderRadius:"7px", backgroundColor: isPopupChatOpen ? "hsl(0, 0%, 20%)" : ''}} onClick={toggleChatButton}>
            ChatGPT

            <img style={{scale:"80%"}} src="src/assets/icon/down.svg" alt="Chat Icon" className={`${navStyle.icon} ${isArrowFlip ? navStyle.iconFlipped : 'z-0'}`}></img>

            
        </div>
        


        {/* Profile Icon */}
        

            <div style={{marginLeft: "auto", borderRadius: "50%"}} onClick={toggleProfileButton}>
                <img src="src/assets/icon/profile.svg" alt="Profile Icon" className={navStyle.icon} ></img>
                
            </div>
          
    </div>
    <PopBox isOpen={isPopupChatOpen} ></PopBox>
    <PopBox2 isOpen={isProfileOpen} ></PopBox2>
    
    
    
    </>
    
  )
}

export default Nav