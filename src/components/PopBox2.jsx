/* eslint-disable react/prop-types */
import { animated, useSpring } from "@react-spring/web";
import { NavLink } from "react-router-dom";
import {
  Bolt,
  LogOut,
  UserRoundPen,
  UserRoundSearch,
  WandSparkles,
} from "lucide-react";

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
          <div className="pr-3 brightness-90 ">
            <UserRoundSearch size={20} />
          </div>
          <div className="mr-auto">
            <p className="text-sm">My GPTs</p>
          </div>
        </div>

        <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center">
          <div className="pr-3 brightness-90 ">
            <UserRoundPen size={20} />
          </div>
          <div className="mr-auto">
            <p className="text-sm">Customize ChatGPT</p>
          </div>
        </div>

        <NavLink to="/settings">
          <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3 flex flex-row justify-between items-center">
            <div className="pr-3 brightness-90 ">
              <Bolt size={20} />
            </div>
            <div className="mr-auto">
              <p className="text-sm">Settings</p>
            </div>
          </div>
        </NavLink>

        <hr className="w-[90%] border-1 m-1 flex justify-center self-center opacity-10"></hr>

        <NavLink to="/pricing">
          <div className="hover:bg-ahBorderColor cursor-pointer rounded-lg p-3  flex flex-row justify-between items-center">
            <div className="pr-3 brightness-90 ">
              <WandSparkles size={20} />
            </div>
            <div className="mr-auto">
              <p className="text-sm">Upgrade Plan</p>
            </div>
          </div>
        </NavLink>

        <hr className="w-[90%] border-1 m-1 flex justify-center self-center opacity-10"></hr>

        <div className="hover:bg-ahBorderColor cursor-pointer  rounded-lg p-3  flex flex-row justify-between items-center">
          <div className="pr-3 brightness-90 ">
            <LogOut size={20} />
          </div>{" "}
          <div className="mr-auto">
            <p className="text-sm">Log Out</p>
          </div>
        </div>
      </dialog>
    </animated.div>
  );
}

export default PopBox2;
