import React from "react";
import med4 from "../Assets/images/Meditation4.jpg";
import med2 from "../Assets/images/Meditation2.jpg";
import med3 from "../Assets/images/Meditation3.jpg";
function Middle_info() {
  return (
    <div className="   w-full   py-20 flex flex-col gap-y-5 space-y-6">
      {/*  */}
      <div className="flex flex-col justify-center items-center">
        <h1 class="font-semibold text-3xl">The Breez Experience</h1>
        <p class="text-slate-500">
          Enjoy guided mindfulness and meditation classes online.
        </p>
        <p class="text-slate-500 ">
          Practice with us as much as you want on any digital device.
        </p>
      </div>
      {/*  */}
      <div class="flex gap-x-20 w-full  flex-row justify-center items-center">
        {/*  */}
        <div class=" flex-col w-full max-w-[20%] space-y-5 ">
          <div className="w-full h-40">
            <img src={med4} class="max-w-full w-full h-full object-center" />
          </div>

          <h1 class="font-bold text-lg items-center text-center">
            A Global Network of Teachers
          </h1>
          <p class="w-56 text-slate-500 text-center">
            I'm a paragraph,Click here to add your own text and edit me. I'm a
            great place for you to tell story and let your users know a little
            more about you
          </p>
        </div>
        {/*  */}
        <div class=" flex-col w-full max-w-[20%] space-y-5">
          <div className="w-full h-40">
            <img src={med3} class="max-w-full w-full h-full object-center" />
          </div>
          <h1 class="font-bold text-lg items-center text-center">
            Different Styles for All Ages and Levels
          </h1>
          <p class="w-56 text-slate-500 text-center">
            I'm a paragraph,Click here to add your own text and edit me. I'm a
            great place for you to tell story and let your users know a little
            more about you
          </p>
        </div>
        {/*  */}
        <div class=" flex-col w-full max-w-[20%] space-y-5">
          <div className="w-full h-40">
            <img src={med2} class="max-w-full w-full h-full object-center" />
          </div>
          <h1 class="font-bold text-lg items-center text-center">
            LiveStream Classes From Anywhere
          </h1>
          <p class="w-56 text-slate-500 text-center">
            I'm a paragraph,Click here to add your own text and edit me. I'm a
            great place for you to tell story and let your users know a little
            more about you
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Middle_info;
