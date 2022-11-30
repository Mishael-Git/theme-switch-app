import React from "react";

function ProfileMiddle() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-extrabold">Statistics</h1>
        <p class="text-slate-500 hover:text-slate-900 ease-out duration-300 cursor-pointer">
          Show all
        </p>
      </div>
      <div>
        <p class="text-slate-500">This week</p>
      </div>
      <div className="flex flex-row pt-4  ">
        <div className="flex flex-row space-x-12 bg-[#f0ddd9e0] rounded-md w-full  justify-between p-10">
          <div className="flex flex-col">
            <p class='font-serif'>Calories</p>
            <p class="font-bold text-3xl">160,5kcal</p>
          </div>
          <div className="flex flex-col">
            <p class='font-serif'>Time</p>
            <p class="font-bold text-3xl">1:03:30 </p>
          </div>
          <div className="flex flex-row space-x-10 justify-evenly items-baseline ">
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-12 w-3"></div>
              <p>Mo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-24 w-3"></div>
              <p>Tu</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-10 w-3"></div>
              <p>We</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-20 w-3"></div>
              <p>Th</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-10 w-3"></div>
              <p>Fr</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-20 w-3"></div>
              <p>Sa</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-full bg-[#f5af9ee0] h-24 w-3"></div>
              <p>Su</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMiddle;
