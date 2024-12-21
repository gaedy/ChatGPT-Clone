import { Check } from "lucide-react";
import { TeamsIcon } from "../../../assets/iconsJSX/icons";

function Business() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 py-4 md:px-10">
      <div className="border border-ahBorderColor shrink-0 w-11/12 md:w-[30rem] h-[28rem] rounded-xl p-6 flex flex-col justify-start">
        <div className="flex items-start">
          <div className="mr-2">
            <TeamsIcon />
          </div>
          <div className="text-lg font-semibold">Team</div>
        </div>

        <div className="text-ahTextColor3">USD $25 per person/month*</div>

        <div className="flex justify-center items-center my-4 ">
          <div
            className=" border cursor-pointer border-ahBorderColor text-sm text-ahTextColor00
                     rounded-full w-full md:w-64 text-center p-3 px-3 bg-blue-700 hover:bg-blue-800 shadow-lg "
          >
            Upgrade to Team
          </div>
        </div>

        <div className="text-[13px] flex flex-col gap-1">
          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>
              Higher limits for GPT-4, GPT-4o, and tools like DALL·E image
              generation, advanced data analysis, web browsing, and more
            </div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Create and share GPTs with your workspace</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Admin console for workspace management</div>
          </div>

          <div className="flex items-center">
            <Check size={17} className="scale-90 mr-2 shrink-0" />
            <div>Team data excluded from training by default.</div>
          </div>
        </div>

        <div className="md:mb-2 mt-auto mb-auto text-xs">
          * Price billed annually, minimum 2 users
        </div>
      </div>
    </div>
  );
}

export default Business;
