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

  

  <div className={`flex flex-col h-screen transition-all duration-1000 ${isSidebarOpen ? "ml-64" : "ml-0 "}`}>
      
      <Nav toggleSidebarButton={toggleSidebarButton}></Nav>
      
      <Main></Main>
      <Footer></Footer>

      <div className={` fixed transform transition-transform duration-1000 ease-in-out h-full w-64 left-0 bg-ahBackColor3 text-ahTextColor ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar></Sidebar>
      </div>
      
      
  </div>
  
  </>

    
      
    
  )
}

export default App
