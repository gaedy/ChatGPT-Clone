import React from "react";
import down from "/src/assets/icon/down.svg";

function Personalization() {
  return (
    <div className="w-full h-full flex flex-col text-sm">
      <div className="flex flex-row justify-between items-center">
        <div>Custom instructions</div>

        <div className="hover:bg-ahBorderColor py-2 px-5 rounded-lg cursor-pointer flex justify-center items-center">
          <div className="">Off</div>
          <img src={down} className="w-6 scale-75 -mr-2"></img>
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3 "></hr>

      <div className="flex flex-row justify-between items-center mb-4 ">
        <div>Memory</div>
      </div>

      <div className="flex flex-col gap-4 mr-10 ml-2 text-pretty text-ahTextColor ">
        <div className="text-xs">
          ChatGPT will become more helpful as you chat, picking up on details
          and preferences to tailor its responses to you.
        </div>

        <div className="text-xs">
          <p className="mb-2">
            To understand what ChatGPT remembers or teach it something new, just
            chat with it:
          </p>

          <div className="ml-2">
            <li>“Remember that I like concise responses.”</li>
            <li>“I just got a puppy!”</li>
            <li>“What do you remember about me?”</li>
            <li>“Where did we leave off on my last project?”</li>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between my-auto">
        <div className="hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Manage
        </div>
        <div className="hover:bg-red-600 bg-red-500 py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Clear ChatGPT's memory
        </div>
      </div>
    </div>
  );
}

export default Personalization;
