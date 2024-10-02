import React from "react";
import check from "/src/assets/icon/check.svg";
import starfree from "/src/assets/icon/starfree.svg";
import starplus from "/src/assets/icon/starplus.svg";

function Personal() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:px-4 ">
      <div className="border border-ahBorderColor shrink-0 w-11/12 md:w-[50%] md:min-w-80 h-[26rem] md:h-[28rem] rounded-xl p-6 flex flex-col justify-start">
        <div className="flex items-start">
          <img src={starfree} className="w-6 scale-[85%] mr-2"></img>
          <div className="text-lg font-semibold">Free</div>
        </div>

        <div className="text-ahTextColor3">USD 0$/month</div>

        <div className="flex justify-center items-center my-4 mb-6 ">
          <div className=" border cursor-not-allowed border-ahBorderColor text-sm text-ahTextColor3 rounded-full w-full md:w-64 shadow-lg  text-center p-3 px-3">
            Your current plan
          </div>
        </div>

        <div className="text-[13px] flex flex-col gap-1">
          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Assistance with writing, problem solving and more</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Access to GPT-4o mini</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Limited access to GPT-4o</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>
              Limited access to data analysis, file uploads, vision, web
              browsing, and image generation
            </div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Use custom GPTs</div>
          </div>
        </div>

        <div className="md:mb-2 mt-auto mb-auto text-xs">
          Have an existing plan? See billing help
        </div>
      </div>

      <div className="border border-ahBorderColor shrink-0 w-11/12 md:w-[50%] md:min-w-80 h-[28rem] rounded-xl p-6 flex flex-col justify-start">
        <div className="flex items-start">
          <img src={starplus} className="w-6 scale-[115%] mr-2"></img>
          <div className="text-lg font-semibold">Plus</div>
        </div>

        <div className="text-ahTextColor3">USD 20$/month</div>

        <div className="flex justify-center items-center my-4 mb-6 ">
          <div
            className=" border cursor-pointer border-ahBorderColor text-sm text-ahTextColor00
                     rounded-full w-full md:w-64 text-center p-3 px-3 bg-emerald-600 hover:bg-emerald-700 shadow-lg "
          >
            Upgrade to Plus
          </div>
        </div>

        <div className="text-[13px] flex flex-col gap-1">
          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Access to OpenAI o1-preview, OpenAI o1-mini</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Access to GPT-4o, GPT-4o mini, GPT-4</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Up to 5x more messages for GPT-4o</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>
              Access to data analysis, file uploads, vision, and web browsing
            </div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>DALL·E image generation</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Create and use custom GPTs</div>
          </div>

          <div className="flex items-start">
            <img src={check} className="w-6 scale-[60%] mr-2"></img>
            <div>Early access to new features</div>
          </div>
        </div>

        <div className="md:mb-2 mt-auto mb-auto text-xs hover:underline cursor-pointer">
          Limits apply
        </div>
      </div>
    </div>
  );
}

export default Personal;
