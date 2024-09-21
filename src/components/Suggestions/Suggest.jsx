import React from 'react'

function Suggest({text, icon, className = ""}) {

    
  return (

    <div className={`w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        rounded-xl border border-ahBorderColor transition duration-150 ${className}`}>
            <div className='m-3'>
                <img className='w-6 pointer-events-none' src={icon}></img>
                <p className=' py-3 text-ahTextColor3 text-wrap text-sm'>{text}</p>
            </div>

            
    </div>
  )
}

export default Suggest

