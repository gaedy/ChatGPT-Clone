import React from 'react'

function Sidebar() {
   

  return (
    <>
    
    <div className='bg-ahBackColor2 fixed h-full w-full flex flex-col justify-start py-2 p-2 text-sm text-ahTextColor'>

      
     
        <div className='h-10 hover:bg-ahBackColor rounded-lg mt-12 p-2 flex flex-row items-center text-sm cursor-pointer'>
          <img src='src/assets/icon/logo.svg' className='w-6 scale-75 mr-2'></img>
          <div>ChatGPT</div>
        </div>
        <div className='h-10 hover:bg-ahBackColor rounded-lg p-2 flex flex-row items-center text-sm cursor-pointer'>
        <img src='src/assets/icon/menu.svg' className='w-6 scale-75 mr-2 brightness-75'></img>
          <div>Explore GPTs</div>
        </div>
        <div className='flex-grow hover:bg-ahBackColor my-3 rounded-lg flex flex-row items-center'>
          <div>gjgjghj</div>
        </div>
        <div className='mt-auto h-14 hover:bg-ahBackColor rounded-lg flex flex-row justify-center'>
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