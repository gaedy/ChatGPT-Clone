import React from 'react'
import Tooltip from './Tooltip'

function Sidebar({toggleSidebarButton}) {
   

  return (
    <>
    
    <div className='bg-ahBackColor2 absolute h-full w-full flex flex-col justify-start py-2 px-2= p-2 text-sm text-ahTextColor select-none '>

      <div className='flex flex-row justify-between mx-1'>

        <Tooltip text="Close Sidebar" className='translate-x-14 -translate-y-12' arrow='left'>
          <div className='hover:bg-ahBackColor p-2 rounded-lg cursor-pointer' onClick={toggleSidebarButton}>
            <img src='src/assets/icon/sidebar.svg' className='w-6 pointer-events-none'></img>
          </div>
        </Tooltip>


        <Tooltip text="New Chat" arrow='right' className='-translate-x-24 -translate-y-12' arrowClassName='left-[6px]'>

          <div className='hover:bg-ahBackColor p-2 rounded-lg cursor-pointer'>
            <img src='src/assets/icon/chat.svg' className='w-6 pointer-events-none'></img>
          </div>
        </Tooltip>

        
      </div>

      
     
        <div className='h-10 hover:bg-ahBackColor rounded-lg mt-4 p-2 mx-1 flex flex-row items-center text-sm cursor-pointer'>
          <img src='src/assets/icon/logo.svg' className='w-6 scale-75 mr-2 pointer-events-none'></img>
          <div>ChatGPT</div>
        </div>
        <div className='h-10 hover:bg-ahBackColor rounded-lg p-2 mx-1 flex flex-row items-center text-sm cursor-pointer'>
        <img src='src/assets/icon/menu.svg' className='w-6 scale-75 mr-2 brightness-75'></img>
          <div>Explore GPTs</div>
        </div>
        <div className='flex-grow hover:bg-ahBackColor my-3 mx-1 rounded-lg flex flex-row items-center'>
          <div>gjgjghj</div>
        </div>
        <div className='mt-auto h-14 mx-1 hover:bg-ahBackColor rounded-lg flex flex-row justify-center'>
          <img src='src/assets/icon/menu.svg' className='w-6 scale-75 brightness-75'></img>

          <div className='flex flex-col justify-center mx-3'>
            <p>Upgrade Plan</p>
            <p className='text-[11px] brightness-75'>More access to the best models</p>
          </div>
        </div>
   
      
    </div>

    

    

    </>


    
  )
}

export default Sidebar