import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function PopBox3({isOpen}) {



    if (!isOpen) {
        return null;
    }
    

    return (

        <div className=' relative bg-ahHoverColor text-ahTextColor00 border border-ahBorderColor shadow-xl -mb-3 md:-left-44 w-svw max-h-fit max-w-xs z-10
        rounded-2xl p-2 flex flex-col '
        >
            
            <div className='hover:bg-ahBorderColor cursor-pointer h-fit rounded-lg p-3 flex flex-row justify-between items-center'>
                <div>
                    <img src='src/assets/icon/googledrive.svg' className='w-6 mr-3 scale-90'></img>
                </div>

                <div className='mr-auto'>
                    <p className='text-sm'>Connect to Google Drive</p>
                </div>
                
            </div>



            <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 md:flex flex-row justify-between items-center relative group cursor-pointer hidden'>
                <img src='src/assets/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Connect to Microsoft OneDrive</p>
                    </div>
                <img src="src/assets/icon/down.svg" className="w-6 scale-75 -rotate-90 hidden md:flex"></img>


                <div className="absolute bg-ahHoverColor border border-ahBorderColor p-2 rounded-xl right-0 top-0 translate-x-64 w-fit h-28  shadow-lg flex-col justify-center hidden md:group-hover:flex">
                    <div className="h-1/2 hover:bg-ahBorderColor flex flex-row items-center p-2 rounded-lg text-sm cursor-pointer">Microsoft OneDrive - Personal</div>
                    <div className="h-1/2 hover:bg-ahBorderColor flex flex-row items-center p-2 rounded-lg text-sm cursor-pointer">Microsoft OneDrive - Work/School</div>
                </div>

                
            </div>

            <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 flex flex-row justify-between items-center relative group cursor-pointer md:hidden'>
                <img src='src/assets/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Microsoft OneDrive - Personal</p>
                    </div>
                
            </div>

            <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 flex flex-row justify-between items-center relative group cursor-pointer md:hidden'>
                <img src='src/assets/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Microsoft OneDrive - Work/School</p>
                    </div>
                
            </div>


            

        <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>

            <div className='hover:bg-ahBorderColor cursor-pointer h-fit rounded-lg p-3  flex flex-row justify-between items-center'>
                <img src='src/assets/icon/fileupload.svg' className='w-6 mr-3 scale-100 brightness-150'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Upload from Computer</p>
                </div>
            </div>
        </div>
    )

}

export default PopBox3