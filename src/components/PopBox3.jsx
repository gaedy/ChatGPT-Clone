import { animated, useSpring } from "@react-spring/web";


function PopBox3({isOpen, refProp}) {


    const animation = useSpring({
        y: isOpen ? 0: 5,
        opacity: isOpen ? 1 : 0,
        config: { mass: 1, clamp: true, friction:15, duration: 200, },
        delay: isOpen ? 100 : 0,
    });



    if (!isOpen) {
        return null;
    }
    

    return (

        <animated.div style={animation}>
            <div className=' relative  bg-ahHoverColor text-ahTextColor00 border border-ahBorderColor shadow-xl -mb-3 md:-left-44 w-svw max-h-fit max-w-xs z-10
            rounded-2xl p-2 flex flex-col' ref={refProp}
            >
                
                <div className='hover:bg-ahBorderColor cursor-pointer h-fit rounded-lg p-3 flex flex-row justify-between items-center'>
                    <div>
                        <img src='/icon/googledrive.svg' className='w-6 mr-3 scale-90'></img>
                    </div>

                    <div className='mr-auto'>
                        <p className='text-sm'>Connect to Google Drive</p>
                    </div>
                    
                </div>



                <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 md:flex flex-row justify-between items-center relative group cursor-pointer hidden'>
                    <img src='/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                        <div className='mr-auto'>
                            <p className='text-sm'>Connect to Microsoft OneDrive</p>
                        </div>
                    <img src="/icon/down.svg" className="w-6 scale-75 -rotate-90 hidden md:flex"></img>


                    <div className="absolute bg-ahHoverColor border border-ahBorderColor p-2 rounded-xl right-0 top-0 translate-x-64 w-fit h-28  shadow-lg flex-col justify-center hidden md:group-hover:flex">
                        <div className="h-1/2 hover:bg-ahBorderColor flex flex-row items-center p-2 rounded-lg text-sm cursor-pointer">Microsoft OneDrive - Personal</div>
                        <div className="h-1/2 hover:bg-ahBorderColor flex flex-row items-center p-2 rounded-lg text-sm cursor-pointer">Microsoft OneDrive - Work/School</div>
                    </div>

                    
                </div>

                <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 flex flex-row justify-between items-center relative group cursor-pointer md:hidden'>
                    <img src='/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                        <div className='mr-auto'>
                            <p className='text-sm'>Microsoft OneDrive - Personal</p>
                        </div>
                    
                </div>

                <div className=' hover:bg-ahBorderColor  h-fit rounded-lg p-3 flex flex-row justify-between items-center relative group cursor-pointer md:hidden'>
                    <img src='/icon/onedrive.svg' className='w-6 mr-3 scale-90 '></img>
                        <div className='mr-auto'>
                            <p className='text-sm'>Microsoft OneDrive - Work/School</p>
                        </div>
                    
                </div>


                

            <hr className='w-[90%] border-1 m-1 flex justify-center self-center opacity-10'></hr>

                <div className='hover:bg-ahBorderColor cursor-pointer h-fit rounded-lg p-3  flex flex-row justify-between items-center'>
                    <img src='/icon/fileupload.svg' className='w-6 mr-3 scale-100 brightness-150'></img>
                    <div className='mr-auto'>
                        <p className='text-sm'>Upload from Computer</p>
                    </div>
                </div>
            </div>

        </animated.div>

       

    )

}

export default PopBox3