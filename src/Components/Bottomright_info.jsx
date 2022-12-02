import React from "react";
import { BiDollar } from "react-icons/bi";
function Bottomright_info() {
  return (
    <div className="flex   justify-end items-end  ">
      {/*  */}
      <div className='grid grid-cols-2 space-x-1'>
      <div class="flex flex-col w-40 space-y-4 bg-[#060511] items-center justify-center h-60">
        <h1 class="text-zinc-50 underline-offset-8 border-b-2  inline border-zinc-50">
          MONTHLY PLAN
        </h1>
        <p class="text-zinc-50">Cancel Anytime</p>
        <BiDollar class="text-[#e79445]" />
        <p class="font-extrabold text-xl text-[#e79445]">29</p>
        <button class="border-2 border-zinc-50 hover:text-[#e79445] ease-out duration-300 text-zinc-50 rounded-full">
          See More
        </button>
      </div>
      {/*  */}
      <div class="flex flex-col w-40 space-y-4 bg-[#060511] items-center justify-center h-60">
        <h1 class="text-zinc-50 border-b-2  inline border-zinc-50">
          YEARLY PLAN
        </h1>
        <p class="text-zinc-50">Limited Offer 25% Off</p>
        <BiDollar class="text-[#e79445]" />
        <p class="font-extrabold text-xl text-[#e79445]">250</p>
        <button class="border-2 border-zinc-50 hover:text-[#e79445] ease-out duration-300 text-zinc-50 rounded-full ">
          See More
        </button>
      </div>
      </div>
    </div>
  );
}

export default Bottomright_info;
