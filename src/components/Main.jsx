import React from 'react'
import Suggest from './Suggestions/Suggest'
import { suggestionsArray } from './Suggestions/suggestionsArray'


function Main() {


  return (
    

    <div className='flex flex-col justify-center items-center flex-grow select-none '>
      
      <div className='w-16 brightness-100 bg-none  pointer-events-none mb-auto mt-auto'>
        <img src="src/assets/icon/logo.svg" alt="Logo Icon"></img>
      </div>

      <div className='flex flex-row gap-4 flex-wrap-reverse justify-center items-center w-11/12 px-2 mb-auto'>

        {suggestionsArray.map((suggestion,index) => (
          <Suggest
           text={suggestion.text}
           icon={suggestion.icon}
           className={index < 2 ? "hidden sm:flex" : ""}
          ></Suggest>
        )
      )}

      </div>
  
    </div>
    
  )
}

export default Main



        // <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        // rounded-xl border border-ahBorderColor transition duration-150 '></div>

        // <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        // rounded-xl border border-ahBorderColor transition duration-150 '></div>

        // <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        // rounded-xl border border-ahBorderColor transition duration-150 hidden md:flex'></div>

        // <div className='w-44 h-32 flex-shrink-0 bg-ahBackColor hover:bg-ahHoverColor hover:cursor-pointer
        // rounded-xl border border-ahBorderColor transition duration-150 hidden md:flex'></div>



        // <Suggest text="ChatGPT is credited with accelerating the AI boom" icon={"src/assets/icon/sugg1.svg"}></Suggest>
        // <Suggest text="These labels were used to train a model to detect such content" icon={"src/assets/icon/sugg2.svg"}></Suggest>
        // <Suggest text="OpenAI collects data from ChatGPT users to train" icon={"src/assets/icon/sugg3.svg"}></Suggest>
        // <Suggest text="ChatGPT attempts to reduce harmful and deceitful responses" icon={"src/assets/icon/sugg4.svg"}></Suggest>