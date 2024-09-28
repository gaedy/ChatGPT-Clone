import React from 'react'

function Security() {
  return (
  
    <div className='flex flex-col text-sm w-full h-full'>
        <div>
          <div className='flex flex-row justify-between items-center'>
            <div>Multi-factor authentication</div>
            <div className='hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer'>Enable</div>
          </div>
          <div className='text-xs text-ahTextColor text-clip mr-36'>Require an extra security challenge when logging in. If you are unable to pass
             this challenge, you will have the option to recover your account via email.</div>
          </div>

    <hr className='w-full border-1 opacity-10 my-4'></hr>

        <div>
          <div className='flex flex-row justify-between items-center'>
            <div>Log out of all devices</div>
            <div className='hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer'>Log out all</div>
          </div>
          <div className='text-xs text-ahTextColor text-pretty mr-36'>Log out of all active sessions across all devices,
             including your current session. It may take up to 30 minutes for other devices to be logged out.</div>
        </div>



    </div>
      
      
      

      
 
  )
}

export default Security