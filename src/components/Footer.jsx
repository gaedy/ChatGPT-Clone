import React from 'react'
import Tooltip from './Tooltip'
import PopBox3 from './PopBox3'
import { useState, useEffect, useRef } from 'react'

function Footer() {

  const [isAttachOpen, setIsAttachOpen] = useState(false);

  function toggleAttachButtom() {
    setIsAttachOpen((prev) => !prev);
  }

  useEffect(() => {
    
    if (isAttachOpen) {
      document.addEventListener('mousedown', clickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };

  }, [isAttachOpen]);

  const itemRef = useRef();

  const clickOutside = (eve) => {
    if (itemRef.current && !itemRef.current.contains(eve.target)) {
      toggleAttachButtom();
    }
  }

  return (
    <>

    <footer className='flex flex-col justify-center items-center h-fit w-full px-4 relative'>

        <div className='w-full max-w-3xl bg-ahHoverColor h-[52px] rounded-full flex flex-row justify-center items-center border border-ahBorderColor' >
            
            <Tooltip text="Attach File" arrow='bottom' className='tranform -translate-y-24' arrowClassName='left-7'><img className='w-6 ml-4 cursor-pointer ' src="src/assets/icon/attach.svg" alt="Link" onClick={toggleAttachButtom} ref={itemRef}></img></Tooltip>
            
            <input className='w-3/4 px-3 h-3/4 flex-1 min-w-[75%] bg-transparent border-none outline-none	text-ahTextColor00 placeholder-ahTextColor3 text-base ' type="text" placeholder="Message ChatGPT"></input>
            
            <img className='w-8 mr-3 opacity-30 pointer-events-none' src="src/assets/icon/upload.svg" alt="Link"></img>
            
        </div>

        <div className="absolute bottom-full w-full flex justify-center">
          <PopBox3 isOpen={isAttachOpen}></PopBox3>
        </div>
        
        <div className='text-ahTextColor2 text-xs mt-2 mb-1'>ChatGPT can make mistakes. Check important info.</div>
        
    </footer>
    </>
  )
}

export default Footer