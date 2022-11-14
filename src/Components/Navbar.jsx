import React from "react";
import { GiMeditation } from "react-icons/gi";
import { CgProfile, CgDetailsMore } from "react-icons/cg";
function Navbar() {
  return (
    <div className="flex items-center  space-x-11 h-6 justify-between ">
      <div class="flex bg-slate-400  ">
        <GiMeditation size={20} />
        <p class="font-thin">BREEZ</p>
      </div>
      <div class="flex pl-96 space-x-14">
      <div class="flex pl-64">
        <CgProfile size={20} />
        <p>Login</p>
      </div>

      <div class="bg-[#f5af9ee0] rounded-full ">
        <button>Switch-Theme</button>
      </div>

      <div class="bg-slate-900 ">
        <CgDetailsMore size={20} class="text-slate-200 " />
      </div>
      </div>
    </div>
  );
}

export default Navbar;
