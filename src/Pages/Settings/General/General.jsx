import React from "react";
// import { useParams } from 'react-router-dom'
import down from "/icon/down.svg";

function General() {
  return (
    <div className="w-full h-full flex flex-col text-sm">
      <div className="flex flex-row justify-between items-center">
        <div>Theme</div>

        <div className="hover:bg-ahBorderColor py-2 px-5 rounded-lg cursor-pointer flex justify-center items-center">
          <div>Dark</div>
          <img src={down} className="w-6 scale-75 -mr-2"></img>
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3 "></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Always show code when using data analyst</div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Language</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 rounded-lg cursor-pointer flex justify-center items-center">
          <div>English(US)</div>
          <img src={down} className="w-6 scale-75 -mr-2"></img>
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Archived chats</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Manage
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Archive all chats</div>
        <div className="hover:bg-ahBorderColor py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Archive all
        </div>
      </div>

      <hr className="w-full border-1 opacity-10 my-3"></hr>

      <div className="flex flex-row justify-between items-center">
        <div>Delete all chats</div>
        <div className="hover:bg-red-600 bg-red-500 py-2 px-5 border border-ahBorderColor rounded-full cursor-pointer">
          Delete all
        </div>
      </div>
    </div>
  );
}

export default General;
