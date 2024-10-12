import { animated, easings, useSpring } from "@react-spring/web";
import { NavLink } from "react-router-dom";


function PopBox({ isOpen, refProp }) {

  const animation = useSpring({
    y: isOpen ? 0 : -5,
    opacity: isOpen ? 1 : 0,
    config: { mass: 1, easing: easings.steps(5),clamp:true, friction:15 },
    delay: isOpen ? 100 : 0,
  });

    
  if (!isOpen) {
    return null;
  }
  
  return (
    <animated.div style={animation}>
      <div
        className="bg-ahHoverColor text-ahTextColor00 border border-ahBorderColor relative w-dvw max-h-96 max-w-[22rem] z-50
              rounded-2xl p-2 flex flex-col shadow-lg"
        ref={refProp}
      >
        <NavLink to="/pricing">
          <div className="hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center">
            <div>
              <img
                src="src/assets/icon/chat2.svg"
                className="w-6 mr-3 brightness-90"
              ></img>
            </div>
            <div className="mr-auto">
              <p className="text-sm">ChatGPT Plus</p>
              <p className="text-xs text-ahTextColor2">
                Our Smartest Model & More
              </p>
            </div>
            <div>
              <div className="bg-blue-700 hover:bg-blue-800  p-1 text-sm rounded-2xl w-20 h-8 flex justify-center items-center text-ahTextColor00 font-semibold ">
                Upgrade
              </div>
            </div>
          </div>
        </NavLink>

        <div className="hover:bg-ahBorderColor cursor-pointer h-[40%] rounded-lg p-3 flex flex-row justify-between items-center">
          <img
            src="src/assets/icon/chat1.svg"
            className="w-6 mr-3 brightness-90"
          ></img>
          <div className="mr-auto">
            <p className="text-sm">ChatGPT</p>
            <p className="text-xs text-ahTextColor2">Great for everyday tasks</p>
          </div>
        </div>

        <hr className="w-[90%] border-1 m-1 flex justify-center self-center opacity-10"></hr>

        <div className="hover:bg-ahBorderColor cursor-pointer h-[25%] rounded-lg p-3  flex flex-row justify-between items-center">
          <img
            src="src/assets/icon/tempchat.svg"
            className="w-6 mr-3 scale-150 brightness-150"
          ></img>
          <div className="mr-auto">
            <p className="text-sm">Temporary Chat</p>
          </div>
        </div>
      </div>

    </animated.div>
  );
}

export default PopBox;
