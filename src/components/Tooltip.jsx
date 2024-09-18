import React from 'react';
import { useState } from 'react';

function Tooltip({text, children, position = "bottom", arrow = "top", className = "", arrowClassName =""}) {

    const arrowPosition = {
        
        top: "left-1/2 transform -translate-x-1/2 -mt-8 w-2 h-2",
        bottom:"left-1/2 transform -translate-x-1/2 mt-1 w-2 h-2",
        left: "top-1/2 transform -translate-y-1/2 -ml-3 w-2 h-2",
        right: "top-1/2 transform -translate-y-1/2 ml-[88%] w-2 h-2",
    }



    return (
    <>
        
        
        <div className=' relative inline-block group'>
            {children}
            <div className={`absolute ${className} bg-ahBackColor3 rounded-lg mt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100
                             text-ahTextColor top-full p-2 text-sm w-auto text-nowrap text-center transition-opacity`}>
                {text}
                <div className={`absolute ${arrowPosition[arrow]} ${arrowClassName} bg-ahBackColor3 rotate-45`}></div>
            </div>
        
        </div>
    </>
        
        
    )


}

export default Tooltip