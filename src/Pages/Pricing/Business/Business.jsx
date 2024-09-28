import React from 'react'
import check from '/src/assets/icon/check.svg'

import teams from '/src/assets/icon/teams.svg'
function Business() {
  return (
    <div className=' flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:px-10'>

            <div className='border border-ahBorderColor shrink-0 w-11/12 md:w-[30rem] h-[28rem] rounded-xl p-6 flex flex-col justify-start'>
                <div className='flex items-start'>
                    <img src={teams} className='w-6 scale-[115%] mr-2'></img>
                    <div className='text-lg font-semibold'>Team</div>
                </div>
                
                <div className='text-ahTextColor3'>USD $25 per person/month*</div>

                <div className='flex justify-center items-center my-4 '>
                    <div className=' border cursor-pointer border-ahBorderColor text-sm text-ahTextColor00
                     rounded-full w-full md:w-64 text-center p-3 px-3 bg-blue-700 hover:bg-blue-800 shadow-lg '>Upgrade to Team</div>
                </div>

                <div className='text-[13px] flex flex-col gap-1'>

                    <div className='flex items-start'>
                        <img src={check} className='w-6 scale-[60%] mr-2'></img>
                        <div>Higher limits for GPT-4, GPT-4o, and tools like DALL·E image generation, advanced data analysis, web browsing, and more</div>
                    </div>

                    <div className='flex items-start'>
                        <img src={check} className='w-6 scale-[60%] mr-2'></img>
                        <div>Create and share GPTs with your workspace</div>
                    </div>
                    
                    <div className='flex items-start'>
                        <img src={check} className='w-6 scale-[60%] mr-2'></img>
                        <div>Admin console for workspace management</div>
                    </div>
                    
                    <div className='flex items-start'>
                        <img src={check} className='w-6 scale-[60%] mr-2'></img>
                        <div>Team data excluded from training by default.</div>
                        
                    </div>
                   
                </div>

                <div className='md:mb-2 mt-auto mb-auto text-xs'>* Price billed annually, minimum 2 users</div>

            </div>

        </div>
  )
}

export default Business