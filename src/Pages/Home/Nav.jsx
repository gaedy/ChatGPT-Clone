import React from "react";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import sidebarmobile from "/src/assets/icon/sidebarmobile.svg";
import down from "/src/assets/icon/down.svg";
import newchat from "/src/assets/icon/newchat.svg";
import sidebar1 from "/src/assets/icon/sidebar1.svg";
import profile from "/src/assets/icon/profile.svg";
import Tooltip from "../../components/Tooltip";
import PopBox2 from "../../components/PopBox2";
import PopBox from "../../components/PopBox";
import useClickOutside from "../../Hooks/useClickOutside";

function Nav({ toggleSidebarButton, isSidebarOpen }) {
  const priceRef = useRef();
  const priceBottomRef = useRef();

  const profileRef = useRef();
  const profileBottomRef = useRef();

  const [isPopupChatOpen, setIsPopupChatOpen] = useState(false);
  const [isArrowFlip, setIsArrowFlip] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleChatButton = () => {
    setIsPopupChatOpen(!isPopupChatOpen);
    setIsArrowFlip(!isArrowFlip);
  };
  const toggleProfileButton = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useClickOutside(toggleProfileButton, profileRef, profileBottomRef);
  useClickOutside(toggleChatButton, priceRef, priceBottomRef);

  return (
    <>
      <div className="md:hidden flex flex-row justify-between m-2 mx-3 select-none">
        <div
          className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all 
                ${isSidebarOpen ? "md:hidden visible" : "visible"}`}
          onClick={toggleSidebarButton}
        >
          <img
            src={sidebarmobile}
            className="w-6 min-w-6 brightness-75 pointer-events-none"
          />
        </div>

        <div
          className={`hover:bg-ahHoverColor rounded-lg px-3 py-[6px] text-ahTextColor2 font-medium text-lg
                flex flex-row select-none cursor-pointer bg-none relative transition-all 
                ${isPopupChatOpen && "bg-ahHoverColor"}`}
          onClick={toggleChatButton}
          ref={priceBottomRef}
        >
          <p>ChatGPT Auto</p>
          <img
            src={down}
            className={`w-6 min-w-6 scale-75 -mr-1 transition-transform duration-200 pointer-events-none 
                    ${isArrowFlip ? "rotate-180" : "rotate-0"}`}
          />
          <div className="absolute top-12 bottom-full md:left-0 -left-[57%]">
            <PopBox isOpen={isPopupChatOpen} refProp={priceRef} />
          </div>
        </div>

        <Tooltip
          text="New Chat"
          position="bottom"
          className="right-0 "
          arrow="top"
          arrowClassName="left-16 border-l border-t "
        >
          <div
            className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all 
                    ${isSidebarOpen ? "md:hidden visible" : "visible"}`}
          >
            <img
              src={newchat}
              className="w-6 min-w-6 pointer-events-none brightness-75"
            />
          </div>
        </Tooltip>
      </div>
      {/* Larger Screen */}
      <div className="md:flex  md:justify-center justify-between items-center m-2 mx-3 select-none hidden">
        <Tooltip
          text={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          arrow="top"
          arrowClassName="left-5 border-l border-t"
        >
          <div
            className={`hover:bg-ahHoverColor  p-2 rounded-lg cursor-pointer bg-none transition-all 
                    ${isSidebarOpen ? "md:hidden visible" : "visible"}`}
            onClick={toggleSidebarButton}
          >
            <img
              src={sidebar1}
              className="w-6 min-w-6 pointer-events-none brightness-75"
            />
          </div>
        </Tooltip>

        <Tooltip
          text="New Chat"
          position="bottom"
          className="-ml-5"
          arrowClassName="border-l border-t"
        >
          <NavLink to="/">
            <div
              className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all 
                        ${isSidebarOpen ? "sm:hidden visible" : "visible"}`}
            >
              <img
                src={newchat}
                className="w-6 min-w-6 pointer-events-none brightness-75"
              />
            </div>
          </NavLink>
        </Tooltip>

        <div
          className={`hover:bg-ahHoverColor rounded-lg px-3 py-[6px] text-ahTextColor2 font-medium text-lg
                flex flex-row select-none cursor-pointer bg-none relative transition-all 
                ${isPopupChatOpen && "bg-ahHoverColor"}`}
          onClick={toggleChatButton}
          ref={priceBottomRef}
        >
          <p>ChatGPT Auto</p>
          <img
            src={down}
            className={`w-6 min-w-6 scale-75 -mr-1 transition-transform duration-200 pointer-events-none 
                    ${isArrowFlip ? "rotate-180" : "rotate-0"}`}
          ></img>

          <div className="absolute left-0 top-12 bottom-full">
            <PopBox isOpen={isPopupChatOpen} refProp={priceRef} />
          </div>
        </div>
        <div
          className="hover:bg-ahHoverColor p-2 rounded-full ml-auto cursor-pointer bg-none relative 
                transition-all hidden md:flex"
          onClick={toggleProfileButton}
          ref={profileBottomRef}
        >
          <img
            src={profile}
            className="w-6 min-w-6 scale-125 pointer-events-none"
          ></img>
          <PopBox2 isOpen={isProfileOpen} refProp={profileRef}></PopBox2>
        </div>
      </div>
    </>
  );
}

export default Nav;
