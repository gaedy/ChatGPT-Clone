import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import down from "/icon/down.svg";
import Tooltip from "../../components/Tooltip";
import PopBox2 from "../../components/PopBox2";
import PopBox from "../../components/PopBox";
import useClickOutside from "../../Hooks/useClickOutside";
import {
  CircleUserRound,
  Menu,
  PanelRightClose,
  SquarePen,
} from "lucide-react";

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
          <Menu size={24} color="white" className="brightness-75" />
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
            <SquarePen color="white" className="brightness-75" />
          </div>
        </Tooltip>
      </div>
      {/* Larger Screen */}
      <div className="md:flex  md:justify-center justify-between items-center m-2 mx-3 select-none hidden  ">
        <Tooltip
          text={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          arrow="top"
          arrowClassName="left-5 border-l border-t"
        >
          <div
            className={`hover:bg-ahHoverColor  p-2 rounded-lg cursor-pointer bg-none transition-all active:scale-95  
                    ${isSidebarOpen ? "md:hidden visible" : "visible"}`}
            onClick={toggleSidebarButton}
          >
            <PanelRightClose color="white" className="brightness-75" />
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
              className={`hover:bg-ahHoverColor p-2 rounded-lg cursor-pointer bg-none transition-all active:scale-95
                        ${isSidebarOpen ? "sm:hidden visible" : "visible"}`}
            >
              <SquarePen color="white" className="brightness-75" />
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
                transition-all duration-500 hidden md:flex active:scale-95"
          onClick={toggleProfileButton}
          ref={profileBottomRef}
        >
          <CircleUserRound color="white" className="brightness-75" />
          <PopBox2 isOpen={isProfileOpen} refProp={profileRef} />
        </div>
      </div>
    </>
  );
}

export default Nav;
