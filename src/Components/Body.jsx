import React from "react";
import {TopLeft,TopRight,Middle,MiddleLeft,MiddleRight,BottomLeft,BottomRight} from "./Info";

function Body() {
  return (
    <div className={`grid  relative pt-20 justify-center items-center w-full h-full space-y-8 p-6 `}>
      {/*  */}
      <div className={`px-56`}>
        <div className={`w-full flex flex-row `}>
          <div className={`flex-[0_0_50%] w-full max-w-[50%] `}>
            <TopLeft />
          </div>
          <div className={`flex-[0_0_50%] w-full max-w-[50%] `}>
            <TopRight />
          </div>
        </div>
      </div>
      {/*  */}
      <div className={`px-56 bg-slate-300`}>
        <Middle />
      </div>
      {/*  */}
      <div class='px-56'>
      <div class="w-full flex flex-row ">
      <div className={`flex-[0_0_50%] w-full max-w-[50%]  `}>
      <MiddleLeft />
        </div>
        <div className={`flex-[0_0_50%] w-full max-w-[50%] `}>
        <MiddleRight />
        </div>
      </div>
      </div>
      {/*  */}
      <div
      className="px-56">
        <div class=" w-full flex flex-row ">
        <div className={`flex-[0_0_50%] w-full max-w-[50%]  `}>
        <BottomLeft />
        </div>
        <div className={`flex-[0_0_50%] w-full max-w-[50%] `}>
        <BottomRight />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Body;
