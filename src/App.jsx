import React from "react"
import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"




function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen);

}
 
  return (

  <>

    
  
    <div className={`flex flex-col h-screen transition-all duration-500 ${isSidebarOpen ? "sm:ml-64" : "ml-0 "}`}>

      
      <Nav toggleSidebarButton={toggleSidebarButton} isSidebarOpen={isSidebarOpen}></Nav>
      <Main></Main>
      <Footer></Footer>

      
      <div className={`fixed transform transition-transform duration-300 ease-in-out h-full w-3/4 max-w-80 sm:w-64 left-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar toggleSidebarButton={toggleSidebarButton}></Sidebar>
      </div>
      
    </div>
  
  </>

    
      
    
  )
}

export default App
