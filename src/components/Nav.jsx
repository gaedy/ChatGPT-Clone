import React from 'react'

import { useState, useEffect, useRef } from 'react';
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


    useEffect(() => {
        if (isProfileOpen ) {
            document.addEventListener('mousedown', clickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [isProfileOpen]);


    const itemRef = useRef();

    const clickOutside = (event) => {
        if (itemRef.current && !itemRef.current.contains(event.target)) {
            toggleProfileButton();  
        }

    }

    



  return (
    <>
        <div className=' md:hidden flex flex-row justify-between  m-2 mx-3 ' >
            <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all ${isSidebarOpen ? "md:hidden visible" : "visible"}`} onClick={toggleSidebarButton}>
                <img src="src/assets/icon/sidebarmobile.svg" className='w-6 min-w-6 brightness-75 pointer-events-none'></img>
            </div>

            <div className='hover:bg-ahHoverColor rounded-lg px-3 py-[6px] text-ahTextColor2 font-medium text-lg
                            flex flex-row select-none cursor-pointer bg-none relative transition-all' onClick={toggleChatButton}>
                <p>ChatGPT Auto</p>
                <img src="src/assets/icon/down.svg" className={`w-6 min-w-6 scale-75 -mr-1 transition-transform duration-200 pointer-events-none ${isArrowFlip ? 'rotate-180' : 'rotate-0'}`} ></img>
                <div className="absolute top-12 bottom-full md:left-0 -left-[57%]">
                <PopBox isOpen={isPopupChatOpen}></PopBox></div>
            </div>

            
            <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all ${isSidebarOpen ? "sm:hidden visible" : "visible"}`}>
                <img src='src/assets/icon/newchat.svg' className='w-6 min-w-6 pointer-events-none brightness-75'></img>
            </div>
        </div>


        <div className='md:flex  md:justify-center justify-between items-center m-2 mx-3 select-none hidden '>

            <Tooltip text={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} arrow="top" arrowClassName='left-5'>

                <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all ${isSidebarOpen ? "md:hidden visible" : "visible"}`} onClick={toggleSidebarButton}>
                    <img src='src/assets/icon/sidebar1.svg' className='w-6 min-w-6 pointer-events-none brightness-75'></img>
                </div>
            </Tooltip>


            <Tooltip text="New Chat" position='bottom' className='-ml-5 '>
            <div className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all ${isSidebarOpen ? "sm:hidden visible" : "visible"}`}>
                <img src='src/assets/icon/newchat.svg' className='w-6 min-w-6 pointer-events-none brightness-75'></img>
            </div></Tooltip>


            <div className='hover:bg-ahHoverColor rounded-lg px-3 py-[6px] text-ahTextColor2 font-medium text-lg
                            flex flex-row select-none cursor-pointer bg-none relative transition-all ' onClick={toggleChatButton}>
                <p>ChatGPT Auto</p>
                <img src="src/assets/icon/down.svg" className={`w-6 min-w-6 scale-75 -mr-1 transition-transform duration-200 pointer-events-none ${isArrowFlip ? 'rotate-180' : 'rotate-0'}`} ></img>
                
                <div className="absolute top-12 bottom-full left-0">
                <PopBox isOpen={isPopupChatOpen}></PopBox></div>
            </div>


            <div className='hover:bg-ahHoverColor p-2 rounded-full ml-auto cursor-pointer bg-none relative transition-all hidden md:flex' onClick={toggleProfileButton} ref={itemRef}>
                <img src='src/assets/icon/profile.svg' className='w-6 min-w-6 scale-125 pointer-events-none'></img>

                
            </div>
           

        </div>
    
    
    
        <PopBox2 isOpen={isProfileOpen} ></PopBox2>
    
    </>
    
  )
}

export default Nav

