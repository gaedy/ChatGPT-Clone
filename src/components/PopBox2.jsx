import React from "react";
import { NavLink } from "react-router-dom";


function PopBox2({isOpen, refProp }) {
    
    if (!isOpen) {
        return null;
    }
    

    return (

        <div className='bg-ahHoverColor text-ahTextColor00 border border-ahBorderColor fixed top-14  right-4 w-64 h-fit z-10
        rounded-2xl p-2 flex flex-col shadow-lg ' ref={refProp}
        >
            
            <div className='hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center'>
                <div>
                    <img src='src/assets/icon/user2.svg' className='w-6 mr-3 scale-150 brightness-110'></img>
                </div>
                <div className='mr-auto'>
                    <p className='text-sm'>My GPTs</p>
                    
                    </div>
                
            </div>


            <div className='hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center'>
                <img src='src/assets/icon/user1.svg' className='w-6 mr-3 scale-150 brightness-110'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Customize ChatGPT</p>
                    
                </div>
            </div>

            <NavLink to="/settings">
                <div className='hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center'>
                    <img src='src/assets/icon/settings.svg' className='w-6 mr-3 scale-150 brightness-110'></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Settings</p>
                        
                    </div>
                </div>
            </NavLink>

            


            <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>

            <NavLink to="/pricing">
                <div className='hover:bg-ahBorderColor cursor-pointer rounded-lg p-3  flex flex-row justify-between items-center'>
                    <img src='src/assets/icon/star.svg' className='w-6 p-1 mr-3 scale-90 brightness-90'></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Upgrade Plan</p>
                    </div>
                </div>
            </NavLink>
            
            

            <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>

            <div className='hover:bg-ahBorderColor cursor-pointer  rounded-lg p-3  flex flex-row justify-between items-center'>
                <img src='src/assets/icon/logout.svg' className='w-6 mr-3 scale-150 brightness-110'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Log Out</p>
                </div>
            </div>
        </div>
    )

}

export default PopBox2