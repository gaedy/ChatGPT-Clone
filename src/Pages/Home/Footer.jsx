import { useState, useRef } from "react";
import Tooltip from "../../components/Tooltip";
import PopBox3 from "../../components/PopBox3";
import useClickOutside from "../../Hooks/useClickOutside";
import { ArrowUp, Link2 } from "lucide-react";

function Footer() {
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [isInput, setIsInput] = useState("");
  const [isSubmit, setIsSubmit] = useState("");

  const itemRef = useRef();
  const buttonRef = useRef();

  function toggleAttachButtom() {
    setIsAttachOpen(!isAttachOpen);
  }

  function handleInput(e) {
    setIsInput(e.target.value);
  }

  useClickOutside(toggleAttachButtom, itemRef, buttonRef);

  return (
    <>
      <footer className="flex flex-col justify-center items-center h-fit w-full px-4 relative">
        <form
          className="w-full max-w-3xl bg-ahHoverColor h-[52px] rounded-full flex flex-row justify-center items-center
        transition-all duration-300 border border-ahBorderColor border-opacity-20 hover:border-opacity-100
        focus-within:border-opacity-100 focus-within:shadow-lg hover:shadow-lg "
        >
          <Tooltip
            text="Attach File"
            arrow="bottom"
            className="tranform -translate-y-24"
            arrowClassName="left-7 border-b border-r"
          >
            <div
              className=" w-6 ml-4 cursor-pointer select-none"
              onClick={toggleAttachButtom}
              ref={buttonRef}
            >
              <Link2 color="white" />
            </div>
          </Tooltip>

          <input
            className="w-3/4 px-3 h-3/4 flex-1 min-w-[75%] bg-transparent border-none
            outline-none text-ahTextColor00 placeholder-ahTextColor3 text-base"
            type="text"
            value={isInput}
            placeholder="Message ChatGPT"
            onChange={handleInput}
          />

          <div className="bg-white opacity-30 rounded-full p-1.5 mr-2">
            <ArrowUp className="p-0.5" />
          </div>
        </form>

        <div className="absolute bottom-full w-full flex justify-center">
          <PopBox3 isOpen={isAttachOpen} refProp={itemRef} />
        </div>

        <div className="text-ahTextColor2 text-xs mt-2 mb-1">
          ChatGPT can make mistakes. Check important info.
        </div>
      </footer>
    </>
  );
}

export default Footer;
