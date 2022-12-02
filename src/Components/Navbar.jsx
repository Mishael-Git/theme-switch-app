import React from "react";
import { GiMeditation } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CgProfile, CgDetailsMore } from "react-icons/cg";
import ReactSwitch from "react-switch";
import { useThemeContext } from "../services/ThemeProvider";

function Navbar() {
  const { handleColorChange, changeTheme } = useThemeContext();
  return (
    <div className="flex flex-row bg-slate-100 p-2 mt-0 fixed w-full justify-between z-10 top-0 ">
        <div class="flex bg-slate-400 py-3 px-2 justify-center items-center  ">
          <GiMeditation size={20} />
          <p class=" font-thin">BREEZ</p>
        </div>
        <div class="flex pl-96 space-x-14 justify-center items-center ">
          <div class="flex pl-64 justify-center items-center space-x-1  ">
            <CgProfile size={20} />
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </div>
          {/*  */}
          <div className="flex items-center justify-center">
            <ReactSwitch onChange={handleColorChange} checked={changeTheme} />
          </div>

          {/*  */}
          <div class="">
            <Link to="/">
              <button
                className={`p-2 bg-[#f5af9ee0] hover:text-slate-50 ease-in duration-300  rounded-full text-sm font-Arialn font-bold tracking-wider `}
              >
                Home-Page
              </button>{" "}
            </Link>
          </div>

          <div
            class={`bg-slate-900 flex justify-center items-center w-12 h-12  object-contain`}
          >
            <CgDetailsMore size={20} class="text-slate-200 " />
          </div>
        </div>
      </div>
  );
}

export default Navbar;
