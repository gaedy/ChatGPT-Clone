import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

function Tooltip({
  text,
  children,
  arrow = "top",
  className = "",
  arrowClassName = "",
}) {
  const arrowPosition = {
    top: "left-1/2 transform -translate-x-1/2 -mt-8 w-2 h-2",
    bottom: "left-1/2 transform -translate-x-1/2 mt-1 w-2 h-2",
    left: "top-1/2 transform -translate-y-1/2 -ml-3 w-2 h-2",
    right: "top-1/2 transform -translate-y-1/2 ml-[88%] w-2 h-2",
  };

  const [isVisible, setIsVisible] = useState(false);

  const mouseEnter = () => {
    setIsVisible(true);
  };
  const mouseLeave = () => {
    setIsVisible(false);
  };
  const getClicked = () => {
    setIsVisible(false);
  };

  const animation = useSpring({
    delay: isVisible ? 300 : 0,
    opacity: isVisible ? 2 : 0,
    config: { mass: 1, clamp: true },
  });

  return (
    <>
      <div
        className=" relative inline-block group "
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={getClicked}
      >
        {children}
        {isVisible && (
          <animated.div
            style={animation}
            className={`absolute ${className} bg-ahBackColor3 border-ahBorderColor border rounded-lg mt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100
             text-ahTextColor top-full p-2 text-sm w-auto text-nowrap text-center shadow-md `}
          >
            {text}
            <div
              className={`absolute ${arrowPosition[arrow]} ${arrowClassName} border-ahBorderColor  bg-ahBackColor3 rotate-45`}
            ></div>
          </animated.div>
        )}
      </div>
    </>
  );
}

export default Tooltip;
