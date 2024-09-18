import React from 'react'



function Main() {


  return (
    

    <div className='flex flex-col justify-center items-center flex-grow select-none'>
      
      <div className='w-14 brightness-125  pointer-events-none mb-auto mt-auto'>
        <img src="src/assets/icon/logo.svg" alt="Logo Icon"></img>
      </div>

      <div className='flex flex-row gap-4 flex-wrap-reverse justify-center items-center w-11/12 px-2 mb-auto'>

        <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        rounded-xl border border-ahBorderColor transition duration-150 '></div>

        <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        rounded-xl border border-ahBorderColor transition duration-150 '></div>

        <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        rounded-xl border border-ahBorderColor transition duration-150 hidden md:flex'></div>

        <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        rounded-xl border border-ahBorderColor transition duration-150 hidden md:flex'></div>


      </div>
      


    </div>
    
  )
}

export default Main