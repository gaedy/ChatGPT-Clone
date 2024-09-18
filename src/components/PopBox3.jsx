import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function PopBox3({isOpen}) {



    if (!isOpen) {
        return null;
    }
    

    return (

        <div className=' relative bg-ahHoverColor text-ahTextColor border border-ahBorderColor -mb-4 sm:-left-44  w-svw max-h-fit max-w-xs z-10
        rounded-2xl p-2 flex flex-col  '
        >
            
            <div className='hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center'>
                <div>
                    <img src='src/assets/icon/googledrive.svg' className='w-6 mr-3 scale-90'></img>
                </div>
                <div className='mr-auto'>
                    <p className='text-sm'>Connect to Google Drive</p>
                    
                    </div>
                
            </div>


            <div className='hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center'>
                <img src='src/assets/icon/onedrive.svg' className='w-6 mr-3 scale-90'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Connect to Microsoft OneDrive</p>
                    
                </div>
            </div>



           
            <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>

            <div className='hover:bg-ahBorderColor cursor-pointer h-[25%] rounded-lg p-3  flex flex-row justify-between items-center'>
                <img src='src/assets/icon/fileupload.svg' className='w-6 mr-3 scale-100 brightness-150'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Upload from Computer</p>
                </div>
            </div>
        </div>
    )

}

export default PopBox3