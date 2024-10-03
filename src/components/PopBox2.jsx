import { animated, useSpring } from "@react-spring/web";
import { NavLink } from "react-router-dom";
import user2 from "/src/assets/icon/user2.svg";
import user1 from "/src/assets/icon/user1.svg";
import settings from "/src/assets/icon/settings.svg";
import star from "/src/assets/icon/star.svg";
import logout from "/src/assets/icon/logout.svg";
// import { memo, useCallback } from "react";


function PopBox2({ isOpen, refProp }) {
  const animation = useSpring({
    y: isOpen ? 5 : 0,
    opacity: isOpen ? 1 : 0,
    config: { mass: 1, clamp: true, friction: 15, duration: 200 },
    delay: isOpen ? 100 : 0,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <animated.div style={animation}>
      <dialog
        className="bg-ahHoverColor text-ahTextColor00 border border-ahBorderColor translate-y-8 -translate-x-64 w-64 h-fit z-10
        rounded-2xl p-2 flex flex-col shadow-lg absolute "
        ref={refProp}
      >
        <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center">
          <div>
            <img
              src={user2}
              className="w-6 mr-3 scale-150 brightness-110"
            ></img>
          </div>
          <div className="mr-auto">
            <p className="text-sm">My GPTs</p>
          </div>
        </div>

        <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center">
          <img src={user1} className="w-6 mr-3 scale-150 brightness-110"></img>
          <div className="mr-auto">
            <p className="text-sm">Customize ChatGPT</p>
          </div>
        </div>

        <NavLink to="/settings">
          <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center">
            <img
              src={settings}
              className="w-6 mr-3 scale-150 brightness-110"
            ></img>
            <div className="mr-auto">
              <p className="text-sm">Settings</p>
            </div>
          </div>
        </NavLink>

        <hr className="w-[90%] border-1 m-1 flex justify-center self-center opacity-10"></hr>

        <NavLink to="/pricing">
          <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3  flex flex-row justify-between items-center">
            <img
              src={star}
              className="w-6 p-1 mr-3 scale-90 brightness-90"
            ></img>
            <div className="mr-auto">
              <p className="text-sm">Upgrade Plan</p>
            </div>
          </div>
        </NavLink>

        <hr className="w-[90%] border-1 m-1 flex justify-center self-center opacity-10"></hr>

        <div className="hover:bg-ahBorderColor cursor-pointer  rounded-lg p-3  flex flex-row justify-between items-center">
          <img src={logout} className="w-6 mr-3 scale-150 brightness-110"></img>
          <div className="mr-auto">
            <p className="text-sm">Log Out</p>
          </div>
        </div>
      </dialog>
    </animated.div>
  );
}

export default PopBox2;
