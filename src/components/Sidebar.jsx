import React from 'react'

function Sidebar({isOpen}) {
    if (!isOpen) {
        return null;
    }

  return (
    <div className='absolute -left-0 h-full w-64 bg-red-900 opacity-100'>Sidebar</div>
  )
}

export default Sidebar