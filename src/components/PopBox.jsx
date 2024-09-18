import React from 'react'


function PopBox({isOpen}) {
    if (!isOpen) {
        return null;
    }
    

    return (

        <div className='bg-ahHoverColor text-ahTextColor border border-ahBorderColor fixed top-14 left-24 w-svw max-h-96 max-w-sm z-10
        rounded-2xl p-2 flex flex-col  '
        >
            
            <div className='hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center'>
                <div>
                    <img src='src/assets/icon/chat2.svg' className='w-6 mr-3 brightness-90'></img>
                </div>
                <div className='mr-auto'>
                    <p className='text-sm'>ChatGPT Plus</p>
                    <p className='text-xs'>Our Smartest Model & More</p>
                    </div>
                <div>
                    
                    <div className='bg-blue-700 hover:bg-blue-800  p-1 text-sm rounded-2xl w-20 h-8 flex justify-center items-center text-ahTextColor00 font-semibold '>Upgrade</div>
                </div>
            </div>


            <div className='hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center'>
                <img src='src/assets/icon/chat1.svg' className='w-6 mr-3 brightness-90'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>ChatGPT</p>
                    <p className='text-xs'>Great for everyday tasks</p>
                </div>
            </div>


            <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>
            
            <div className='hover:bg-ahBorderColor cursor-pointer h-[25%] rounded-lg p-3  flex flex-row justify-between items-center'>
                <img src='src/assets/icon/tempchat.svg' className='w-6 mr-3 scale-150 brightness-150'></img>
                <div className='mr-auto'>
                    <p className='text-sm'>Temporary Chat</p>
                </div>
            </div>
        </div>
    )

}

export default PopBox