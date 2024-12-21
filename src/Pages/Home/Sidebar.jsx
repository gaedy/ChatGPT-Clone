/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Tooltip from "../../components/Tooltip";
import Item from "./Items/Item";
import { itemsArray } from "./Items/itemsArray";
import {
  LayoutGrid,
  Menu,
  PanelRightOpen,
  Sparkle,
  Sparkles,
  SquarePen,
} from "lucide-react";

function Sidebar({ toggleSidebarButton }) {
  return (
    <>
      <div className="bg-ahBackColor2 absolute h-full w-full flex flex-col justify-start py-2 px-2= p-2 text-sm text-ahTextColor00 border-r border-ahBorderColor border-opacity-50 shadow-lg select-none ">
        <div className="flex flex-row justify-between mx-1  ">
          <Tooltip
            text="Close Sidebar"
            className="translate-x-14 -translate-y-12"
            arrow="left"
            arrowClassName="border-b border-l"
          >
            <div
              className="hover:bg-ahBackColor p-2 rounded-lg cursor-pointer active:scale-95"
              onClick={toggleSidebarButton}
            >
              <PanelRightOpen
                color="white"
                className="brightness-75 hidden md:flex"
              />

              <Menu
                size={24}
                color="white"
                className="brightness-75 md:hidden"
              />
            </div>
          </Tooltip>

          <Tooltip
            text="New Chat"
            arrow="right"
            className="-translate-x-24 -translate-y-12"
            arrowClassName="left-[6px] border-t border-r"
          >
            <div className="hover:bg-ahBackColor p-2 rounded-lg cursor-pointer active:scale-95">
              <SquarePen color="white" className="brightness-75" />
            </div>
          </Tooltip>
        </div>

        {/* Middle */}

        <div className=" overflow-y-auto overflow-clip mt-4 h-full">
          <div className="h-10 hover:bg-ahBackColor rounded-lg mt-0 p-2 mx-1 flex flex-row items-center text-sm cursor-pointer group">
            <Sparkle size={18} color="white" className="brightness-75 mr-2" />
            <div>ChatGPT</div>

            <SquarePen
              color="white"
              className="brightness-75 p-1 hover:brightness-100 ml-auto hidden group-hover:flex"
            />
          </div>

          <div className="h-10 hover:bg-ahBackColor rounded-lg p-2 mx-1 flex flex-row items-center text-sm cursor-pointer">
            <LayoutGrid
              size={18}
              color="white"
              className="brightness-75 mr-2"
            />
            <div>Explore GPTs</div>
          </div>

          <div className="flex flex-col flex-grow">
            {itemsArray.map((myItems) => (
              <Item date={myItems.date} item={myItems.item}></Item>
            ))}
          </div>
        </div>

        <div className=" p-2 h-14 mx-1 mt-2 hover:bg-ahBackColor rounded-lg flex flex-row items-center justify-start cursor-pointer">
          <Sparkles size={18} color="white" className="brightness-75 mr-2" />

          <div className="flex flex-col justify-center items-start">
            <p>Upgrade Plan</p>
            <p className="text-[11px] brightness-75">
              More access to the best models
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
