import React from 'react'
// import Tooltip from './Tooltip'
// import Item from './Items/Item'
// import { itemsArray } from './Items/itemsArray'
import sidebar1 from '/src/assets/icon/sidebar1.svg'
import sidebarmobile from '/src/assets/icon/sidebarmobile.svg'
import newchat from '/src/assets/icon/newchat.svg'
import logo from '/src/assets/icon/logo.svg'
import menu from '/src/assets/icon/menu.svg'
import chatgptplus from '/src/assets/icon/chatgptplus.svg'
import Tooltip from '../../components/Tooltip'
import Item from './Items/Item'
import { itemsArray } from './Items/itemsArray'


function Sidebar({toggleSidebarButton}) {

  
   

  return (
    <>
    
    <div className='bg-ahBackColor2 absolute h-full w-full flex flex-col justify-start py-2 px-2= p-2 text-sm text-ahTextColor00 border-r border-ahBorderColor border-opacity-50 shadow-lg select-none '>

      <div className='flex flex-row justify-between mx-1 '>

        <Tooltip text="Close Sidebar" className='translate-x-14 -translate-y-12' arrow='left' arrowClassName='border-b border-l'>
          <div className='hover:bg-ahBackColor p-2 rounded-lg cursor-pointer' onClick={toggleSidebarButton}>

            <img src={sidebar1} className='w-6 pointer-events-none md:flex hidden brightness-75'></img>
            <img src={sidebarmobile} className='w-6 pointer-events-none md:hidden brightness-75'></img>
          </div>
        </Tooltip>


        <Tooltip text="New Chat" arrow='right' className='-translate-x-24 -translate-y-12' arrowClassName='left-[6px] border-t border-r'>
          <div className='hover:bg-ahBackColor p-2 rounded-lg cursor-pointer'>
            <img src={newchat} className='w-6 pointer-events-none brightness-75'></img>
          </div>
        </Tooltip>
      </div>





      {/* Middle */}

      <div className=' overflow-y-auto overflow-clip mt-4 h-full'>
        <div className='h-10 hover:bg-ahBackColor rounded-lg mt-0 p-2 mx-1 mr-2 flex flex-row items-center text-sm cursor-pointer group'>
          <img src={logo} className='w-6 scale-75 mr-2 pointer-events-none'></img>
          <div>ChatGPT</div>

          <img src={newchat} className='w-6 scale-[70%] brightness-75  hover:brightness-100 ml-auto hidden group-hover:flex'></img>
        </div>

        <div className='h-10 hover:bg-ahBackColor rounded-lg p-2 mx-1 mr-2 flex flex-row items-center text-sm cursor-pointer'>
          <img src={menu} className='w-6 scale-75 mr-2 brightness-75'></img>
          <div>Explore GPTs</div>
        </div>



        <div className='flex flex-col flex-grow'>
          {itemsArray.map((myItems) => (
            
            <Item date={myItems.date} item={myItems.item}></Item>
          ))}
        </div>
        
      </div>


        <div className=' p-2 h-14 mx-1 mt-2 hover:bg-ahBackColor rounded-lg flex flex-row justify-start cursor-pointer'>
          <img src={chatgptplus} className='w-6 scale-75 brightness-75 mr-2 '></img>

          <div className='flex flex-col justify-center items-start'>
            
            <p>Upgrade Plan</p>
            <p className='text-[11px] brightness-75'>More access to the best models</p>
          </div>
        </div>
   
      
    </div>

    

    </>


    
  )
}

export default Sidebar