import React, { useRef } from "react"
import { useState, useEffect, usere } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"




function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const sideRef = useRef();

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', clickOutside);
    }
    return () =>{
      document.removeEventListener('mousedown', clickOutside);
    }
  }, [isSidebarOpen]);

  const clickOutside = (eve) => {
    if (sideRef.current && !sideRef.current.contains(eve.target)) {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    }
  }


 
  return (

  <>
  
    <div className={`flex flex-col h-screen transition-all duration-500 ${isSidebarOpen ? "md:ml-64" : "ml-0 "}`}>

      <Nav toggleSidebarButton={toggleSidebarButton} isSidebarOpen={isSidebarOpen}></Nav>
      <Main></Main>
      <Footer></Footer>
      <div className={`fixed transform transition-transform duration-300 ease-in-out h-full w-3/4 max-w-80 z-50  md:w-64 left-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`} ref={sideRef}>
        <Sidebar toggleSidebarButton={toggleSidebarButton}></Sidebar>
      </div>
      <Outlet></Outlet>
    </div>
    
    <div className={isSidebarOpen && "overlay md:hidden"}></div>
    
  </>

    
)}

export default App
