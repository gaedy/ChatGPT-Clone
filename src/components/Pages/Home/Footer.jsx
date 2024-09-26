import React from 'react'
import Tooltip from './Tooltip'
import PopBox3 from './PopBox3'
import { useState, useEffect, useRef } from 'react'
import attach from '/src/assets/icon/attach.svg';
import upload from '/src/assets/icon/upload.svg';
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

    <footer className='flex flex-col justify-center items-center h-fit w-full px-4 relative '>

        <div className='w-full max-w-3xl bg-ahHoverColor h-[52px] rounded-full flex flex-row justify-center items-center transition-opacity duration-300
         border border-ahBorderColor border-opacity-20 hover:border-opacity-100 focus-within:border-opacity-100 shadow-lg ' >
            
            <Tooltip text="Attach File" arrow='bottom' className='tranform -translate-y-24' arrowClassName='left-7'>
              <div className=' w-6 ml-4 cursor-pointer select-none' onClick={toggleAttachButtom} ref={itemRef}>
                <img className=' pointer-events-none' src={attach} alt="Link" ></img>
              </div>
            </Tooltip>
            
            <input className='w-3/4 px-3  h-3/4 flex-1 min-w-[75%] bg-transparent border-none outline-none	text-ahTextColor00 placeholder-ahTextColor3 text-base  ' type="text" placeholder="Message ChatGPT"></input>
            <img className='w-8 mr-3 opacity-30 pointer-events-none select-none' src={upload} alt="Link"></img>
            
            
        </div>

        <div className="absolute bottom-full w-full flex justify-center">
          <PopBox3 isOpen={isAttachOpen}></PopBox3> 
        </div>
        
        <div className='text-ahTextColor2 text-xs mt-2 mb-1'>ChatGPT can make mistakes. Check important info.</div>

        {/* <div className=' absolute right-2 bottom-0 p-1 select-none cursor-pointer hidden md:flex group'>
          <div className=' hidden group-hover:flex -translate-y-10 translate-x-4 text-xs text-ahTextColor'>I am the danger.</div>
          <img src='src/assets/icon/walter.svg' className='w-6 scale-75 pointer-events-none'></img>
          
        </div> */}
        
    </footer>
    </>
  )
}

export default Footer