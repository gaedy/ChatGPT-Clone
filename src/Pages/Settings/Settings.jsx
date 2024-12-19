import { Fragment } from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import General from "./General/General";
import Personalization from "./Personalization/Personalization";
import Speech from "./Speech/Speech";
import DataControl from "./DataControl/DataControl";
import BuilderProfile from "./BuilderProfile/BuilderProfile";
import ConnectApps from "./ConnectApps/ConnectApps";
import Security from "./Security/Security";
import Tooltip from "../../components/Tooltip";
import closelogo from "/icon/close.svg";

export const settingsArray = [
  { path: "general", name: "General" },
  { path: "personalization", name: "Personalization" },
  { path: "speech", name: "Speech" },
  { path: "datacontrol", name: "Data Control" },
  { path: "builderprofile", name: "Builder Profile" },
  { path: "connectedapps", name: "Connected Apps" },
  { path: "security", name: "Security" },
];

function Settings() {
  return (
    <Fragment>
      <div className="bg-black opacity-75 fixed w-full h-full text-ahTextColor00 "></div>

      <div className="flex fixed w-full h-full flex-row justify-center items-center overflow-y-auto ">
        <div className="w-[48rem] h-[32rem] rounded-xl text-ahTextColor00 p-6 bg-ahHoverColor flex flex-col">
          <div className="font-semibold text-lg flex flex-row justify-between items-center">
            <p>Settings</p>

            <div>
              <NavLink to="/">
                <Tooltip
                  text="Close"
                  arrow="right"
                  arrowClassName="left-0"
                  className=" -translate-x-16 -translate-y-12"
                >
                  <div className="hover:bg-ahBorderColor cursor-pointer rounded-full p-1">
                    <img src={closelogo} className="w-6"></img>
                  </div>
                </Tooltip>
              </NavLink>
            </div>
          </div>
          <hr className="w-full border-1 m-1 opacity-10 my-4"></hr>

          <div className="h-full w-full flex felx-row justify-between">
            <div className=" w-1/4 text-sm flex flex-col justify-start gap-2 pr-6">
              {settingsArray.map((setting) => (
                <NavLink
                  key={setting}
                  to={setting.path}
                  className={({ isActive }) => {
                    return isActive && "bg-ahBorderColor rounded-md";
                  }}
                >
                  <div className="p-2 hover:bg-ahBorderColor rounded-md">
                    {setting.name}
                  </div>
                </NavLink>
              ))}
            </div>

            <div className=" w-3/4 p-2">
              <Routes>
                <Route index element={<Navigate to="general" />} />
                <Route path="general" element={<General />} />
                <Route path="personalization" element={<Personalization />} />
                <Route path="speech" element={<Speech />} />
                <Route path="datacontrol" element={<DataControl />} />
                <Route path="builderprofile" element={<BuilderProfile />} />
                <Route path="connectedapps" element={<ConnectApps />} />
                <Route path="security" element={<Security />} />
              </Routes>
            </div>
          </div>

          <p className=" text-xs flex flex-row bottom-0 justify-center items-center text-ahTextColor3 select-none pointer-events-none">
            This settings page has no functionality, interface design only.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Settings;
