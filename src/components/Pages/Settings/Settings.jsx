import React, { Fragment } from 'react'
import { Outlet, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import General from './General/General.jsx'
import Personalization from './Personalization/Personalization.jsx'
import Speech from './Speech/Speech.jsx'
import DataControl from './DataControl/DataControl.jsx'
import BuilderProfile from './BuilderProfile/BuilderProfile.jsx'
import ConnectApps from './ConnectApps/ConnectApps.jsx'
import Security from './Security/Security.jsx'
// import { settingsArray } from './SettingsArray.jsx'

export const settingsArray = [
    {path: "general", name:"General", element:<General/>},
    {path: "personalization", name:"Personalization",  element:<Personalization/>},
    {path: "speech", name:"Speech", element:<Speech/>},
    {path: "datacontrol", name:"Data Control", element:<DataControl/>},
    {path: "builderprofile", name:"Builder Profile", element:<BuilderProfile/>},
    {path: "connectedapps", name:"Connected Apps", element:<ConnectApps/>},
    {path: "security", name:"Security", element:<Security/>},
    
];



function Settings() {



  return (
    <Fragment>
        <div className='bg-black opacity-75 fixed w-full h-full text-ahTextColor00'></div>
        <div className='flex fixed w-full h-full flex-row justify-center items-center'>
            <div className='w-[48rem] h-[30rem] rounded-xl text-ahTextColor00 p-6 bg-ahHoverColor flex flex-col'>
                <div className=' font-semibold text-lg flex flex-row justify-between'>
                    <p>Settings</p>

                    <NavLink to="/">
                        <div className='hover:bg-ahBorderColor cursor-pointer rounded-full p-1'>
                            <img src='src/assets/icon/close.svg' className='w-6 scale-100'></img>
                        </div>
                    </NavLink>
                    
                </div>
                <hr className='w-full border-1 m-1 opacity-10 my-4'></hr>

                <div className='  h-full w-full flex felx-row justify-between'>

                    

                    <div className=' w-1/4 text-md flex flex-col justify-start gap-2 pr-4 '>
                        
                        {/* <NavLink to="/settings/general" className={({isActive}) => {
                            return isActive && "bg-ahBorderColor rounded-md"}}>
                            <div className='p-1 hover:bg-ahBorderColor rounded-md'>General</div>
                        </NavLink> */}
                        

                        {settingsArray.map((setting) =>(
                            <>
                                <NavLink key={setting} to={setting.path} className={({isActive}) => {
                                    return isActive && "bg-ahBorderColor rounded-md"}}>
                                    <div className='p-1 hover:bg-ahBorderColor rounded-md'>{setting.name}</div>
                                </NavLink>
                            </>
                        ))}
                          
                     

                    </div>

                    <div className=' w-3/4 p-4'>

                    
                        <Routes>
                            {/* <Route path="/" element={<Navigate to="general" replace />} /> */}
                            <Route path="general" element={<General/>}/>
                            <Route path="personalization" element={<Personalization/>}/>
                            <Route path="speech" element={<Speech/>}/>
                            <Route path="datacontrol" element={<DataControl/>}/>
                            <Route path="builderprofile" element={<BuilderProfile/>}/>
                            <Route path="connectedapps" element={<ConnectApps/>}/>
                            <Route path="security" element={<Security/>}/>
                        </Routes>

                        
                    </div>
                </div>


            </div>
        </div>
    </Fragment>
    
  )
}

export default Settings