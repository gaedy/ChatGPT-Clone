import { Check } from "lucide-react";

import { StarFree, StarPlus } from "../../../assets/iconsJSX/icons";

function Personal() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:px-4 ">
      <div className="border border-ahBorderColor shrink-0 w-11/12 md:w-[50%] md:min-w-80 h-[26rem] md:h-[28rem] rounded-xl p-6 flex flex-col justify-start">
        <div className="flex items-start">
          <div className="mr-2">
            <StarFree />
          </div>
          <div className="text-lg font-semibold">Free</div>
        </div>

        <div className="text-ahTextColor3">USD 0$/month</div>

        <div className="flex justify-center items-center my-4 mb-6 ">
          <div className=" border cursor-not-allowed border-ahBorderColor text-sm text-ahTextColor3 rounded-full w-full md:w-64 shadow-lg  text-center p-3 px-3">
            Your current plan
          </div>
        </div>

        <div className="text-[13px] flex flex-col gap-1">
          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2" />
            <div>Assistance with writing, problem solving and more</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2" />
            <div>Access to GPT-4o mini</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2" />
            <div>Limited access to GPT-4o</div>
          </div>

          <div className="flex items-center flex-shrink">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>
              Limited access to data analysis, file uploads, vision, web
              browsing, and image generation
            </div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2" />
            <div>Use custom GPTs</div>
          </div>
        </div>

        <div className="md:mb-2 mt-auto mb-auto text-xs">
          Have an existing plan? See billing help
        </div>
      </div>

      <div className="border border-ahBorderColor shrink-0 w-11/12 md:w-[50%] md:min-w-80 h-[28rem] rounded-xl p-6 flex flex-col justify-start">
        <div className="flex items-start">
          <div className="mr-2">
            {" "}
            <StarPlus />
          </div>

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
          <div className="flex items-center ">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Access to OpenAI o1-preview, OpenAI o1-mini</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Access to GPT-4o, GPT-4o mini, GPT-4</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Up to 5x more messages for GPT-4o</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>
              Access to data analysis, file uploads, vision, and web browsing
            </div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>DALL·E image generation</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Create and use custom GPTs</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
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
