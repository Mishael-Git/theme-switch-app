import React, {useState} from "react";
import { GiMeditation } from "react-icons/gi";
import { CgProfile, CgDetailsMore } from "react-icons/cg";
function Navbar() {
  const [changeColor, setChangeColor]= useState(false)
  //function for handleClick
const handleClick=()=> {
 setChangeColor(!changeColor)
}
  return (
    <div className= {`flex items-center  py-1 justify-between sticky object-contain ${(changeColor === true)? 'bg-[#cbd5e1] text-slate-900 ': '' }`}>
      <div class="flex bg-slate-400 py-3 px-2 justify-center items-center  ">
        <GiMeditation size={20} />
        <p class="font-thin">BREEZ</p>
      </div>
      <div class="flex pl-96 space-x-14 justify-center items-center ">
        <div class="flex pl-64 justify-center items-center space-x-1  ">
          <CgProfile size={20} />
          <p>Login</p>
        </div>
        {/*  */}
        <div class="">
          <button
          onClick={handleClick}
            className={`p-2 bg-[#f5af9ee0] hover:text-slate-50 ease-in duration-300  rounded-full text-sm font-Arialn font-bold tracking-wider `}
          >
            Switch-Theme
          </button>
        </div>

        <div class={`bg-slate-900 flex justify-center items-center w-12 h-12 `}>
          <CgDetailsMore size={20} class="text-slate-200 " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
