import React, { Fragment } from 'react'

function Pricing() {
  return (
    <Fragment>
        <div className='flex absolute h-full overflow-y-auto w-full flex-col justify-start items-center gap-4 text-ahTextColor00 bg-ahHoverColor'>
            <div className='text-2xl font-bold mt-6 md:mt-16'>Upgrade your plan</div>
            <div className='bg-ahBorderColor flex justify-center items-center p-1 gap-1 text-sm rounded-full'>
                <div className=' hover:bg-ahBackColor rounded-full w-1/2 p-2 cursor-pointer px-3'>Personal</div>
                <div className=' hover:bg-ahBackColor rounded-full w-1/2 p-2 cursor-pointer px-3'>Business</div>
            </div>


        <div className=' flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:px-10'>

            <div className='border border-ahBorderColor shrink-0 w-11/12 md:w-1/2 h-[26rem] rounded-xl p-6 flex flex-col justify-start'>
                <div className='text-lg font-semibold'>Free</div>
                <div className='text-ahTextColor3'>USD 0$/month</div>

                <div className='flex justify-center items-center my-4 '>
                    <div className=' border cursor-not-allowed border-ahBorderColor text-sm text-ahTextColor3 rounded-full w-full md:w-64  text-center p-3 px-3'>Your current plan</div>
                </div>

                <div className='text-[13px] flex flex-col gap-3'>
                    <div>Assistance with writing, problem solving and more</div>
                    <div>Access to GPT-4o mini</div>
                    <div>Limited access to GPT-4o</div>
                    <div>Limited access to data analysis, file uploads, vision, web browsing, and image generation</div>
                    <div>Use custom GPTs</div>

                </div>

                <div className='md:mt-auto mt-6 text-xs'>Have an existing plan? See billing help</div>

            </div>


            <div className='border border-ahBorderColor shrink-0 w-11/12 md:w-1/2 h-[26rem]  rounded-xl p-6 flex flex-col justify-start'>
                <div className='text-lg font-semibold'>Free</div>
                <div className='text-ahTextColor3'>USD 0$/month</div>

                <div className='flex justify-center items-center my-4'>
                    <div className=' border border-ahBorderColor text-sm text-ahTextColor3 rounded-full w-full md:w-64 text-center p-3 cursor-pointer px-3'>Your current plan</div>
                </div>

                <div className='text-[13px] flex flex-col gap-3'>
                    <div>Assistance with writing, problem solving and more</div>
                    <div>Access to GPT-4o mini</div>
                    <div>Limited access to GPT-4o</div>
                    <div>Limited access to data analysis, file uploads, vision, web browsing, and image generation</div>
                    <div>Use custom GPTs</div>

                </div>

                <div className='md:mt-auto mt-6 text-xs'>Have an existing plan? See billing help</div>

            </div>


        </div>

            

        



           
        </div>
    </Fragment>
  )
}

export default Pricing