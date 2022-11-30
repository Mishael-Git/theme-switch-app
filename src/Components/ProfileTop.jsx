import React from "react";
import { profile1 } from "../Assets/images/Images";
function ProfileTop() {
  return (
    <div className="flex flex-row space-x-9">
      {/*  */}
      <div className="w-32 h-32">
        <img
          src={profile1}
          className="w-full max-w-full rounded-full h-full object-cover object-center"
        />
      </div>
      {/*  */}
      <div className="flex flex-row space-x-6 justify-center items-center">
        <h1 class="text-lg  font-bold text-4xl">Ariana Jones</h1>
        <div className="flex flex-row space-x-8">
          {/*  */}
          <div class="flex flex-col">
            <p class="font-bold">1,208</p>
            <p class="text-slate-500">followers</p>
          </div>
          {/*  */}
          <div className="flex flex-col ">
            <p class="font-bold">380</p>
            <p class="text-slate-500">followings</p>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <div className="flex flex-row space-x-20 justify-center items-center  ">
              <p>😀Beginner </p>
              <p>120 hrs</p>
            </div>
            <div className="  border border-spacing-9 rounded-full  w-56 h-3">
              <div className={`bg-gray-100  w-full h-full`}>
                <div className="rounded-full bg-[#f5af9ee0] h-full w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTop;
