import React from "react";
import down from "/src/assets/icon/down.svg";
import play from "/src/assets/icon/play.svg";

function Speech() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-sm gap-4">
        <div>Voice</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 ml-auto rounded-full cursor-pointer border border-ahBorderColor flex justify-center items-center">
          <img src={play} className="w-6 scale-75 mr-1"></img>
          <div className="">Play</div>
        </div>

        <hr className="w-4 border-1  opacity-35 rotate-90  "></hr>

        <div className="hover:bg-ahBorderColor py-2 px-5 rounded-lg cursor-pointer flex justify-center items-center">
          <div className="">Ember</div>
          <img src={down} className="w-6 scale-75 -mr-2"></img>
        </div>
      </div>
    </div>
  );
}

export default Speech;
