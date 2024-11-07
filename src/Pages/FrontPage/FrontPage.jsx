import { useRef } from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Nav from "../Home/Nav";
import Sidebar from "../Home/Sidebar";
import Main from "../Home/Main";
import Footer from "../Home/Footer";

function FrontPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideRef = useRef();

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", clickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isSidebarOpen]);

  const clickOutside = (eve) => {
    if (sideRef.current && !sideRef.current.contains(eve.target)) {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    }
  };
  return (
    <Fragment>
      <div
        className={`flex flex-col h-screen transition-all duration-500 ${
          isSidebarOpen ? "md:ml-64" : "ml-0 "
        }`}
      >
        <Nav
          toggleSidebarButton={toggleSidebarButton}
          isSidebarOpen={isSidebarOpen}
        />
        <Main />
        <Footer />
        <div
          className={`fixed transform transition-transform duration-500 ease-in-out h-full w-3/4 max-w-80 z-50  md:w-64 left-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={sideRef}
        >
          <Sidebar toggleSidebarButton={toggleSidebarButton}></Sidebar>
        </div>
        <Outlet />
      </div>

      <div
        className={
          isSidebarOpen && "overlay transition-all duration-300 md:hidden"
        }
      ></div>
    </Fragment>
  );
}

export default FrontPage;
