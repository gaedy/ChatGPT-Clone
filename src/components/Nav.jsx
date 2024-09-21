import React from 'react'

import { useState } from 'react';
import Tooltip from './Tooltip';
import PopBox from './PopBox';
import PopBox2 from './PopBox2';
import Sidebar from './Sidebar';



function Nav({toggleSidebarButton,isSidebarOpen}) {

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
        <div className='flex flex-row justify-start items-center  m-2 mx-3 select-none '>

            
            

            <Tooltip text={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} arrow="top" arrowClassName='left-5'>

                <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all  ${isSidebarOpen ? "hidden" : "visible"}`} onClick={toggleSidebarButton}>
                    <img src='src/assets/icon/sidebar.svg' className='w-6 min-w-6 pointer-events-none'></img>
                </div>
            </Tooltip>



            <Tooltip text="New Chat" position='bottom' className='-ml-5 '>
            <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all  ${isSidebarOpen ? "hidden" : "visible"}`}>
                <img src='src/assets/icon/chat.svg' className='w-6 min-w-6 pointer-events-none'></img>
            </div></Tooltip>


            <div className='hover:bg-ahHoverColor rounded-lg px-3 py-[6px] text-ahTextColor2 font-medium text-lg
                            flex flex-row select-none cursor-pointer bg-none relative transition-all' onClick={toggleChatButton}>
                <p>ChatGPT Auto</p>
                <img src="src/assets/icon/down.svg" className={`w-6 min-w-6 scale-75 -mr-1 transition-transform duration-200 pointer-events-none ${isArrowFlip ? 'rotate-180' : 'rotate-0'}`}></img>
                
                <div className="absolute top-12 bottom-full left-0 ">
                <PopBox isOpen={isPopupChatOpen}></PopBox></div>
            </div>


            <div className='hover:bg-ahHoverColor p-2 rounded-full ml-auto cursor-pointer bg-none relative transition-all' onClick={toggleProfileButton}>
                <img src='src/assets/icon/profile.svg' className='w-6 min-w-6 scale-125 pointer-events-none'></img>

                <PopBox2 isOpen={isProfileOpen} ></PopBox2>
            </div>
           

        </div>
    
    
    
    
    
    </>
    
  )
}

export default Nav

