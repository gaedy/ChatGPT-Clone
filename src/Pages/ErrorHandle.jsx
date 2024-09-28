import React from 'react'
import { NavLink } from 'react-router-dom'
NavLink

function ErrorHandle() {
  return (
    <div className='flex absolute text-2xl font-extrabold bg-orange-200 gap-6 flex-col border h-full w-full justify-center items-center'>
        <div>Wrong Page!</div>

        <NavLink to="/">
            <div className='hover:text-teal-900 text-teal-700 hover:underline'>Click Here For Homepage</div>
        </NavLink>

        
    </div>
  )
}

export default ErrorHandle