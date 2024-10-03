/* eslint-disable react/jsx-key */
import React, { useRef } from "react";
import logo from "/src/assets/icon/logo.svg";
import Suggest from "./Suggestions/Suggest";
import { suggestionsArray } from "./Suggestions/suggestionsArray";

function Main() {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow select-none ">
        <div className="w-16 brightness-100 bg-none pointer-events-none mb-[3rem] -z-10 mt-auto">
          <img src={logo} alt="Logo Icon" className=" brightness-90"></img>
        </div>
        <div className="flex flex-row gap-4 flex-wrap-reverse justify-center items-center w-[95%] px-2 mb-auto">
          {suggestionsArray.map((suggestion, index) => (
            <Suggest
              text={suggestion.text}
              icon={suggestion.icon}
              className={index < 2 && "hidden md:flex"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
