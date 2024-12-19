import { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import close from "/icon/close.svg";

function Pricing() {
  return (
    <Fragment>
      <div className="flex absolute h-full overflow-y-auto w-full flex-col justify-start items-center gap-4 text-ahTextColor00 bg-ahHoverColor">
        <div className=" absolute md:right-10 right-8 md:top-8 top-6">
          <NavLink to="/">
            <img
              src={close}
              className="w-8 p-1 cursor-pointer  brightness-75 rounded-full hover:bg-ahBackColor hover:brightness-100"
            ></img>
          </NavLink>
        </div>

        <div className="text-2xl font-bold mt-6 md:mt-16 md:text-3xl">
          Upgrade your plan
        </div>

        <div className="bg-ahBorderColor flex justify-center items-center p-1 gap-1 text-sm rounded-full shadow-lg mt-6">
          <NavLink
            to="/pricing"
            end
            className={({ isActive }) => {
              return (
                isActive && "bg-ahBackColor text-ahTextColor00 rounded-full "
              );
            }}
          >
            <div className="  hover:text-ahTextColor00 text-ahTextColor3 rounded-full  p-2 cursor-pointer px-3">
              Personal
            </div>
          </NavLink>

          <NavLink
            to="business"
            className={({ isActive }) => {
              return (
                isActive && "bg-ahBackColor text-ahTextColor00 rounded-full "
              );
            }}
          >
            <div className="  hover:text-ahTextColor00 text-ahTextColor3 rounded-full  p-2 cursor-pointer px-3">
              Business
            </div>
          </NavLink>
        </div>

        <Outlet></Outlet>
      </div>
    </Fragment>
  );
}

export default Pricing;
